import { AboutSection } from "@/components/AboutSection";
import { Navbar } from "@/components/Navbar";

export function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className="h-screen flex flex-col justify-center items-center py-16">
        <AboutSection />
      </div>
    </div>
  );
}
