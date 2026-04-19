import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";

export const HomeSchooling = () => {
    const features = [
        { i: "📋", t: "ہفتہ وار سبق گائیڈ", d: "ہر ہفتے والدین کو سادہ اردو میں لکھا گائیڈ ملے گا — بچے سے کیا سوالات پوچھیں۔" },
        { i: "💬", t: "واٹس ایپ گروپ سپورٹ", d: "ہر کلاس کا اپنا واٹس ایپ گروپ — جہاں استاد روزانہ ہوم ورک شیئر کرتے ہیں۔" },
        { i: "📊", t: "ماہانہ Progress رپورٹ", d: "ہر مہینے والدین کو بچے کی مکمل رپورٹ — ہر موضوع میں کہاں ہے آپ کا بچہ۔" },
    ];

    return (
        <section id="homeschool" className="py-24 bg-bg overflow-hidden border-b border-editorial">
            <div className="max-w-[1240px] mx-auto px-6">
                <SectionHeader tag="Distributed Nodes" title="ہوم اسکولنگ سپورٹ پروگرام" subtitle="Extension of the physical classroom" />
                
                <div className="bg-brand-pale border border-border p-12 lg:p-20 mb-px relative overflow-hidden text-ink">
                    <div className="relative z-10 text-right urdu">
                        <h3 className="text-3xl md:text-5xl text-accent mb-10 font-black leading-tight">🏠 گھر اور اسکول کا اتحاد</h3>
                        <p className="text-xl md:text-2xl text-muted leading-[2.2] max-w-3xl ml-auto border-r-2 border-accent pr-8">
                            ہم والدین کو تعلیم کا حصہ بناتے ہیں — سادہ گائیڈز، واٹس ایپ گروپ، اور والدین کی تربیت کے ذریعے ایک مربوط نیٹ ورک۔
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 bg-border border border-border gap-px">
                    {features.map((f, i) => (
                        <div key={i} className="bg-bg p-12 text-right urdu group hover:bg-brand-medium transition-colors">
                            <div className="text-5xl mb-10 opacity-40 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0">{f.i}</div>
                            <h4 className="text-2xl text-ink mb-6 font-bold">{f.t}</h4>
                            <p className="urdu text-sm leading-[2.2] text-muted">{f.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const LMS = () => {
    return (
        <section id="lms" className="py-24 bg-bg overflow-hidden border-b border-editorial">
            <div className="max-w-[1240px] mx-auto px-6">
                <SectionHeader tag="Digital Protocol" title="ہمدرد آن لائن پورٹل" subtitle="Networked learning management system" />
                
                <div className="grid lg:grid-cols-2 gap-px bg-border border border-border">
                    <div className="bg-bg p-8 lg:p-16 text-right urdu flex flex-col justify-center">
                        <div className="inline-block bg-accent text-bg px-4 py-1.5 text-[10px] font-black tracking-widest mb-10 ml-auto uppercase font-sans">PROTOCOL: COMING SOON - LATE 2025</div>
                        <h3 className="text-3xl text-ink font-bold mb-8">ڈیجیٹل اسکول — گھر بیٹھے تعلیم</h3>
                        <p className="text-lg text-muted leading-[2.5] mb-12">ایک آن لائن پلیٹ فارم جہاں طالب علم، والدین اور اساتذہ سب ایک جگہ جُڑے ہوں گے۔ ہوم ورک، ٹیسٹ، رزلٹ — سب کچھ آپ کے موبائل پر۔</p>
                        <a href="https://wa.me/923331373919" className="text-center bg-transparent border border-accent text-accent font-black uppercase text-[11px] tracking-[0.3em] py-5 hover:bg-accent hover:text-bg transition-all">
                           Subscribe To Alpha Access
                        </a>
                    </div>

                    <div className="bg-brand-medium p-12 relative overflow-hidden flex items-center justify-center">
                        <div className="w-full space-y-4 urdu" style={{ direction: 'rtl' }}>
                            {[
                                { t: "قرآن سبق #04", s: "DATA_READY", c: "text-accent" },
                                { t: "انگریزی لیکچر", s: "LIVE_NOW", c: "text-red-500 font-bold" },
                                { t: "ماہانہ رزلٹ", s: "PENDING", c: "text-muted" },
                            ].map((row, i) => (
                                <div key={i} className="flex items-center gap-6 border-b border-border/30 pb-4 group">
                                    <span className="text-accent font-mono text-[10px] opacity-40">0x0{i}</span>
                                    <span className="text-ink text-lg grow font-bold">{row.t}</span>
                                    <span className={`text-[9px] tracking-widest uppercase font-mono ${row.c}`}>{row.s}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
