import type { Metadata } from "next";
import ProgramsHero from "@/components/programs/ProgramsHero";
import ProgramsSection from "@/components/programs/ProgramsSection";
import { getProgramsData } from "@/lib/programs-service";
import "@/components/programs/programs.css"; 
import "@/components/programs/programs-extra.css";

export const metadata: Metadata = {
  title: "Programs",
  description: "Explore industry-relevant programmes built around your aspirations",
};

export default async function ProgramsPage() {
  const { programs, schools, levels } = await getProgramsData();

  return (
    <main>
      <ProgramsHero
        title="Programs"
        subtitle="Explore Industry-Relevant Programmes Built Around Your Aspirations"
      />
      <ProgramsSection programs={programs} schools={schools} levels={levels} />
    </main>
  );
}
