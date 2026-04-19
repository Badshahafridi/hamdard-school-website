import { useState, useEffect } from "react";
import { Menu, X, Phone, Clock, MapPin, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Rail = () => {
  return (
    <div className="hidden lg:flex fixed left-0 top-0 bottom-0 w-20 border-r border-border flex-col items-center py-10 justify-between z-[1000] bg-bg">
      <div className="text-accent font-black text-3xl tracking-tighter">H</div>
      <div className="writing-vertical -rotate-180 uppercase tracking-[0.4em] text-[10px] font-bold text-muted flex items-center gap-8">
        <span>ESTABLISHED 2026</span>
        <div className="w-px h-12 bg-border" />
        <span>EDITION 01.A</span>
      </div>
      <div className="text-muted text-[10px] font-bold">2026</div>
    </div>
  );
};

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 lg:left-20 right-0 h-20 border-b border-border bg-bg/80 backdrop-blur-md flex items-center justify-between px-8 z-[900]">
      <div className="flex gap-10">
        {["Home", "About", "Academics", "Digital"].map((item, i) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`uppercase text-[11px] tracking-[0.15em] font-extrabold hover:text-accent transition-colors ${
              i === 0 ? "text-ink" : "text-muted"
            }`}
          >
            {item}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-8">
        <a href="#admissions" className="text-accent uppercase text-[11px] tracking-[0.15em] font-black border-b-2 border-accent pb-1">
          Admissions
        </a>
        <div className="text-ink uppercase text-[11px] tracking-[0.15em] font-extrabold cursor-pointer">
          Menu
        </div>
      </div>
    </header>
  );
};

