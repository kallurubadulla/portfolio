import { motion } from "framer-motion";

const TYPE_CONFIG = {
  education: { color: "#10b981", label: "Education", icon: "🎓" },
  experience: { color: "#6366f1", label: "Experience", icon: "💼" },
  cert: { color: "#f59e0b", label: "Certification", icon: "🏆" },
};

/**
 * TimelineItem
 * Props:
 *   item: { year, title, org, desc, type }
 *   index: number
 */
export default function TimelineItem({ item, index }) {
  const config = TYPE_CONFIG[item.type] || TYPE_CONFIG.education;
  const isRight = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isRight ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex items-start gap-6 md:gap-0 ${
        isRight ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Content card */}
      <div
        className={`
          ml-12 md:ml-0 flex-1
          ${isRight ? "md:pr-10 md:text-right md:mr-auto md:ml-0" : "md:pl-10 md:text-left md:ml-auto md:mr-0"}
          md:w-[calc(50%-2rem)]
        `}
      >
        <div className="bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-5 transition-colors duration-200 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2 md:justify-end flex-wrap" style={{ justifyContent: isRight ? undefined : "flex-start" }}>
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-full"
              style={{ background: `${config.color}15`, color: config.color, border: `1px solid ${config.color}30` }}
            >
              {config.icon} {config.label}
            </span>
            <span className="text-zinc-500 text-xs font-mono">{item.year}</span>
          </div>
          <h3 className="text-zinc-100 font-bold text-base mb-1">{item.title}</h3>
          <p className="font-semibold text-sm mb-2" style={{ color: config.color }}>
            {item.org}
          </p>
          <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
        </div>
      </div>

      {/* Center dot — desktop */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-5 z-10">
        <div
          className="w-4 h-4 rounded-full border-2 border-zinc-950"
          style={{ background: config.color, boxShadow: `0 0 12px ${config.color}60` }}
        />
      </div>

      {/* Left dot — mobile */}
      <div className="absolute left-0 top-5 md:hidden z-10">
        <div
          className="w-4 h-4 rounded-full border-2 border-zinc-950"
          style={{ background: config.color, boxShadow: `0 0 12px ${config.color}60` }}
        />
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}
