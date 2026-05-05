import Hero from "@/components/Hero";
import HomeIntro from "@/components/HomeIntro";
import HomeServices from "@/components/HomeServices";
import HomeStats from "@/components/HomeStats";
import HomeQuote from "@/components/HomeQuote";
import HomeProcess from "@/components/HomeProcess";
import HomeCTA from "@/components/HomeCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeIntro />
      <HomeServices />
      <HomeStats />
      <HomeQuote />
      <HomeProcess />
      <HomeCTA />
    </>
  );
}
