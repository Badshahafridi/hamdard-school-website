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

import { useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-bg selection:bg-accent selection:text-bg scroll-smooth">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 lg:left-20 right-0 h-1 bg-accent z-[1000] origin-left"
        style={{ scaleX }}
      />

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

      {/* Mobile-Friendly Floating Action Cluster */}
      <div className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 flex flex-col gap-4 z-[1000]">
        {/* Back to Top */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileTap={{ scale: 0.9 }}
          className="hidden sm:flex w-12 h-12 bg-bg border border-border text-ink items-center justify-center hover:border-accent group hover:text-accent transition-all"
          aria-label="Scroll to top"
        >
          <div className="rotate-[-90deg] flex items-center gap-1">
            <span className="text-[10px] font-black tracking-widest uppercase">TOP</span>
          </div>
        </motion.button>

        {/* Action Trigger */}
        <motion.a
          href="https://wa.me/923331373919"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 sm:w-16 sm:h-16 bg-accent text-bg rounded-none sm:rounded-full border border-bg flex items-center justify-center shadow-[0_0_40px_rgba(224,255,0,0.3)]"
          aria-label="Contact via WhatsApp"
        >
          <MessageCircle size={28} className="sm:w-8 sm:h-8" />
        </motion.a>
      </div>
    </div>
  );
}


