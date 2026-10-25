import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Layers,
  Sparkles,
  Smartphone,
  Cpu,
  Workflow,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  X,
} from "lucide-react";

/* ----------------------------- Reusable: FadeIn ---------------------------- */
type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: keyof JSX.IntrinsicElements;
};

function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
  x = 0,
  y = 25,
  as = "div",
}: FadeInProps) {
  const DynamicTag = motion.create(as as any);
  return (
    <DynamicTag
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </DynamicTag>
  );
}

/* ----------------------------- Reusable: Magnet ---------------------------- */
type MagnetProps = {
  children: React.ReactNode;
  className?: string;
  padding?: number;
  strength?: number;
};

function Magnet({
  children,
  className,
  padding = 120,
  strength = 4,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const inRange =
        e.clientX >= rect.left - padding &&
        e.clientX <= rect.right + padding &&
        e.clientY >= rect.top - padding &&
        e.clientY <= rect.bottom + padding;

      if (!inRange) {
        el.style.transition = "transform 0.5s ease-out";
        el.style.transform = "translate3d(0px, 0px, 0px)";
        return;
      }

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = (e.clientX - centerX) / strength;
      const dy = (e.clientY - centerY) / strength;

      el.style.transition = "transform 0.15s ease-out";
      el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    };

    const handleLeave = () => {
      el.style.transition = "transform 0.5s ease-out";
      el.style.transform = "translate3d(0px, 0px, 0px)";
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseout", handleLeave, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleLeave);
    };
  }, [padding, strength]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}

