import Hero from "@/components/Hero";
import HomeIntro from "@/components/HomeIntro";
import HomeServices from "@/components/HomeServices";
import HomeProcess from "@/components/HomeProcess";
import HomeCTA from "@/components/HomeCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeIntro />
      <HomeServices />
      <HomeProcess />
      <HomeCTA />
    </>
  );
}
