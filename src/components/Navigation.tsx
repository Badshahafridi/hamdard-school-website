import { useState, useEffect } from "react";
import { Menu, X, Phone, Clock, MapPin, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Rail = () => {
  return (
    <motion.nav 
      initial={{ x: -80 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="hidden lg:flex fixed left-0 top-0 bottom-0 w-20 border-r border-border flex-col items-center py-10 justify-between z-[1000] bg-bg"
      aria-label="Side Navigation"
    >
      <div className="flex flex-col items-center gap-4">
        <img 
          src="/logo.png" 
          alt="Logo"
          className="w-10 h-10 object-contain grayscale invert opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="text-accent font-black text-xl tracking-tighter cursor-default">HMHS</div>
      </div>
      <div className="writing-vertical -rotate-180 uppercase tracking-[0.4em] text-[10px] font-bold text-muted flex items-center gap-8 pointer-events-none select-none">
        <span>ESTABLISHED 2026</span>
        <div className="w-px h-12 bg-border" />
        <span>EDITION 01.A</span>
      </div>
      <div className="text-muted text-[10px] font-bold select-none">2026</div>
    </motion.nav>
  );
};

export const Header = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 lg:left-20 right-0 z-[900]">
        <AnimatePresence>
          {showBanner && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-accent overflow-hidden"
            >
              <div className="max-w-[1240px] mx-auto px-8 py-2 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 overflow-hidden">
                  <span className="flex-shrink-0 bg-bg text-accent text-[8px] font-black px-1.5 py-0.5 uppercase tracking-tighter rounded-sm">Update</span>
                  <p className="text-bg text-[10px] font-bold uppercase tracking-[0.1em] truncate">
                    Admissions are now open for the 2026-27 session. Limited seats available for primary classes.
                  </p>
                </div>
                <button 
                  onClick={() => setShowBanner(false)}
                  className="text-bg hover:opacity-70 transition-opacity p-1"
                  aria-label="Dismiss banner"
                >
                  <X size={14} strokeWidth={3} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.header 
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
          className="h-20 border-b border-border bg-bg/80 backdrop-blur-md flex items-center justify-between px-6 lg:px-8"
          aria-label="Main Header"
        >
          <div className="flex items-center gap-10">
            <a href="#home" className="flex items-center gap-4 group">
              <div className="relative">
                <div className="absolute -inset-1.5 border border-accent/20 rounded-full scale-110 group-hover:scale-125 transition-transform duration-700 ease-out" />
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-border flex items-center justify-center overflow-hidden bg-brand-pale">
                  <img 
                    src="/logo.png" 
                    alt="Hamdard School Logo"
                    className="w-full h-full object-contain grayscale invert opacity-70 transition-all duration-700 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="flex items-center gap-2 lg:gap-3 mb-1">
                  <div className="text-[9px] lg:text-[10px] font-black tracking-[0.2em] lg:tracking-[0.3em] text-ink uppercase leading-none">Hamdard Model</div>
                  <div className="w-1 h-1 bg-accent rounded-full" />
                  <div className="text-[9px] lg:text-[10px] font-black tracking-[0.2em] lg:tracking-[0.3em] text-accent uppercase leading-none">Peshawar</div>
                </div>
                <div className="text-[7px] lg:text-[8px] font-bold tracking-[0.1em] text-muted uppercase leading-none">Institute of Excellence / Est. 2026</div>
              </div>
            </a>
            <nav className="hidden lg:flex gap-8 border-l border-border pl-10 h-10 items-center">
              {["Home", "About", "Academics", "Digital"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="uppercase text-[11px] tracking-[0.15em] font-extrabold text-muted hover:text-accent transition-colors focus:text-accent outline-none"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4 lg:gap-8">
            <a 
              href="#admissions" 
              className="hidden sm:block text-accent uppercase text-[11px] tracking-[0.15em] font-black border-b-2 border-accent pb-1 hover:opacity-80 transition-opacity"
            >
              Admissions
            </a>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="group flex items-center gap-3 p-2 bg-brand-pale border border-border hover:border-accent transition-all active:scale-95"
              aria-label="Toggle Menu"
            >
              <span className="hidden sm:inline uppercase text-[10px] tracking-widest font-black text-muted group-hover:text-accent">Menu</span>
              <div className="flex flex-col gap-1 w-5">
                <motion.div 
                  animate={isMenuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                  className="h-0.5 w-full bg-accent" 
                />
                <motion.div 
                  animate={isMenuOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                  className="h-0.5 w-3/4 bg-accent ml-auto" 
                />
                <motion.div 
                  animate={isMenuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                  className="h-0.5 w-full bg-accent" 
                />
              </div>
            </button>
          </div>
        </motion.header>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-bg/95 backdrop-blur-xl z-[2000] lg:pl-20"
          >
            <div className="h-full flex flex-col p-10 lg:p-20">
              <div className="flex justify-between items-center mb-20">
                <div className="text-muted text-[10px] font-black tracking-[0.5em] uppercase">Navigation / Index</div>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="w-12 h-12 border border-border hover:border-accent flex items-center justify-center transition-all active:scale-90"
                >
                  <X size={20} className="text-accent" />
                </button>
              </div>

              <nav className="flex flex-col gap-12 lg:gap-16">
                {["Home", "About", "Academics", "Digital", "Admissions"].map((item, i) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    initial={{ x: -40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-baseline gap-6"
                  >
                    <span className="text-accent opacity-20 group-hover:opacity-100 transition-opacity font-serif italic text-2xl">0{i + 1}</span>
                    <span className="text-huge font-black uppercase tracking-tighter text-muted transition-all group-hover:text-accent group-hover:pl-4">
                      {item}
                    </span>
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-border pt-12">
                <div>
                  <div className="text-accent text-[9px] font-bold uppercase tracking-widest mb-4">Location</div>
                  <address className="text-muted not-italic urdu text-sm">کلاخیل، باڑہ روڈ، پشاور</address>
                </div>
                <div>
                  <div className="text-accent text-[9px] font-bold uppercase tracking-widest mb-4">Contact</div>
                  <div className="text-muted text-sm font-black">+92 333 1373919</div>
                </div>
                <div>
                  <div className="text-accent text-[9px] font-bold uppercase tracking-widest mb-4">Established</div>
                  <div className="text-muted text-sm font-black tracking-widest leading-none">SINCE 2026</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};



