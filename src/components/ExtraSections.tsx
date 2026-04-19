import { motion } from "motion/react";
import { useState } from "react";
import { SectionHeader } from "./SectionHeader";

export const WhyUs = () => {
    const reasons = [
        { icon: "🚫", title: "نقل کا صفر برداشت", desc: "ہمارے ماحول میں نقل کی کوئی گنجائش نہیں ہے۔" },
        { icon: "👁️", title: "ہر بچے پر ذاتی توجہ", desc: "چھوٹی کلاسز اور تجربہ کار اساتذہ۔" },
        { icon: "🕌", title: "دین اور دنیا", desc: "قرآن و سنت کی روشنی میں جدید علوم۔" },
        { icon: "🚀", title: "مستقبل کی تیاری", desc: "AI، کوڈنگ، انگریزی کی عملی مہارت۔" },
        { icon: "💰", title: "منصفانہ فیس", desc: "اعلیٰ معیار کی سستی ترین تعلیم۔" },
        { icon: "🤝", title: "والدین کی شراکت", desc: "ہفتہ وار رپورٹ اور مکمل ٹریکنگ" },
    ];

    return (
        <section id="why" className="py-24 bg-bg border-b border-editorial">
            <div className="max-w-[1240px] mx-auto px-6">
                <SectionHeader tag="Infrastructure / Values" title="ہمیں کیوں چنیں؟" subtitle="Defining the Hamdard difference" />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 bg-border border border-border gap-px">
                    {reasons.map((r, i) => (
                        <motion.div key={i} className="bg-bg p-10 hover:bg-brand-pale transition-colors group">
                            <div className="text-4xl mb-6">{r.icon}</div>
                            <h4 className="urdu text-xl text-ink mb-4 font-bold">{r.title}</h4>
                            <p className="urdu text-sm leading-[2.2] text-muted">{r.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const Admissions = () => {
    const [submitted, setSubmitted] = useState(false);
    
    return (
        <section id="admissions" className="py-24 bg-bg border-b border-editorial">
            <div className="max-w-[1240px] mx-auto px-6">
                <SectionHeader tag="Access Protocol" title="داخلہ لیں — آج ہی" subtitle="Secure your place in the next edition" />
                <div className="grid lg:grid-cols-[1fr_500px] bg-border border border-border gap-px">
                    <div className="bg-bg p-8 lg:p-20 text-right urdu">
                        <h3 className="text-2xl lg:text-3xl text-ink mb-10 font-bold">داخلہ کی تفصیلات</h3>
                        <div className="space-y-8">
                            {[
                                { n: "01", t: "درخواست فارم", d: "آن لائن یا اسکول آفس سے حاصل کریں" },
                                { n: "02", t: "انٹرویو / ٹیسٹ", d: "بچے کی اہلیت کا معائنہ" },
                                { n: "03", t: "کامیاب داخلہ", d: "آپ کے بچے کا سفر شروع!" }
                            ].map((step, i) => (
                                <div key={i} className="flex gap-8 group justify-end">
                                    <div className="text-right">
                                        <h4 className="text-ink font-bold mb-2">{step.t}</h4>
                                        <p className="text-sm text-muted">{step.d}</p>
                                    </div>
                                    <div className="font-serif italic text-accent opacity-30 text-3xl font-black">{step.n}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-bg p-8 lg:p-20 border-l border-border">
                        {!submitted ? (
                            <div className="urdu" style={{ direction: 'rtl' }}>
                                <div className="space-y-6">
                                    <div className="space-y-1.5"><label className="text-[10px] uppercase tracking-[0.2em] font-black text-muted">CHILD NAME</label><input className="w-full bg-brand-medium border border-border p-4 text-ink focus:border-accent outline-none" /></div>
                                    <div className="space-y-1.5"><label className="text-[10px] uppercase tracking-[0.2em] font-black text-muted">CLASS SELECTION</label>
                                        <select className="w-full bg-brand-medium border border-border p-4 text-ink focus:border-accent outline-none appearance-none font-sans">
                                            <option>Nursery</option><option>Grade 1</option><option>Grade 10</option>
                                        </select>
                                    </div>
                                    <div className="space-y-1.5"><label className="text-[10px] uppercase tracking-[0.2em] font-black text-muted">CONTACT NUMBER</label><input className="w-full bg-brand-medium border border-border p-4 text-ink focus:border-accent outline-none font-sans" /></div>
                                    <button onClick={() => setSubmitted(true)} className="w-full bg-accent text-bg font-black uppercase text-[11px] tracking-[0.3em] py-6 mt-4">
                                       Initiate Enrollment
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-10 urdu">
                                <div className="text-5xl mb-6">✓</div>
                                <h3 className="text-xl text-ink font-bold mb-4">فارم وصول ہو گیا</h3>
                                <p className="text-muted text-sm">ہم جلد رابطہ کریں گے۔</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Footer = () => {
    return (
        <footer className="bg-bg py-20 border-t border-border">
            <div className="max-w-[1240px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-border flex items-center justify-center text-accent font-black">H</div>
                  <div className="text-muted tracking-[0.1em] text-[10px] font-bold uppercase">
                    Hamdard School / Village Kalakhel
                  </div>
                </div>
                <div className="font-serif italic text-muted text-sm">
                  © 2026 Hamiltonized Editorial Design / All Rights Reserved
                </div>
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em]">
                   <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                   Admissions Active
                </div>
            </div>
        </footer>
    );
};

