import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProgramInfo } from "@/components/ProgramInfo";
import { LearningJourney } from "@/components/LearningJourney";
import { Curriculum } from "@/components/Curriculum";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Mentors } from "@/components/Mentors";
import { WhyJoin } from "@/components/WhyJoin";
import { Certification } from "@/components/Certification";
import { Highlights } from "@/components/Highlights";
import { Footer } from "@/components/Footer";
import { RegisterCard } from "@/components/RegisterCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProgramInfo />
        <LearningJourney />
        <Curriculum />
        <Projects />
        <Skills />
        <Mentors />
        <WhyJoin />
        <Certification />
        <Highlights />
      </main>
      <Footer />
      <RegisterCard />
    </>
  );
}
