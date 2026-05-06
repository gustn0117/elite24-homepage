import { GoogleGenerativeAI } from "@google/generative-ai";
import type { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SYSTEM = `너는 (주)엘리트24의 AI 상담 도우미야. 친절하고 간결하게, 존댓말로 답변해.

[회사 정보]
- 상호: (주)엘리트24
- 대표: 황필성
- 전문: 기업이사 (사무실·공장·창고 이전) 전문 이사짐센터
- ⚠️ 가정이사는 진행하지 않음. 가정이사 문의는 정중히 사양하고 기업이사만 안내.
- 주소: 서울 금천구 독산로 106길 15
- 대표 전화: 010-3956-6618
- 사무실: 02-6958-8067
- 이메일: pirseng0825@naver.com

[서비스]
1. 사무실 이전 — 본사·지사·사무실 전체. IT 장비, OA가구, 서류 안전 포장. 주말·야간 가능.
2. 공장 / 창고 이전 — 생산 라인, 자재, 재고. 중량물·지게차·사다리차 협업.
3. 법인 / 기관 이전 — 병원·학원·관공서. 보안 자료 케어, 정해진 일정 준수.

[견적 (1톤 기준, 부가세 별도)]
- 고객 사전포장: 30만원/톤 (운반 작업만)
- 엘리트 풀패키지: 40만원/톤 (포장재 제공 + 전문 인력 포장 + 운반 + 기본 정리)
- 추가: 계단 작업 +30%, 사다리차 별도
- 정확한 견적은 무료 현장 조사 후 확정

[진행 절차]
1. 전화 / 온라인 상담 (1차 견적)
2. 무료 현장 방문 조사
3. 정확한 견적 제안
4. 이사 진행 및 마무리

[답변 원칙]
- 짧고 명확하게. 보통 2~4문장. 필요할 때만 길게.
- 모르는 정보는 모른다고 인정하고 010-3956-6618 전화 상담을 안내.
- 회사와 무관한 일반 질문(코딩·날씨·잡담 등)은 정중히 사양하고 이사 관련 문의로 유도.
- 정확한 견적·일정 협의는 결국 전화 상담을 권유.
- 마크다운 문법(**, *, # 등)은 사용하지 말 것. 일반 텍스트로만 답변.`;

type ClientMsg = { role: "user" | "assistant"; content: string };

export async function POST(req: NextRequest) {
  let body: { messages?: ClientMsg[] };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const messages = body.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return Response.json({ error: "messages required" }, { status: 400 });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return Response.json(
      {
        error:
          "AI 상담이 아직 활성화되지 않았습니다. 010-3956-6618로 직접 전화 주시면 빠르게 안내드리겠습니다.",
      },
      { status: 503 },
    );
  }

  // Normalize: cap last 20, trim content, drop empties
  const normalized: ClientMsg[] = messages
    .slice(-20)
    .map((m): ClientMsg => ({
      role: m.role === "assistant" ? "assistant" : "user",
      content: String(m.content ?? "").slice(0, 2000).trim(),
    }))
    .filter((m) => m.content.length > 0);

  // Drop any leading assistant messages (e.g. client-side welcome) so first is user
  const firstUserIdx = normalized.findIndex((m) => m.role === "user");
  if (firstUserIdx === -1) {
    return Response.json({ error: "no user message" }, { status: 400 });
  }
  const conversation = normalized.slice(firstUserIdx);

  // Last message must be user (the new question)
  if (conversation[conversation.length - 1].role !== "user") {
    return Response.json({ error: "last message must be user" }, { status: 400 });
  }

  // Gemini history = conversation minus the last user message (which we sendMessage)
  const history = conversation.slice(0, -1).map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));
  const lastUserMsg = conversation[conversation.length - 1].content;

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: SYSTEM,
    generationConfig: {
      temperature: 0.4,
      maxOutputTokens: 1024,
    },
  });

  const chat = model.startChat({ history });

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      try {
        const result = await chat.sendMessageStream(lastUserMsg);
        for await (const chunk of result.stream) {
          const text = chunk.text();
          if (text) controller.enqueue(encoder.encode(text));
        }
      } catch (err) {
        const msg = err instanceof Error ? err.message : "오류";
        controller.enqueue(
          encoder.encode(
            `\n\n[오류가 발생했습니다: ${msg}]\n010-3956-6618로 전화 주세요.`,
          ),
        );
      } finally {
        controller.close();
      }
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Accel-Buffering": "no",
    },
  });
}
