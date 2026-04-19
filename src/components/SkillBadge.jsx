import { motion } from "framer-motion";

/**
 * SkillBadge
 * Props:
 *   skill: { name, icon }
 *   delay: number (animation stagger delay)
 */
export default function SkillBadge({ skill, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3, scale: 1.05 }}
      className="group flex items-center gap-2.5 px-4 py-2.5 bg-zinc-900 border border-zinc-800 hover:border-emerald-500/40 hover:bg-zinc-900/80 rounded-xl cursor-default transition-all duration-200"
    >
      <span className="text-lg leading-none">{skill.icon}</span>
      <span className="text-zinc-300 group-hover:text-zinc-100 text-sm font-medium transition-colors duration-200">
        {skill.name}
      </span>
    </motion.div>
  );
}
