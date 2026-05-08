"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSiteConfig } from "@/components/SiteConfigProvider";

type Msg = { role: "user" | "assistant"; content: string };

const QUICK_REPLIES = [
  "견적 안내해주세요",
  "이사 절차가 궁금해요",
  "주말 작업도 가능한가요?",
];

export default function AIChat() {
  const config = useSiteConfig();
  const welcome = useMemo<Msg>(
    () => ({
      role: "assistant",
      content: `안녕하세요! ${config.companyName} AI 상담사입니다.\n사무실·공장·창고 이전 관련 무엇이든 편하게 물어봐 주세요.`,
    }),
    [config.companyName],
  );
  const [open, setOpen] = useState(false);
  const [hasNew, setHasNew] = useState(true);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([welcome]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  useEffect(() => {
    if (open) {
      setHasNew(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || busy) return;

    const userMsg: Msg = { role: "user", content: trimmed };
    const next = [...messages, userMsg];
    setMessages([...next, { role: "assistant", content: "" }]);
    setInput("");
    setBusy(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });

      if (!res.ok) {
        let errMsg = "일시적인 오류가 발생했습니다.";
        try {
          const data = await res.json();
          if (data?.error) errMsg = data.error;
        } catch {}
        setMessages([
          ...next,
          {
            role: "assistant",
            content: `${errMsg}\n\n전화로 바로 상담받으시려면 ${config.phonePrimary}로 연락 주세요.`,
          },
        ]);
        return;
      }

      if (!res.body) throw new Error("응답 본문이 없습니다.");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages([...next, { role: "assistant", content: acc }]);
      }
    } catch (e) {
      const msg = e instanceof Error ? e.message : "알 수 없는 오류";
      setMessages([
        ...next,
        {
          role: "assistant",
          content: `죄송합니다. 연결에 문제가 발생했습니다 (${msg}).\n${config.phonePrimary}로 직접 전화 주시면 빠르게 안내드리겠습니다.`,
        },
      ]);
    } finally {
      setBusy(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    send(input);
  }

  const showQuick = messages.length === 1 && !busy;

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "AI 상담 닫기" : "AI 상담 열기"}
        className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[60] flex items-center gap-2 transition-all duration-300 ${
          open
            ? "w-12 h-12 rounded-full bg-brand-navy text-white"
            : "h-14 px-5 rounded-full bg-brand-orange text-white shadow-[0_14px_30px_-10px_rgba(245,166,35,0.7)] hover:bg-brand-orangeDark hover:-translate-y-1"
        }`}
      >
        {open ? (
          <CloseIcon />
        ) : (
          <>
            <span className="relative">
              <ChatIcon />
              {hasNew && (
                <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500 border-2 border-brand-orange animate-pulse-soft" />
              )}
            </span>
            <span className="text-sm font-bold">AI 상담</span>
          </>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div
          className="fixed bottom-20 right-3 sm:bottom-24 sm:right-6 z-[60] flex flex-col rounded-2xl bg-white border border-navy-100 overflow-hidden shadow-[0_30px_70px_-18px_rgba(15,29,58,0.45)] animate-fade-up"
          style={{
            width: "min(calc(100vw - 1.5rem), 380px)",
            height: "min(620px, calc(100vh - 7rem))",
          }}
        >
          {/* Header */}
          <div className="bg-brand-navy text-white px-5 py-4 flex items-center gap-3 relative overflow-hidden">
            <div
              className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-brand-orange/20 blur-2xl"
              aria-hidden
            />
            <div className="relative w-11 h-11 rounded-full bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center text-brand-orange">
              <BotIcon />
            </div>
            <div className="relative flex-1 min-w-0">
              <div className="text-[15px] font-bold flex items-center gap-2">
                엘리트24 AI 상담사
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-blink" />
              </div>
              <div className="text-[11px] text-white/65 mt-0.5">
                평일·주말 24시간 응대 · 즉시 답변
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="닫기"
              className="relative text-white/55 hover:text-white p-1 transition"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-4 py-4 bg-navy-50/50 space-y-3"
          >
            {messages.map((m, i) => {
              const isLast = i === messages.length - 1;
              const empty = m.role === "assistant" && m.content === "";
              return (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} animate-fade-up`}
                >
                  {m.role === "assistant" && (
                    <div className="w-7 h-7 shrink-0 rounded-full bg-brand-navy text-brand-orange flex items-center justify-center mr-2 mt-0.5">
                      <BotIconSmall />
                    </div>
                  )}
                  <div
                    className={`max-w-[78%] px-3.5 py-2.5 text-[13.5px] leading-[1.7] whitespace-pre-wrap ${
                      m.role === "user"
                        ? "bg-brand-orange text-white rounded-2xl rounded-br-sm"
                        : "bg-white text-navy-800 rounded-2xl rounded-bl-sm border border-navy-100"
                    }`}
                  >
                    {empty && busy && isLast ? <Dots /> : m.content}
                  </div>
                </div>
              );
            })}

            {showQuick && (
              <div className="pt-2 flex flex-wrap gap-1.5 pl-9">
                {QUICK_REPLIES.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="px-3 py-1.5 text-[12px] rounded-full border border-navy-200 bg-white text-navy-700 hover:border-brand-orange hover:text-brand-orange hover:-translate-y-0.5 transition"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-navy-100 bg-white p-3 flex gap-2"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={busy ? "답변 작성 중..." : "메시지를 입력하세요..."}
              disabled={busy}
              maxLength={1000}
              className="flex-1 px-4 py-2.5 rounded-full border border-navy-200 text-[14px] outline-none focus:border-brand-orange focus:shadow-[0_0_0_3px_rgba(245,166,35,0.15)] transition disabled:bg-navy-50 disabled:text-navy-400"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              className="w-10 h-10 shrink-0 rounded-full bg-brand-orange text-white flex items-center justify-center hover:bg-brand-orangeDark transition disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="보내기"
            >
              <SendIcon />
            </button>
          </form>

          <div className="text-[10px] text-center text-navy-400 py-1.5 bg-white border-t border-navy-100">
            AI 답변은 참고용입니다 · 정확한 견적은{" "}
            <a
              href={`tel:${config.phonePrimary.replace(/[^0-9+]/g, "")}`}
              className="text-brand-orange font-bold hover:underline"
            >
              {config.phonePrimary}
            </a>
          </div>
        </div>
      )}
    </>
  );
}

function ChatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 12c0 4.4-4 8-9 8a10 10 0 01-3.7-.7L3 21l1.5-4A8 8 0 013 12c0-4.4 4-8 9-8s9 3.6 9 8z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.18"
      />
      <circle cx="9" cy="12" r="1" fill="currentColor" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <circle cx="15" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function BotIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="8" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="9" cy="14" r="1.3" fill="currentColor" />
      <circle cx="15" cy="14" r="1.3" fill="currentColor" />
      <path d="M12 4v4M9 4h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M2 14h2M20 14h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function BotIconSmall() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="8" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="9" cy="14" r="1.3" fill="currentColor" />
      <circle cx="15" cy="14" r="1.3" fill="currentColor" />
      <path d="M12 4v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 12L21 4L13 21L11 13L3 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.25"
      />
    </svg>
  );
}
function Dots() {
  return (
    <span className="inline-flex gap-1.5 items-center py-1">
      <span className="w-1.5 h-1.5 rounded-full bg-navy-400 animate-blink" />
      <span
        className="w-1.5 h-1.5 rounded-full bg-navy-400 animate-blink"
        style={{ animationDelay: "0.2s" }}
      />
      <span
        className="w-1.5 h-1.5 rounded-full bg-navy-400 animate-blink"
        style={{ animationDelay: "0.4s" }}
      />
    </span>
  );
}
