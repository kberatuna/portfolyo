import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="mx-auto max-w-4xl px-6">
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
