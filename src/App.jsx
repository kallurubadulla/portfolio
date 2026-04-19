import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import ProjectCard from "./components/ProjectCard";
import SkillBadge from "./components/SkillBadge";
import TimelineItem from "./components/TimelineItem";
import NavBar from "./components/NavBar";

const PROJECTS = [
  {
    title: "Cloth Defect Detection System",
    period: "Sep 2025 – Jan 2026",
    description:
      "CNN-based deep learning model for automated textile defect detection with real-time web visualization, severity grading, and quality reporting.",
    highlights: ["95% Classification Accuracy", "Real-time Flask Web App", "OpenCV Preprocessing"],
    tags: ["Python", "TensorFlow", "CNN", "Flask", "OpenCV", "MySQL"],
    link: "https://github.com/kallurubadulla/cloth-detect-defection-system",
    accent: "#10b981",
    featured: true,
  },
  {
    title: "Infant Cry Emotion Detection",
    period: "Nov 2025 – Jan 2026",
    description:
      "Multi-class deep learning classifier for automated emotion recognition from infant cry audio signals using MFCCs and spectrograms.",
    highlights: ["92% Classification Accuracy", "Low-latency Inference", "MFCC Feature Extraction"],
    tags: ["Python", "TensorFlow", "Keras", "Signal Processing", "scikit-learn"],
    link: "https://github.com/kallurubadulla",
    accent: "#6366f1",
    featured: false,
  },
  {
    title: "Personal Task Management App",
    period: "2025",
    description:
      "Full-stack productivity application with intuitive task organization, priority management, and clean UX for everyday workflow management.",
    highlights: ["Full-Stack Architecture", "REST API Backend", "Responsive UI"],
    tags: ["React", "JavaScript", "REST API", "CSS"],
    link: "https://github.com/kallurubadulla/personal-task-management-app",
    accent: "#f59e0b",
    featured: false,
  },
  {
    title: "SauceDemo QA Assignment",
    period: "2025",
    description:
      "Comprehensive automated test suite for the SauceDemo e-commerce platform demonstrating QA engineering skills and test coverage strategies.",
    highlights: ["Automated Testing", "QA Engineering", "Test Coverage"],
    tags: ["Testing", "Automation", "QA", "JavaScript"],
    link: "https://github.com/kallurubadulla/SauceDemo_Assignment",
    accent: "#ec4899",
    featured: false,
  },
];

const SKILLS = {
  "Languages": [
    { name: "Python", icon: "🐍" },
    { name: "Java", icon: "☕" },
    { name: "JavaScript", icon: "⚡" },
    { name: "SQL", icon: "🗄️" },
  ],
  "ML / AI": [
    { name: "TensorFlow", icon: "🧠" },
    { name: "Keras", icon: "🔥" },
    { name: "scikit-learn", icon: "📊" },
    { name: "OpenCV", icon: "👁️" },
    { name: "NumPy", icon: "🔢" },
    { name: "Pandas", icon: "🐼" },
  ],
  "Web & APIs": [
    { name: "React", icon: "⚛️" },
    { name: "Flask", icon: "🌶️" },
    { name: "Spring Boot", icon: "🍃" },
    { name: "REST APIs", icon: "🔗" },
    { name: "HTML/CSS", icon: "🎨" },
  ],
  "Data Viz": [
    { name: "Power BI", icon: "📈" },
    { name: "Plotly", icon: "📉" },
    { name: "Tableau", icon: "🗺️" },
    { name: "Matplotlib", icon: "📐" },
  ],
  "Tools & Cloud": [
    { name: "Git / GitHub", icon: "🐙" },
    { name: "Azure", icon: "☁️" },
    { name: "VS Code", icon: "💻" },
    { name: "Jupyter", icon: "📓" },
  ],
};

