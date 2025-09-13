import AboutSummary from "@/components/home/AboutSummary";
import ConcernsGrid from "@/components/home/ConcernsGrid";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSummary />
      <ConcernsGrid />
    </>
  );
}