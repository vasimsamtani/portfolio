import { useEffect, useRef, useState } from "react";
import {
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

        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider font-medium text-[#D7E2EA]/80">
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
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
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

        <FadeIn delay={0.3} y={25}>
          <p className="text-base sm:text-lg md:text-xl text-[#D7E2EA]/80 font-normal max-w-2xl mx-auto mt-4 leading-relaxed">
            Android Developer &amp; UI/UX Designer with hands-on experience in{" "}
            <span className="text-white font-medium">mobile application development</span>,{" "}
            <span className="text-white font-medium">Zoho CRM automation</span>, and{" "}
            <span className="text-white font-medium">AI workflow systems</span>.
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
              href="#contact"
              className="px-8 py-3.5 rounded-full font-medium uppercase tracking-widest text-sm border-2 border-white/20 text-[#D7E2EA] hover:bg-white/10 hover:border-white/40 transition-all inline-flex items-center gap-2"
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
  "Firebase",
  "REST APIs",
  "Zoho CRM",
  "Mobile UI/UX",
  "Material Design",
];

const techStack2 = [
  "UI/UX Design",
  "Figma",
  "Canva",
  "AI Automation Tools",
  "Deluge Scripting",
  "Git & GitHub",
  "Workflow Automation",
  "Software Testing",
  "Unreal & Unity",
  "Agile Sprints",
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
              I am an <strong className="text-white font-medium">MCA graduate</strong> with a dedicated focus on building intuitive mobile applications and streamlining digital workflows. My technical background centers around <strong className="text-white font-medium">native Android development</strong> (Java, XML, Firebase) along with cross-platform mobile development with Flutter.
            </p>
            <p>
              In <strong className="text-white font-medium">February 2026</strong>, I completed a 4-month internship at <strong className="text-white font-medium">Tectrionix</strong> (Ahmedabad), where I gained practical industry experience configuring business workflows within the <strong className="text-white font-medium">Zoho ecosystem</strong>, designing user-centered UI/UX interfaces, and working with modern <strong className="text-white font-medium">AI automation tools</strong>.
            </p>
            <p>
              I also have a strong aesthetic drive in <strong className="text-white font-medium">UI/UX design using Figma and Canva</strong>, ensuring that functional software is paired with clean typography, visual hierarchy, and enjoyable user experiences.
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
                Master of Computer Applications with focus on mobile &amp; software engineering.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/40 transition-colors">
              <Briefcase className="text-indigo-400 mb-3" size={28} />
              <h3 className="text-white font-semibold text-lg uppercase tracking-wide">
                Internship Experience
              </h3>
              <p className="text-xs text-[#D7E2EA]/70 mt-1">
                Tectrionix (Ahmedabad): UI/UX, Zoho, and AI Automation (Completed Feb 2026).
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.25} y={20}>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/40 transition-colors">
              <Smartphone className="text-purple-400 mb-3" size={28} />
              <h3 className="text-white font-semibold text-lg uppercase tracking-wide">
                Mobile Focused
              </h3>
              <p className="text-xs text-[#D7E2EA]/70 mt-1">
                Custom Android apps in Java, XML, Firebase, and Flutter prototypes.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} y={20}>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 transition-colors">
              <Sparkles className="text-emerald-400 mb-3" size={28} />
              <h3 className="text-white font-semibold text-lg uppercase tracking-wide">
                UI/UX Design
              </h3>
              <p className="text-xs text-[#D7E2EA]/70 mt-1">
                User interfaces, wireframing, and interactive design in Figma &amp; Canva.
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
                Intern — UI/UX, Zoho &amp; AI Automation
              </h3>
              <p className="text-base sm:text-lg text-[#D7E2EA]/70 mt-1 font-medium">
                Tectrionix • Ahmedabad, Gujarat, India
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-4 py-2 rounded-xl text-xs sm:text-sm uppercase tracking-wider text-[#D7E2EA]/80 font-medium bg-white/5 border border-white/10">
                Nov 2025 – Feb 2026
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
                  UI/UX Design &amp; Digital Interfaces
                </h4>
                <p className="text-sm text-[#D7E2EA]/70 leading-relaxed font-light">
                  Creating clean wireframes, interactive user flows, and modern visual designs using Figma and Canva focused on user satisfaction.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 text-purple-400">
                <Workflow size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium text-base mb-1">
                  Zoho Business Workflow Scripting
                </h4>
                <p className="text-sm text-[#D7E2EA]/70 leading-relaxed font-light">
                  Configuring enterprise workflows, custom module triggers, and Deluge scripting within the Zoho ecosystem to streamline operations.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400">
                <Cpu size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium text-base mb-1">
                  AI Automation Tools &amp; Workflows
                </h4>
                <p className="text-sm text-[#D7E2EA]/70 leading-relaxed font-light">
                  Assisting in the evaluation, integration, and deployment of modern AI automation tools and real-time process systems.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium text-base mb-1">
                  Agile Collaboration &amp; Software Testing
                </h4>
                <p className="text-sm text-[#D7E2EA]/70 leading-relaxed font-light">
                  Participating in sprint meetings, requirement analysis, software debugging, and quality assurance testing.
                </p>
              </div>
            </div>
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
    name: "Mobile App Development",
    desc: "Building native Android apps with Java, XML, and Firebase, with clean architectural structure and responsive UI layouts.",
    tags: ["Android Studio", "Java", "Kotlin", "Flutter", "Firebase", "REST APIs"],
  },
  {
    num: "02",
    name: "UI/UX & Product Design",
    desc: "Crafting intuitive user interfaces, high-fidelity wireframes, and design systems focused on user-friendly navigation.",
    tags: ["Figma", "Canva", "Wireframing", "Interactive Prototyping", "Design Systems"],
  },
  {
    num: "03",
    name: "Zoho CRM & Business Automation",
    desc: "Automating repetitive business processes, building custom Zoho CRM integrations, and writing Deluge automation scripts.",
    tags: ["Zoho Ecosystem", "Deluge Scripting", "Workflow Automation", "Process Optimization"],
  },
  {
    num: "04",
    name: "AI Automation & Productivity",
    desc: "Leveraging cutting-edge AI workflow tools, prompt engineering, and API automations to accelerate development and business tasks.",
    tags: ["AI Workflow Tools", "Automated Pipelines", "Productivity Systems", "API Webhooks"],
  },
  {
    num: "05",
    name: "Game & 3D Prototyping",
    desc: "Exploring 3D modeling and interactive environments for games and digital visual experiences.",
    tags: ["Blender", "Unity", "Unreal Engine", "Game Design Basics"],
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
const projects = [
  {
    number: "01",
    name: "RomClub",
    category: "Android Application",
    desc: "A dedicated Android platform designed to centralize information, modules, and recovery guides for custom ROM enthusiasts and power users.",
    tools: "Android Studio, Java, XML, Firebase",
    live: "https://github.com/vasimsamtani",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
    ],
  },
  {
    number: "02",
    name: "The EST Café",
    category: "Android & Hospitality",
    desc: "An intuitive mobile café app showcasing digital menus, ambiance previews, customer reservations, and brand engagement.",
    tools: "Android Studio, Java, XML, Firebase",
    live: "https://github.com/vasimsamtani",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
    ],
  },
];

function ProjectCard({
  project,
  index,
  totalCards,
}: {
  project: (typeof projects)[number];
  index: number;
  totalCards: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.02;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

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
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}