/* ------------------------------- Navigation ------------------------------- */
function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0C0C0C]/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-base sm:text-lg font-bold tracking-wider uppercase text-white hover:text-blue-400 transition-colors"
        >
          Vasim<span className="text-blue-500">.</span>Dev
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm uppercase tracking-wider font-medium text-[#D7E2EA]/80">
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#experience" className="hover:text-white transition-colors">
            Experience
          </a>
          <a href="#skills" className="hover:text-white transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#education" className="hover:text-white transition-colors">
            Education
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/resume.html"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/15 text-white hover:bg-white/10 transition-all"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90 transition-all shadow-md shadow-blue-500/20"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------- HeroSection ------------------------------- */
function HeroSection() {
  return (
    <section className="min-h-screen pt-28 pb-16 flex flex-col justify-between relative overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Main Big Heading */}
      <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full text-center my-auto relative z-20">
        <FadeIn delay={0.1} y={20}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for New Roles &amp; Opportunities
          </div>
        </FadeIn>

        <FadeIn delay={0.2} y={30}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-[13vw] sm:text-[14vw] md:text-[15vw] lg:text-[12rem]">
            Hi, i&apos;m vasim
          </h1>
        </FadeIn>

        <FadeIn delay={0.25} y={20}>
          <p className="text-sm sm:text-base md:text-lg font-semibold uppercase tracking-wider text-blue-400 mt-2">
            AI-Augmented Android / Flutter Developer | UI/UX Designer | AI Automation
          </p>
        </FadeIn>

        <FadeIn delay={0.3} y={25}>
          <p className="text-base sm:text-lg text-[#D7E2EA]/80 font-normal max-w-3xl mx-auto mt-4 leading-relaxed">
            Android developer and UI/UX designer with hands-on experience in{" "}
            <span className="text-white font-medium">mobile application development</span>,{" "}
            <span className="text-white font-medium">Zoho CRM automation</span>, and{" "}
            <span className="text-white font-medium">AI workflow systems</span>. Builds native Android apps in Java with Firebase and cross-platform apps in Flutter, designs user-centred interfaces in Figma, and works in an{" "}
            <span className="text-white font-medium">AI-augmented workflow</span> &mdash; utilizing AI tools for planning, development, and automation while personally reviewing, testing, and refining the result. MCA graduate from GLS University, Ahmedabad (Sem 4: 64%), with internship experience at Tectrionix, Ahmedabad.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} y={20}>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-full font-medium uppercase tracking-widest text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Explore Projects
            </a>
            <a
              href="/resume.html"
              className="px-8 py-3.5 rounded-full font-medium uppercase tracking-widest text-sm border-2 border-white/20 text-[#D7E2EA] hover:bg-white/10 hover:border-white/40 transition-all inline-flex items-center gap-2"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full font-medium uppercase tracking-widest text-sm bg-white/5 border border-white/10 text-[#D7E2EA] hover:bg-white/10 transition-all"
            >
              Contact Me
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Subtle bottom divider line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}

/* ------------------------ TechStackTickerSection ------------------------ */
const techStack1 = [
  "Android Studio",
  "Java",
  "Kotlin",
  "Flutter & Dart",
  "XML Layouts",
  "Firebase Realtime DB",
  "Firestore",
  "REST APIs",
  "Node.js",
  "WebSocket",
  "Material Design",
];

const techStack2 = [
  "UI/UX Design",
  "Figma",
  "Framer",
  "Canva",
  "Zoho CRM",
  "Deluge Scripting",
  "AI Workflow Systems",
  "Prompt Engineering",
  "Git & GitHub",
  "Unity & Unreal",
  "Software Testing",
];

function TechTicker() {
  return (
    <section className="py-10 bg-[#0E0E10] border-y border-white/5 overflow-hidden">
      <div className="flex flex-col gap-3">
        {/* Row 1 */}
        <div className="flex gap-4 animate-ticker-left whitespace-nowrap">
          {[...techStack1, ...techStack1, ...techStack1].map((tech, i) => (
            <span
              key={`tech1-${i}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium uppercase tracking-wider text-[#D7E2EA]/90 hover:border-blue-500/50 hover:bg-blue-500/10 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              {tech}
            </span>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex gap-4 animate-ticker-right whitespace-nowrap">
          {[...techStack2, ...techStack2, ...techStack2].map((tech, i) => (
            <span
              key={`tech2-${i}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium uppercase tracking-wider text-[#D7E2EA]/90 hover:border-purple-500/50 hover:bg-purple-500/10 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- AboutSection ------------------------------ */
function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 px-5 sm:px-8 max-w-6xl mx-auto relative">
      <FadeIn y={30}>
        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-widest text-xs sm:text-sm font-semibold mb-2">
            Background &amp; Focus
          </p>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
          >
            About Me
          </h2>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Main Bio Text */}
        <FadeIn delay={0.1} y={20} className="md:col-span-7">
          <div className="space-y-5 text-[#D7E2EA]/85 text-base sm:text-lg leading-relaxed font-light">
            <p>
              I am an <strong className="text-white font-medium">MCA graduate from GLS University, Ahmedabad (Sem 4: 64%)</strong> with a dedicated focus on building intuitive mobile applications and streamlining digital workflows. My technical background centers around <strong className="text-white font-medium">native Android development</strong> (Java, Kotlin, XML, Firebase) along with cross-platform mobile development with <strong className="text-white font-medium">Flutter &amp; Dart</strong>.
            </p>
            <p>
              In <strong className="text-white font-medium">February 2026</strong>, I completed a 4-month industry internship at <strong className="text-white font-medium">Tectrionix</strong> (Ahmedabad), where I gained practical experience designing web and mobile UI/UX in Figma, customizing business workflows in the <strong className="text-white font-medium">Zoho ecosystem</strong> with Deluge scripting, and deploying modern <strong className="text-white font-medium">AI automation tools</strong>.
            </p>
            <p>
              I actively operate in an <strong className="text-white font-medium">AI-augmented workflow</strong> &mdash; leveraging AI tools for architectural planning, rapid prototyping, and automated pipelines while personally reviewing, testing, and refining every deliverable.
            </p>
          </div>
        </FadeIn>

        {/* Quick Highlights / Stats Grid */}
        <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FadeIn delay={0.15} y={20}>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/40 transition-colors">
              <GraduationCap className="text-blue-400 mb-3" size={28} />
              <h3 className="text-white font-semibold text-lg uppercase tracking-wide">
                MCA Degree
              </h3>
              <p className="text-xs text-[#D7E2EA]/70 mt-1">
                GLS University, Ahmedabad (Sem 4: 64%). Solid engineering foundation.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/40 transition-colors">
              <Briefcase className="text-indigo-400 mb-3" size={28} />
              <h3 className="text-white font-semibold text-lg uppercase tracking-wide">
                Tectrionix Intern
              </h3>
              <p className="text-xs text-[#D7E2EA]/70 mt-1">
                UI/UX Designer (Figma) &amp; Zoho CRM Intern (Completed Feb 2026).
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.25} y={20}>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/40 transition-colors">
              <Smartphone className="text-purple-400 mb-3" size={28} />
              <h3 className="text-white font-semibold text-lg uppercase tracking-wide">
                Android &amp; Flutter
              </h3>
              <p className="text-xs text-[#D7E2EA]/70 mt-1">
                Native Java apps with Firebase and cross-platform Flutter security enclaves.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} y={20}>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 transition-colors">
              <Sparkles className="text-emerald-400 mb-3" size={28} />
              <h3 className="text-white font-semibold text-lg uppercase tracking-wide">
                AI Automation
              </h3>
              <p className="text-xs text-[#D7E2EA]/70 mt-1">
                AI workflow systems, prompt engineering, and automated pipelines.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- ExperienceSection ---------------------------- */
function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-5 sm:px-8 max-w-6xl mx-auto">
      <FadeIn y={30}>
        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-widest text-xs sm:text-sm font-semibold mb-2">
            Professional Track Record
          </p>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
          >
            Work Experience
          </h2>
        </div>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6 sm:p-10 md:p-12 relative overflow-hidden">
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
                Completed Internship • 4 Months
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
                UI/UX Designer (Figma) &amp; Zoho CRM Intern
              </h3>
              <p className="text-base sm:text-lg text-[#D7E2EA]/70 mt-1 font-medium">
                Tectrionix • Ahmedabad, Gujarat, India
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-4 py-2 rounded-xl text-xs sm:text-sm uppercase tracking-wider text-[#D7E2EA]/80 font-medium bg-white/5 border border-white/10">
                Completed Feb 2026
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 text-blue-400">
                <Layers size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium text-base mb-1">
                  UI/UX Interfaces &amp; Responsive Layouts
                </h4>
                <p className="text-sm text-[#D7E2EA]/70 leading-relaxed font-light">
                  Designed user-friendly web and mobile interfaces, wireframes, prototypes and responsive layouts using Figma.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 text-purple-400">
                <Workflow size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium text-base mb-1">
                  Zoho CRM Customization &amp; Deluge
                </h4>
                <p className="text-sm text-[#D7E2EA]/70 leading-relaxed font-light">
                  Customised Zoho CRM modules, workflows, fields, layouts and automation to support business requirements, including Deluge scripting.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400">
                <Cpu size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium text-base mb-1">
                  AI Automation Tools &amp; Productivity
                </h4>
                <p className="text-sm text-[#D7E2EA]/70 leading-relaxed font-light">
                  Worked with AI automation tools to streamline business workflows and improve productivity.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium text-base mb-1">
                  Cross-functional Collaboration
                </h4>
                <p className="text-sm text-[#D7E2EA]/70 leading-relaxed font-light">
                  Collaborated with development and business teams to improve user experience, CRM workflows and customer management processes.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-white/10 flex items-center gap-2 flex-wrap">
            <span className="text-xs uppercase font-bold text-white tracking-wider mr-2">Tools:</span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-blue-300">Figma</span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-blue-300">Zoho CRM</span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-blue-300">Deluge</span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-blue-300">AI Automation Tools</span>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

/* ----------------------------- SkillsSection ----------------------------- */
const skillCategories = [
  {
    num: "01",
    name: "Mobile Development",
    desc: "Building native Android apps with Java, Kotlin, XML, and Firebase, as well as cross-platform security applications in Flutter & Dart.",
    tags: ["Java", "Kotlin", "Flutter & Dart", "Android Studio", "XML Layouts", "Material Design", "Firebase", "REST APIs"],
  },
  {
    num: "02",
    name: "Backend & Data",
    desc: "Realtime synchronized databases, secure authentication, cloud document stores, local WebSocket bridge daemons, and Node.js microservices.",
    tags: ["Firebase Realtime Database", "Firestore", "Firebase Auth", "Node.js", "WebSocket"],
  },
  {
    num: "03",
    name: "UI/UX & Product Design",
    desc: "Crafting intuitive user interfaces, high-fidelity wireframes, interactive mobile prototypes, and scalable design systems.",
    tags: ["Figma", "Framer", "Canva", "Wireframing", "Interactive Prototyping", "Design Systems"],
  },
  {
    num: "04",
    name: "Zoho CRM & Automation",
    desc: "Automating repetitive business processes, building custom Zoho CRM integrations, and writing Deluge automation scripts.",
    tags: ["Zoho CRM", "Deluge Scripting", "Workflow Automation", "Process Optimisation", "API Webhooks"],
  },
  {
    num: "05",
    name: "AI-Augmented Workflow",
    desc: "Leveraging cutting-edge AI workflow tools, prompt engineering, and automated pipelines to accelerate development and product delivery.",
    tags: ["AI Automation Tools", "AI Workflow Systems", "Prompt Engineering", "Automated Pipelines"],
  },
  {
    num: "06",
    name: "Game & 3D",
    desc: "Exploring 3D modeling, interactive environments, and game design basics across industry engines.",
    tags: ["Unity", "Unreal Engine", "Blender", "Game Design Basics"],
  },
  {
    num: "07",
    name: "Tools & Other",
    desc: "Foundational software testing, agile sprints, version control with Git & GitHub, and multiple core programming paradigms.",
    tags: ["Git & GitHub", "Software Testing", "Agile Sprints", "C", "C++", "C#", "HTML/CSS", "ASP.NET", "WordPress"],
  },
];

function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32 px-5 sm:px-8 max-w-6xl mx-auto">
      <FadeIn y={30}>
        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-widest text-xs sm:text-sm font-semibold mb-2">
            Capabilities &amp; Tech Stack
          </p>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
          >
            Technical Skills
          </h2>
        </div>
      </FadeIn>

      <div className="space-y-6">
        {skillCategories.map((skill, i) => (
          <FadeIn
            key={skill.num}
            delay={i * 0.1}
            y={20}
            className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex gap-6 items-start">
                <span className="text-3xl sm:text-4xl font-black text-blue-500/80 leading-none">
                  {skill.num}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide">
                    {skill.name}
                  </h3>
                  <p className="text-sm sm:text-base text-[#D7E2EA]/70 mt-2 font-light leading-relaxed max-w-2xl">
                    {skill.desc}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 md:justify-end max-w-sm">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-white/5 border border-white/10 text-[#D7E2EA]/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ ProjectsSection ---------------------------- */
type Screenshot = {
  src: string;
  title: string;
  caption: string;
};

type Project = {
  number: string;
  name: string;
  category: string;
  desc: string;
  tools: string;
  live: string;
  isMobile?: boolean;
  screenshots?: Screenshot[];
  images: string[];
};

const projects: Project[] = [
  {
    number: "01",
    name: "RomClub",
    category: "Android Application",
    desc: "A dedicated Android platform designed to centralize information, modules, and recovery guides for custom ROM enthusiasts and power users.",
    tools: "Android Studio, Java, XML, Firebase",
    live: "https://github.com/vasimsamtani/RomClub",
    isMobile: true,
    screenshots: [
      {
        src: "/projects/romclub/modules.jpg",
        title: "Magisk & KernelSU Modules",
        caption: "Curated module repository with Play Integrity fixes, audio mods & 1-tap zip downloads.",
      },
      {
        src: "/projects/romclub/select-device.jpg",
        title: "Device Detection & Selector",
        caption: "Auto-detects active hardware and filters codenames across Xiaomi, Pixel, and OnePlus.",
      },
      {
        src: "/projects/romclub/guides.jpg",
        title: "Flashing Guides & Tutorials",
        caption: "Safety-tested protocols for bootloader unlock, custom recovery (TWRP/OrangeFox), and unbricking.",
      },
      {
        src: "/projects/romclub/unlock-bootloader.jpg",
        title: "Step-by-Step Instructions",
        caption: "Clear tutorial steps with critical data-loss warnings and essential fastboot commands.",
      },
      {
        src: "/projects/romclub/about.jpg",
        title: "Developer & Community Hub",
        caption: "RomClub v2.0 Android Modder Edition crafted by Vasim, featuring feedback and community channels.",
      },
    ],
    images: [
      "/projects/romclub/modules.jpg",
      "/projects/romclub/select-device.jpg",
      "/projects/romclub/guides.jpg",
    ],
  },
  {
    number: "02",
    name: "VeilChat",
    category: "Flutter & Cybersecurity",
    desc: "Zero-leakage, privacy-hardened WhatsApp client and security enclave featuring duress cloaking, in-feed shimmer redaction, and a local WebSocket bridge daemon.",
    tools: "Flutter, Dart, Node.js, Baileys, WebSocket, AES-256",
    live: "https://github.com/vasimsamtani/VeilChat",
    isMobile: true,
    screenshots: [
      {
        src: "/projects/veilchat/00_Splash_Screen.png",
        title: "Liquid Glass Brand Launch",
        caption: "Cyberpunk aesthetic launch screen with cryptographic key verification and security enclave initialization.",
      },
      {
        src: "/projects/veilchat/01_WhatsApp_Bridge_Setup.png",
        title: "WhatsApp Bridge & QR Pairing",
        caption: "Direct multi-device QR pairing over local Node.js WebSocket daemon with animated laser scanning.",
      },
      {
        src: "/projects/veilchat/02_Unified_Veiled_Chat_Feed.png",
        title: "Unified Veiled Chat Feed",
        caption: "In-feed Shimmer Redaction disguises preview text to prevent shoulder-surfing and visual eavesdropping.",
      },
      {
        src: "/projects/veilchat/03_Biometric_Keypad_Modal.png",
        title: "Dual-PIN & Biometric Keypad",
        caption: "Secure tactile keypad with biometric unlock, randomized feedback, and automatic lockout defense.",
      },
      {
        src: "/projects/veilchat/04_Unlocked_Conversation_View.png",
        title: "Real Confidential Conversation",
        caption: "Decrypted chat stream featuring live radial auto-lock countdown timer and emergency panic lock wipe.",
      },
      {
        src: "/projects/veilchat/05_Decoy_Mode_Chat.png",
        title: "Decoy Mode Duress Protection",
        caption: "Alternate PIN unlocks plausible, benign dummy conversation with zero forensic residue of confidential data.",
      },
      {
        src: "/projects/veilchat/06_Privacy_Camouflage_Settings.png",
        title: "Stealth & Camouflage Controls",
        caption: "Configure notification camouflage, ghost presence mode, zero-telemetry vault, and auto-lock thresholds.",
      },
    ],
    images: [
      "/projects/veilchat/02_Unified_Veiled_Chat_Feed.png",
      "/projects/veilchat/04_Unlocked_Conversation_View.png",
      "/projects/veilchat/01_WhatsApp_Bridge_Setup.png",
    ],
  },
];

function ProjectCard({
  project,
  index,
  totalCards,
}: {
  project: Project;
  index: number;
  totalCards: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [selectedModalIndex, setSelectedModalIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.02;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  const scrollCarousel = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -240 : 240;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (selectedModalIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedModalIndex(null);
      } else if (e.key === "ArrowLeft" && project.screenshots) {
        setSelectedModalIndex(
          (prev) => (prev! - 1 + project.screenshots!.length) % project.screenshots!.length
        );
      } else if (e.key === "ArrowRight" && project.screenshots) {
        setSelectedModalIndex(
          (prev) => (prev! + 1) % project.screenshots!.length
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedModalIndex, project.screenshots]);

  return (
    <div ref={ref} className="min-h-[75vh] relative" style={{ top: `${index * 24}px` }}>
      <motion.div
        style={{ scale }}
        className="sticky top-28 rounded-3xl border border-white/15 bg-[#121214] p-6 sm:p-8 md:p-10 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4 flex-wrap mb-8">
          <div className="flex items-start gap-4 sm:gap-6">
            <span
              className="font-black text-blue-500/80 leading-none"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              {project.number}
            </span>
            <div>
              <p className="text-blue-400 uppercase tracking-widest text-xs font-semibold">
                {project.category}
              </p>
              <h3 className="text-white uppercase font-bold text-2xl sm:text-3xl mt-1">
                {project.name}
              </h3>
              <p className="text-[#D7E2EA]/70 font-light text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
                {project.desc}
              </p>
              <p className="text-white/50 text-xs sm:text-sm mt-3 uppercase tracking-wider font-mono">
                {project.tools}
              </p>
            </div>
          </div>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 text-white font-medium uppercase tracking-wider px-6 py-2.5 text-xs sm:text-sm hover:bg-white/10 hover:border-white/40 transition inline-flex items-center gap-1.5"
          >
            GitHub Project <ArrowUpRight size={14} />
          </a>
        </div>

        {/* If Mobile project with screenshots, display phone mockup showcase */}
        {project.isMobile && project.screenshots ? (
          <div>
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Smartphone size={13} />
                  Mobile App UI
                </span>
                <span className="text-xs text-[#D7E2EA]/50 hidden sm:inline">
                  {project.screenshots.length} App Screens • Click any to view full size
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => scrollCarousel("left")}
                  className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition"
                  aria-label="Scroll left"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => scrollCarousel("right")}
                  className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition"
                  aria-label="Scroll right"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <div
              ref={scrollRef}
              className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory no-scrollbar scroll-smooth"
            >
              {project.screenshots.map((screen, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedModalIndex(idx)}
                  className="group relative flex-shrink-0 snap-start cursor-pointer w-[185px] sm:w-[205px]"
                >
                  {/* Phone Mockup Frame */}
                  <div className="relative rounded-[2.2rem] p-2 bg-[#18181c] border-2 border-white/10 group-hover:border-blue-500/60 shadow-xl group-hover:shadow-[0_12px_30px_-5px_rgba(59,130,246,0.3)] transition-all duration-300 group-hover:-translate-y-1">
                    {/* Speaker & camera notch */}
                    <div className="w-14 h-3 bg-black/70 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#111] border border-white/15" />
                    </div>

                    {/* Screen Display */}
                    <div className="relative rounded-[1.6rem] overflow-hidden bg-black aspect-[230/512]">
                      <img
                        src={screen.src}
                        alt={screen.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-blue-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                        <span className="p-2 rounded-full bg-black/70 border border-white/20 text-white shadow-lg flex items-center gap-1.5 text-xs font-medium">
                          <ZoomIn size={14} /> View
                        </span>
                      </div>
                    </div>

                    {/* Bottom home bar indicator */}
                    <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mt-2" />
                  </div>

                  {/* Title & Caption */}
                  <div className="mt-3 px-1 text-center">
                    <h4 className="text-xs sm:text-sm font-semibold text-white tracking-wide group-hover:text-blue-400 transition-colors">
                      {screen.title}
                    </h4>
                    <p className="text-[11px] text-[#D7E2EA]/60 font-light mt-1 line-clamp-2 leading-relaxed">
                      {screen.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-2 flex flex-col gap-4">
              <img
                src={project.images[0]}
                alt={`${project.name}-1`}
                className="w-full object-cover rounded-2xl h-44 sm:h-52"
                loading="lazy"
              />
              <img
                src={project.images[1]}
                alt={`${project.name}-2`}
                className="w-full object-cover rounded-2xl h-48 sm:h-64"
                loading="lazy"
              />
            </div>
            <div className="md:col-span-3">
              <img
                src={project.images[2]}
                alt={`${project.name}-3`}
                className="w-full h-full object-cover rounded-2xl min-h-[280px] md:min-h-[460px]"
                loading="lazy"
              />
            </div>
          </div>
        )}

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedModalIndex !== null && project.screenshots && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
              onClick={() => setSelectedModalIndex(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-md w-full bg-[#121216] border border-white/20 rounded-3xl p-5 sm:p-6 shadow-2xl flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedModalIndex(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>

                {/* Counter & GitHub link */}
                <div className="w-full flex items-center justify-between pr-10 mb-3">
                  <span className="text-xs uppercase tracking-wider font-semibold text-blue-400">
                    Screen {selectedModalIndex + 1} of {project.screenshots.length}
                  </span>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-white/60 hover:text-white inline-flex items-center gap-1 transition"
                  >
                    GitHub Repo <ArrowUpRight size={12} />
                  </a>
                </div>

                {/* Big Phone Mockup */}
                <div className="relative rounded-[2.4rem] p-2 bg-[#1e1e24] border-2 border-white/20 shadow-2xl my-2 max-w-[240px] sm:max-w-[260px] w-full">
                  <div className="w-14 h-2.5 bg-black/80 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#111] border border-white/15" />
                  </div>
                  <div className="relative rounded-[1.8rem] overflow-hidden bg-black aspect-[230/512]">
                    <img
                      src={project.screenshots[selectedModalIndex].src}
                      alt={project.screenshots[selectedModalIndex].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-14 h-1 bg-white/20 rounded-full mx-auto mt-2" />
                </div>

                {/* Screen Details */}
                <div className="text-center mt-3 max-w-xs">
                  <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wide">
                    {project.screenshots[selectedModalIndex].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/75 font-light mt-1 leading-relaxed">
                    {project.screenshots[selectedModalIndex].caption}
                  </p>
                </div>

                {/* Navigation controls */}
                <div className="flex items-center gap-3 mt-4">
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedModalIndex(
                        (prev) => (prev! - 1 + project.screenshots!.length) % project.screenshots!.length
                      )
                    }
                    className="px-4 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-white text-xs uppercase tracking-wider font-medium flex items-center gap-1.5 transition"
                  >
                    <ChevronLeft size={14} /> Previous
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedModalIndex(
                        (prev) => (prev! + 1) % project.screenshots!.length
                      )
                    }
                    className="px-4 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-white text-xs uppercase tracking-wider font-medium flex items-center gap-1.5 transition"
                  >
                    Next <ChevronRight size={14} />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32 px-5 sm:px-8 max-w-6xl mx-auto">
      <FadeIn y={30}>
        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-widest text-xs sm:text-sm font-semibold mb-2">
            Selected Work
          </p>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
          >
            Featured Projects
          </h2>
        </div>
      </FadeIn>

      <div className="space-y-12">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            totalCards={projects.length}
          />
        ))}
      </div>
    </section>
  );
}

/* ----------------------------- EducationSection ---------------------------- */
function EducationSection() {
  const educationList = [
    {
      degree: "Master of Computer Applications (MCA)",
      status: "Completed",
      institution: "GLS University, Ahmedabad",
      result: "Sem 4: 64%",
      period: "Postgraduate",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      status: "2021 – 2024",
      institution: "Shri V. J. Modha College of IT, Porbandar — Bhakta Kavi Narsinh Mehta University, Junagadh",
      result: "82%",
      period: "Undergraduate",
    },
    {
      degree: "HSC (Class 12)",
      status: "2021",
      institution: "Shree O. N. Modha School, Porbandar",
      result: "52%",
      period: "Higher Secondary",
    },
    {
      degree: "SSC (Class 10)",
      status: "2018",
      institution: "Shree Saraswati Science School, Porbandar",
      result: "62%",
      period: "Secondary School",
    },
  ];

  return (
    <section id="education" className="py-24 sm:py-32 px-5 sm:px-8 max-w-6xl mx-auto">
      <FadeIn y={30}>
        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-widest text-xs sm:text-sm font-semibold mb-2">
            Academic Background
          </p>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
          >
            Education
          </h2>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationList.map((edu, i) => (
          <FadeIn
            key={edu.degree}
            delay={i * 0.1}
            y={20}
            className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-blue-500/40 transition-all"
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {edu.period} • {edu.status}
              </span>
              <span className="px-3 py-1 rounded-lg text-xs sm:text-sm font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                {edu.result}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide mt-2">
              {edu.degree}
            </h3>

            <p className="text-sm text-[#D7E2EA]/70 mt-2 font-light leading-relaxed">
              {edu.institution}
            </p>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.4} y={20} className="mt-10">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-transparent p-6 text-center">
          <p className="text-xs uppercase font-bold tracking-widest text-blue-400 mb-2">Languages Spoken</p>
          <div className="flex justify-center gap-4 flex-wrap text-sm sm:text-base font-semibold text-white">
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10">Hindi</span>
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10">Gujarati</span>
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10">English</span>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

/* ------------------------------- ContactSection ---------------------------- */
function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 px-5 sm:px-8 max-w-5xl mx-auto">
      <FadeIn y={30}>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
          <p className="text-blue-400 uppercase tracking-widest text-xs sm:text-sm font-semibold mb-2">
            Get In Touch
          </p>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
          >
            Let&apos;s Build Together
          </h2>
          <p className="text-base sm:text-lg text-[#D7E2EA]/80 font-light max-w-xl mx-auto mb-10 leading-relaxed">
            Have a project in mind, an opportunity to discuss, or want to collaborate on Android apps, UI/UX design, or Zoho &amp; AI workflows? Feel free to reach out.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="mailto:vasimsamtani940@gmail.com"
              className="px-8 py-3.5 rounded-full font-semibold uppercase tracking-widest text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center gap-2"
            >
              <Mail size={16} />
              vasimsamtani940@gmail.com
            </a>

            <a
              href="tel:+919879151961"
              className="px-8 py-3.5 rounded-full font-semibold uppercase tracking-widest text-sm border border-white/20 text-white hover:bg-white/10 transition-all inline-flex items-center gap-2"
            >
              <Phone size={16} />
              +91 9879151961
            </a>

            <a
              href="/resume.html"
              className="px-8 py-3.5 rounded-full font-semibold uppercase tracking-widest text-sm bg-white/5 border border-white/20 text-white hover:bg-white/10 transition-all inline-flex items-center gap-2"
            >
              <ExternalLink size={16} />
              View Resume
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#D7E2EA]/70">
            <div className="inline-flex items-center gap-1.5">
              <MapPin size={16} className="text-blue-400" />
              <span>Ahmedabad, Gujarat, India</span>
            </div>
            <a
              href="https://www.linkedin.com/in/vasimsamtani"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <ExternalLink size={16} className="text-blue-400" />
              LinkedIn Profile
            </a>
            <a
              href="https://github.com/vasimsamtani"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <ExternalLink size={16} className="text-blue-400" />
              GitHub Profile
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

/* ---------------------------------- Footer --------------------------------- */
function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08080A] text-[#D7E2EA] px-5 sm:px-8 py-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#D7E2EA]/60">
        <p>© {new Date().getFullYear()} Vasim Samtani. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#experience" className="hover:text-white transition-colors">
            Experience
          </a>
          <a href="#skills" className="hover:text-white transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#education" className="hover:text-white transition-colors">
            Education
          </a>
          <a href="/resume.html" className="hover:text-white transition-colors">
            Resume
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------- App ---------------------------------- */
export default function App() {
  return (
    <div className="bg-[#0C0C0C] min-h-screen text-[#D7E2EA]">
      <Navbar />
      <main>
        <HeroSection />
        <TechTicker />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}