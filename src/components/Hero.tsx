import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

export const Hero = () => {
  const stats = [
    { num: "100%", label: "SUCCESS RATE" },
    { num: "2026", label: "CURRENT EDITION" },
    { num: "04ms", label: "RESPONSE LATENCY" },
  ];

  return (
    <section id="home" className="relative min-h-[calc(100vh-80px)] bg-bg grid lg:grid-cols-[1fr_380px] border-b border-border">
      {/* Main Content */}
      <div className="p-8 lg:p-20 flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-serif italic text-xl text-muted mb-10"
        >
          Defining the Educational Frontier
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-huge font-black uppercase text-ink mb-12"
        >
          Crafting<br />
          Modern<br />
          <span className="text-accent italic font-serif lowercase tracking-tighter">Scholars</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="urdu text-xl text-muted leading-[2.2] max-w-xl"
        >
          ہمدرد ہائی اسکول جدید اسلامی تعلیم، قرآن، انگریزی، کمپیوٹر اور اسکولنگ کا سنگم ہے۔ جہاں ہم ریاضی کی سختی کو بصری شاعری کے ساتھ ملاتے ہیں۔
        </motion.p>
      </div>

      {/* Sidebar Data Panel */}
      <aside className="hidden lg:flex flex-col border-l border-border p-12 gap-16 justify-center bg-brand-pale/20">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="text-[10px] uppercase tracking-[0.2em] font-black text-muted">{s.label}</div>
            <div className="text-5xl font-black text-ink tracking-tighter">{s.num}</div>
          </div>
        ))}

        <div className="relative aspect-video bg-brand-medium border border-border overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
             <div className="w-full h-px bg-accent rotate-[25deg]" />
             <div className="w-full h-px bg-accent rotate-[-15deg] mt-10" />
          </div>
          <div className="absolute bottom-4 left-4 text-accent text-[10px] font-black uppercase tracking-widest">
            Structural Logic
          </div>
        </div>
      </aside>
    </section>
  );
};