const TIMELINE = [
  {
    year: "2022 – 2027",
    title: "Integrated B.Tech & M.Tech — Software Engineering",
    org: "VIT-AP University",
    desc: "Specializing in Software Engineering, Machine Learning, and Data Visualization. CGPA: 8.22/10",
    type: "education",
  },
  {
    year: "Feb–Mar 2026",
    title: "Data Analytics Job Simulation",
    org: "Deloitte via Forage",
    desc: "Worked on Data Analysis and Forensic Technology challenges in a simulated consulting environment.",
    type: "experience",
  },
  {
    year: "Feb–Mar 2026",
    title: "Software Engineering Job Simulation",
    org: "JPMorgan Chase via Forage",
    desc: "Built REST API integrations and Kafka-based messaging systems in a simulated fintech environment.",
    type: "experience",
  },
  {
    year: "Mar 2026",
    title: "Azure Fundamentals Certified",
    org: "Microsoft",
    desc: "Certified in cloud fundamentals, core Azure services, and cloud security concepts.",
    type: "cert",
  },
  {
    year: "Feb 2026",
    title: "Agile Foundations",
    org: "Simplilearn",
    desc: "Mastered Agile methodologies, sprint planning, and cross-functional team collaboration frameworks.",
    type: "cert",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function App() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen font-sans antialiased overflow-x-hidden">
      {/* Ambient background blobs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-emerald-900/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-indigo-900/10 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section
        id="home"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-zinc-900/80 border border-emerald-500/30 rounded-full px-4 py-1.5 mb-8 text-sm text-emerald-400 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Open to opportunities · VIT-AP University
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none mb-6"
          >
            <span className="text-zinc-100">Badulla</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent">
              Kalluru
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Integrated M.Tech candidate building high-performance{" "}
            <span className="text-emerald-400 font-medium">deep learning models</span> and{" "}
            <span className="text-emerald-400 font-medium">full-stack applications</span> that
            deliver real-world impact — from textile defect detection to emotion recognition.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#projects"
              className="group relative px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-xl transition-all duration-200 overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
            </a>
            <a
              href="https://github.com/kallurubadulla"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-zinc-700 hover:border-emerald-500/50 hover:text-emerald-400 text-zinc-300 font-semibold rounded-xl transition-all duration-200 backdrop-blur-sm"
            >
              GitHub ↗
            </a>
          </motion.div>

          {/* Floating stat cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mt-16"
          >
            {[
              { label: "Top Accuracy", value: "95%", sub: "CNN Model" },
              { label: "Projects Built", value: "4+", sub: "& counting" },
              { label: "Certifications", value: "6", sub: "& simulations" },
              { label: "CGPA", value: "8.22", sub: "VIT-AP" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-zinc-900/70 border border-zinc-800 rounded-2xl px-5 py-4 backdrop-blur-sm text-center min-w-[110px]"
              >
                <div className="text-2xl font-black text-emerald-400">{s.value}</div>
                <div className="text-zinc-300 text-xs font-semibold mt-0.5">{s.label}</div>
                <div className="text-zinc-600 text-xs">{s.sub}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.4 }}
            className="w-px h-10 bg-gradient-to-b from-zinc-600 to-transparent"
          />
        </motion.div>
      </section>

      {/* ─── PROJECTS ─────────────────────────────────────────── */}
      <section id="projects" className="relative z-10 py-28 px-6 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <p className="text-emerald-400 text-sm font-mono font-semibold tracking-widest uppercase mb-3">
            // 02. Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-100">
            Featured Projects
          </h2>
          <p className="text-zinc-500 mt-4 max-w-lg">
            From computer vision to audio ML — each project tackles a real-world problem with clean engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i * 0.5}
              variants={fadeUp}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── SKILLS ───────────────────────────────────────────── */}
      <section id="skills" className="relative z-10 py-28 px-6 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-16"
        >
          <p className="text-emerald-400 text-sm font-mono font-semibold tracking-widest uppercase mb-3">
            // 03. Stack
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">Tech Arsenal</h2>
          <p className="text-zinc-500 mt-4 max-w-lg">
            Tools and technologies I reach for when building intelligent systems.
          </p>
        </motion.div>

        <div className="space-y-10">
          {Object.entries(SKILLS).map(([category, skills], ci) => (
            <motion.div
              key={category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={ci * 0.3}
              variants={fadeUp}
            >
              <h3 className="text-zinc-500 text-xs font-mono font-semibold uppercase tracking-widest mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, si) => (
                  <SkillBadge key={skill.name} skill={skill} delay={si * 0.05} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── EXPERIENCE / TIMELINE ────────────────────────────── */}
      <section id="experience" className="relative z-10 py-28 px-6 max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-16"
        >
          <p className="text-emerald-400 text-sm font-mono font-semibold tracking-widest uppercase mb-3">
            // 04. Journey
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
            Experience & Education
          </h2>
          <p className="text-zinc-500 mt-4 max-w-lg">
            A timeline of growth — from university to virtual internships and industry certifications.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/40 via-zinc-700/40 to-transparent" />

          <div className="space-y-8">
            {TIMELINE.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ──────────────────────────────────────────── */}
      <section id="contact" className="relative z-10 py-28 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-emerald-400 text-sm font-mono font-semibold tracking-widest uppercase mb-3">
            // 05. Contact
          </p>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-6">
            Let's Build Something
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Remarkable
            </span>
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Whether it's a full-stack app, an ML system, or just a conversation — I'd love to connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kallurubadulla6@gmail.com"
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-xl transition-all duration-200 text-lg"
            >
              Send Email ✉️
            </a>
            <a
              href="https://linkedin.com/in/badulla-kalluru-521531336"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-zinc-700 hover:border-emerald-500/50 hover:text-emerald-400 text-zinc-300 font-semibold rounded-xl transition-all duration-200"
            >
              LinkedIn ↗
            </a>
          </div>

          {/* Quick contact info */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-zinc-500 text-sm">
            <span>📍 Vijayawada, Andhra Pradesh</span>
            <span>📞 +91 6302143531</span>
            <span>🎓 VIT-AP University</span>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-900 py-8 px-6 text-center text-zinc-600 text-sm">
        <p>
          Built with React + Framer Motion ·{" "}
          <span className="text-emerald-600">Badulla Kalluru</span> · 2026
        </p>
      </footer>
    </div>
  );
}
