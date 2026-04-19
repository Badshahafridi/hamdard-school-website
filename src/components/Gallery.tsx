import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { Search } from "lucide-react";

export const Gallery = () => {
    const items = [
        { icon: "🏫", label: "اسکول بلڈنگ", style: "bg-linear-to-br from-brand-vibrant/20 to-brand-pale", span: true },
        { icon: "📚", label: "کلاس روم", style: "bg-sky-100" },
        { icon: "💻", label: "کمپیوٹر لیب", style: "bg-gold-pale" },
        { icon: "📖", label: "قرآن کلاس", style: "bg-red-50" },
        { icon: "🔧", label: "ہنر کلاس", style: "bg-purple-50" },
        { icon: "🏆", label: "تقریب", style: "bg-emerald-50" },
        { icon: "⚽", label: "میدان", style: "bg-yellow-50" },
    ];

    return (
        <section id="gallery" className="py-24 bg-bg overflow-hidden border-b border-editorial text-right pr-0">
            <div className="max-w-[1240px] mx-auto px-6">
                <SectionHeader tag="Visual Logs" title="ہماری جھلکیاں" subtitle="Atmospheric archives" />
                <div className="grid grid-cols-2 md:grid-cols-4 bg-border border border-border gap-px">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            className={`relative bg-bg overflow-hidden cursor-pointer group ${item.span ? "col-span-2 row-span-2 aspect-auto min-h-[340px]" : "aspect-square"}`}
                        >
                            <div className="w-full h-full flex flex-col items-center justify-center gap-6 transition-all group-hover:bg-brand-pale">
                                <span className="text-6xl grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all">{item.icon}</span>
                                <span className="urdu text-sm text-muted font-black tracking-widest uppercase group-hover:text-ink">{item.label}</span>
                            </div>
                            <div className="absolute top-4 right-6 text-[10px] font-mono text-muted/30 group-hover:text-accent transition-colors">
                                IMG_0{i+1}.DAT
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
