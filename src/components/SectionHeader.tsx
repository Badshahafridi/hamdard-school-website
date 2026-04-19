import { motion } from "motion/react";

interface SectionHeaderProps {
  tag: string;
  title: string;
  subtitle: string;
  id?: string;
  light?: boolean;
}

export const SectionHeader = ({ tag, title, subtitle, light }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-right mb-16 border-t border-border pt-12"
    >
      <p className="font-serif italic text-lg text-muted mb-5 leading-none tracking-tight">
        {tag}
      </p>
      <h2 className="urdu text-3xl md:text-5xl lg:text-6xl leading-[1.6] mb-4 text-ink font-bold">
        {title}
      </h2>
      <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted font-bold" style={{ direction: 'ltr' }}>
        {subtitle}
      </p>
    </motion.div>
  );
};
