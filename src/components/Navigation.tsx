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
  return (
    <motion.header 
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
      className="fixed top-0 left-0 lg:left-20 right-0 h-20 border-b border-border bg-bg/80 backdrop-blur-md flex items-center justify-between px-8 z-[900]"
      aria-label="Main Header"
    >
      <div className="flex items-center gap-10">
        <a href="#home" className="flex items-center gap-4 group">
          <img 
            src="/logo.png" 
            alt="Hamdard Model High School Logo"
            className="h-10 w-10 object-contain grayscale invert transition-all duration-500 group-hover:grayscale-0 group-hover:invert-0"
            referrerPolicy="no-referrer"
          />
          <div className="hidden xl:block">
            <div className="text-[10px] font-black tracking-[0.2em] text-ink uppercase leading-none mb-1">Hamdard Model</div>
            <div className="text-[8px] font-bold tracking-[0.1em] text-muted uppercase leading-none">High School Peshawar</div>
          </div>
        </a>
        <nav className="flex gap-8 border-l border-border pl-10 h-10 items-center">
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
      <div className="flex items-center gap-8">
        <a 
          href="#admissions" 
          className="text-accent uppercase text-[11px] tracking-[0.15em] font-black border-b-2 border-accent pb-1 hover:opacity-80 transition-opacity"
        >
          Admissions
        </a>
        <button 
          className="text-ink uppercase text-[11px] tracking-[0.15em] font-extrabold cursor-pointer hover:text-accent transition-colors"
          aria-label="Toggle Menu"
        >
          Menu
        </button>
      </div>
    </motion.header>
  );
};



