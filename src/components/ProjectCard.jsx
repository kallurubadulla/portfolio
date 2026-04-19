import { motion } from "framer-motion";

/**
 * ProjectCard
 * Props:
 *   project: {
 *     title, period, description, highlights[], tags[], link, accent, featured
 *   }
 */
export default function ProjectCard({ project }) {
  const { title, period, description, highlights, tags, link, accent, featured } = project;

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={`
        group relative flex flex-col h-full
        bg-zinc-900/60 backdrop-blur-sm
        border rounded-2xl overflow-hidden
        cursor-pointer no-underline
        transition-colors duration-300
        ${featured
          ? "border-emerald-500/30 hover:border-emerald-500/60 md:col-span-1"
          : "border-zinc-800 hover:border-zinc-700"
        }
      `}
      style={{
        boxShadow: `0 0 0 0 ${accent}00`,
      }}
    >
      {/* Accent top bar */}
      <div
        className="h-1 w-full transition-all duration-300 group-hover:h-1.5"
        style={{ background: `linear-gradient(90deg, ${accent}, ${accent}88)` }}
      />

      {/* Featured badge */}
      {featured && (
        <div
          className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full"
          style={{ background: `${accent}20`, color: accent, border: `1px solid ${accent}40` }}
        >
          ⭐ Featured
        </div>
      )}

      <div className="flex flex-col flex-1 p-6">
        {/* Header */}
        <div className="mb-4">
          <p className="text-zinc-500 text-xs font-mono mb-1">{period}</p>
          <h3 className="text-zinc-100 text-xl font-bold leading-tight group-hover:text-white transition-colors">
            {title}
          </h3>
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-4">
          {highlights.map((h) => (
            <span
              key={h}
              className="text-xs font-semibold px-2.5 py-1 rounded-lg"
              style={{ background: `${accent}15`, color: accent }}
            >
              {h}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-zinc-400 text-sm leading-relaxed flex-1 mb-6">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 bg-zinc-800 text-zinc-400 rounded-lg border border-zinc-700 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div
          className="flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
          style={{ color: accent }}
        >
          <span>View on GitHub</span>
          <motion.span
            animate={{ x: 0 }}
            whileHover={{ x: 4 }}
            className="inline-block transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </motion.span>
        </div>
      </div>

      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${accent}08 0%, transparent 70%)`,
        }}
      />
    </motion.a>
  );
}
