import { Rail, Header } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Stats, About } from "./components/About";
import { Model, Fees } from "./components/Content";
import { WhyUs, Admissions, Footer } from "./components/ExtraSections";
import { Gallery } from "./components/Gallery";
import { HomeSchooling, LMS } from "./components/Digital";
import { AcademicCalendar } from "./components/Calendar";
import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg selection:bg-accent selection:text-bg">
      {/* Editorial Structural Rails */}
      <Rail />
      <Header />

      {/* Main Content Area - Grid Offset */}
      <main className="lg:pl-20 pt-20">
        <Hero />
        <Stats />
        <About />
        <Model />
        <AcademicCalendar />
        <Fees />
        <WhyUs />
        <Gallery />
        <HomeSchooling />
        <LMS />
        <Admissions />
        <Footer />
      </main>

      {/* Action Trigger */}
      <motion.a
        href="https://wa.me/923331373919"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-10 right-10 w-16 h-16 bg-accent text-bg rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(224,255,0,0.3)] z-[1000]"
      >
        <MessageCircle size={32} fill="currentColor" />
      </motion.a>
    </div>
  );
}


