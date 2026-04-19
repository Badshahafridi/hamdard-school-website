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
      <div className="p-8 lg:p-20 flex flex-col justify-center text-right">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-end gap-6 mb-12"
        >
          <div className="urdu text-right">
            <p className="text-secondary uppercase text-[10px] font-black tracking-widest mb-1 font-sans">Enrollment Status</p>
            <p className="text-accent text-xl font-bold">داخلے جاری ہیں — تعلیمی سیشن 2026–27</p>
          </div>
          <div className="w-20 h-20 bg-brand-medium border border-border flex items-center justify-center p-4 rounded-2xl shadow-[0_0_30px_rgba(224,255,0,0.1)]">
            <img 
              src="/logo.png" 
              alt="Logo"
              className="w-full h-full object-contain grayscale invert brightness-125"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="urdu text-huge font-black text-ink mb-12"
        >
          تعلیم جو <span className="text-accent italic font-serif tracking-tighter">دنیا اور آخرت</span><br />
          دونوں سنوار دے
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="urdu text-xl text-muted leading-[2.5] max-w-2xl ml-auto border-r-2 border-accent/30 pr-8"
        >
          وہ اسکول جہاں آپ کا بچہ قرآن سمجھے، انگریزی بولے، کمپیوٹر اور AI سیکھے، ہاتھ کا ہنر پائے — اور سب سے بڑھ کر سچا مسلمان اور ذمہ دار انسان بنے۔
        </motion.p>

        <div className="flex gap-4 mt-12 justify-end">
          <a href="#admissions" className="bg-accent text-bg px-8 py-4 font-black uppercase text-[11px] tracking-widest hover:scale-105 transition-transform">
            Secure Admission
          </a>
        </div>
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
