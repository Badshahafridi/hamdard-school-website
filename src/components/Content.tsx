import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";

export const Model = () => {
  const models = [
    { title: "قرآن ترجمہ اور تفسیر", sub: "SCALABLE FAITH", icon: "📖", desc: "ہر کلاس میں قرآن مجید کا آسان ترجمہ اور تفسیر سکھائی جائے گی۔" },
    { title: "قوی انگریزی بنیاد", sub: "GLOBAL SYSTEMS", icon: "🗣️", desc: "Grade 1 سے مرحلہ وار انگریزی — گرامر، بول چال، لکھائی۔" },
    { title: "کمپیوٹر، کوڈنگ اور AI", sub: "DIGITAL FRONTIER", icon: "💻", desc: "مڈل سے کمپیوٹر، پھر کوڈنگ اور AI کا تعارف۔" },
    { title: "عملی پیشہ ورانہ ہنر", sub: "PHYSICAL LOGIC", icon: "🔧", desc: "الیکٹریکل ورک، بڑھئی گیری، سلائی — عملی مہارتیں" },
    { title: "کردار سازی اور ڈسپلن", sub: "CULTURAL INTEGRITY", icon: "🌟", desc: "سچائی، امانت، محنت، احترام — اعلیٰ اخلاق" },
    { title: "ہوم اسکولنگ سپورٹ", sub: "DISTRIBUTED LEARNING", icon: "🏠", desc: "والدین کو سادہ گائیڈز اور مکمل سپورٹ۔" },
  ];

  return (
    <section id="model" className="py-24 bg-bg overflow-hidden border-b border-editorial">
      <div className="max-w-[1240px] mx-auto px-6">
        <SectionHeader
          tag="Core Architecture"
          title="ہمارا تعلیمی ماڈل"
          subtitle="Precision-built educational framework"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 bg-border border border-border gap-px">
          {models.map((m, i) => (
            <motion.div
              key={i}
              className="bg-bg p-10 relative group hover:bg-brand-pale transition-colors h-full"
            >
               <div className="font-serif italic text-accent opacity-20 text-[60px] absolute top-4 right-8 select-none">
                  {String(i + 1).padStart(2, '0')}
               </div>
               <div className="w-12 h-12 flex items-center justify-center text-2xl mb-8 border border-border">
                  {m.icon}
               </div>
               <div className="text-accent font-black text-[10px] tracking-[0.2em] mb-3 uppercase font-sans">
                  {m.sub}
               </div>
               <h3 className="urdu text-2xl text-ink mb-6 font-bold">{m.title}</h3>
               <p className="urdu text-sm leading-[2.2] text-muted">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Fees = () => {
  const rows = [
    { ur: "میڈ نرسری", fee: "900" },
    { ur: "نرسری", fee: "1,000" },
    { ur: "جماعت اول", fee: "1,200" },
    { ur: "جماعت پنجم", fee: "1,600" },
    { ur: "جماعت دہم", fee: "2,100" },
  ];

  return (
    <section id="fees" className="py-24 bg-bg overflow-hidden border-b border-editorial">
      <div className="max-w-[1240px] mx-auto px-6">
        <SectionHeader
          tag="Financial Transparency"
          title="کلاسز اور فیس کا ڈھانچہ"
          subtitle="Fixed-cost educational system"
        />

        <div className="grid lg:grid-cols-[1.5fr_1fr] bg-border border border-border gap-px">
          <div className="bg-bg p-8 lg:p-12">
            <div className="space-y-0">
               {rows.map((r, i) => (
                 <div key={i} className="flex items-center justify-between py-6 border-b border-border hover:px-4 transition-all group">
                    <span className="urdu text-xl text-muted group-hover:text-ink">{r.ur}</span>
                    <div className="flex items-center gap-4">
                       <span className="font-black text-3xl text-ink tracking-tighter">{r.fee}</span>
                       <span className="text-muted uppercase text-[10px] font-bold tracking-[0.2em]">PKR / MO</span>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          <div className="bg-bg p-8 lg:p-12 flex flex-col justify-between border-l border-border">
            <div>
               <div className="text-accent font-black text-[11px] tracking-[0.4em] mb-12 uppercase">SYSTEM LOGS / PRICING</div>
               <p className="urdu text-lg leading-[2.2] text-muted mb-12">
                 ہمدرد اسکول میں فیس مکمل شفاف ہے۔ کسی بھی قسم کے چھپے ہوئے اخراجات نہیں ہیں۔
               </p>
               <ul className="space-y-4 urdu mb-12">
                 {["داخلہ فارم مفت", "کوئی اضافی چارجز نہیں", "ڈیجیٹل ادائیگی دستیاب"].map((item, i) => (
                    <li key={i} className="text-ink text-sm flex items-center gap-4">
                       <span className="text-accent font-mono">[{i}]</span>
                       {item}
                    </li>
                 ))}
               </ul>
            </div>
            <a href="https://wa.me/923331373919" className="text-center bg-accent text-bg font-black uppercase text-[11px] tracking-[0.3em] py-5">
               Contact For Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
