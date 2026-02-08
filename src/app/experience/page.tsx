"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Brain, Code2, Calendar, MapPin, CheckCircle2, Briefcase, ArrowUpRight } from "lucide-react";

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "AI/ML Systems Engineer",
    company: "IIT Madras",
    location: "Chennai, India",
    period: "Oct 2025 – Present",
    type: "Full-time",
    description:
      "Creating AI-driven solutions for early dyslexia screening and learning support, converting research into practical, deployable ML systems that can be used in real-world educational environments.",
    icon: <Brain className="w-5 h-5" />,
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    achievements: [
      "Architecting end-to-end ML pipelines covering data preprocessing, feature extraction, model training, and evaluation",
      "Designing feature engineering workflows to identify meaningful indicators for screening and learning analysis",
      "Deploying trained models as FastAPI services for real-time application use",
      "Performing model validation, performance tuning, and optimization to improve reliability and accuracy",
      "Collaborating with researchers, educators, and domain experts to align AI outputs with practical learning needs",
    ],
  },
  {
    id: 2,
    title: "PDI Analyst",
    company: "Deloitte",
    location: "Coimbatore, India",
    period: "Sep 2024 – Sep 2025",
    type: "Full-time",
    description:
      "Worked on enterprise cloud integrations and internal automation tools, gaining hands-on experience in backend development, system integration, and cloud deployment.",
    icon: <Code2 className="w-5 h-5" />,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    achievements: [
      "Assisted in building Azure workflows using Function Apps, Logic Apps, and Data Factory",
      "Contributed to developing an internal automation tool with Spring Boot and React.js",
      "Supported API integrations between enterprise systems",
      "Used GitHub for version control and structured deployment practices",
      "Collaborated with cross-functional teams on system implementation",
      "Gained exposure to enterprise cloud architecture and production environments",
    ],
  },
];

const ExperienceCard = ({ item, index }: { item: ExperienceItem; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [60, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, y }}
      className="group"
    >
      <div className="relative">
        {/* Gradient border effect */}
        <div className={`absolute -inset-[1px] bg-gradient-to-r ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500`} />
        <div className={`absolute -inset-[1px] bg-gradient-to-r ${item.gradient} rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
        
        <div className="relative bg-card/95 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-border/50 group-hover:border-transparent transition-all duration-500">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} p-[1px]`}>
                <div className="w-full h-full bg-background rounded-xl flex items-center justify-center text-foreground">
                  {item.icon}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${item.gradient} font-semibold`}>
                    {item.company}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            </div>
            
            {/* Period badge */}
            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-3 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r ${item.gradient} text-white shadow-lg`}>
                {item.type}
              </span>
            </div>
          </div>
          
          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 mb-5 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{item.period}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>{item.location}</span>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-muted-foreground leading-relaxed mb-6 text-sm lg:text-base">
            {item.description}
          </p>
          
          {/* Achievements */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-primary" />
              Impact Highlights
            </h4>
            <ul className="grid gap-2">
              {item.achievements.map((achievement, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 text-transparent bg-clip-text`} style={{ color: 'hsl(var(--primary))' }} />
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-background dark:bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm mb-6"
            >
              <Briefcase className="w-4 h-4" />
              Career Journey
            </motion.div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">Experience</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Building impactful solutions through AI/ML engineering and enterprise software development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Cards */}
      <section className="pb-20 relative">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
          {experiences.map((item, index) => (
            <ExperienceCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
