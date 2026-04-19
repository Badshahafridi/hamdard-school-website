import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";

export const Stats = () => {
  return null; // Integrated into other sections in Editorial style
};

export const About = () => {
  return (
    <section id="about" className="py-24 bg-bg overflow-hidden border-b border-editorial relative z-10">
      <div className="max-w-[1240px] mx-auto px-6">
        <SectionHeader
          tag="Defining our Mission"
          title="ہمارے بارے میں"
          subtitle="Systematic approach to dual-purpose education"
        />

        <div className="grid lg:grid-cols-2 bg-border border border-border">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-bg p-12 relative group border-r border-border"
          >
            <div className="text-accent font-black text-[10px] tracking-[0.4em] mb-10 uppercase">01 / Mission</div>
            <h3 className="urdu text-2xl lg:text-4xl text-ink mb-8 font-bold">ہمارا مشن</h3>
            <p className="urdu text-xl leading-[2.2] text-muted mb-12">
              ہمدرد ماڈل ہائی اسکول کلاخیل کا مقصد ایسے طالب علم تیار کرنا ہے جو دینی علم کے ساتھ جدید دنیا کی ضروریات سے بھی واقف ہوں۔
            </p>
            <ul className="space-y-6 urdu pt-8 border-t border-border/30" style={{ direction: 'rtl' }}>
              {[
                "ہر بچہ قرآن سمجھ کر پڑھے",
                "Grade 10 تک روانی سے انگریزی بولے",
                "AI اور ٹیکنالوجی سے واقف ہو"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-6 text-muted hover:text-ink transition-colors">
                   <span className="font-serif italic text-accent opacity-40 text-lg">0{i+1}</span>
                   <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-bg p-12 relative group"
          >
            <div className="text-accent font-black text-[10px] tracking-[0.4em] mb-10 uppercase">02 / Vision</div>
            <h3 className="urdu text-2xl lg:text-4xl text-ink mb-8 font-bold">ہمارا وژن</h3>
            <p className="urdu text-xl leading-[2.2] text-muted mb-12">
              پاکستان کے ہر گاؤں کے بچے کو عالمی معیار کی تعلیم ملنی چاہیے۔ کلاخیل کا بچہ بھی وہی سوچے اور سیکھے جو بین الاقوامی سطح پر رائج ہے۔
            </p>
            <div className="grid grid-cols-2 gap-px bg-border border border-border" style={{ direction: 'rtl' }}>
              {["گلوبل معیار", "دینی تربیت", "جدید ٹیکنالوجی", "کردار سازی"].map((item, i) => (
                <div key={i} className="bg-bg p-6 urdu text-lg text-ink flex items-center gap-4 group/item">
                   <div className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity" />
                   <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
