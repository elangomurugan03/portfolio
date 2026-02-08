"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Target,
  Layers,
  Trophy,
  Code2,
  TrendingUp,
  Sparkles,
  Cpu,
  Zap,
} from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "GenAI Knowledge Intelligence System",
    category: "Generative AI / LLM Systems / Applied AI",
    icon: <Sparkles className="w-6 h-6" />,
    overview:
      "Designed an AI-powered knowledge system that converts large volumes of unstructured documents into a searchable, intelligent interface using embeddings and large language models. The system enables semantic retrieval and context-aware responses rather than simple keyword matching.",
    objective:
      "Build a scalable AI architecture that allows users to query complex document collections using natural language while maintaining response relevance, latency control, and modular deployment.",
    architecture: [
      "Document ingestion pipeline for preprocessing and chunking text",
      "Embedding generation layer to convert content into vector representations",
      "Vector database for semantic retrieval",
      "LLM inference layer to generate context-aware answers",
      "API layer to integrate retrieval + generation into an intelligent assistant",
    ],
    achievements: [
      "Implemented embedding-based semantic search",
      "Designed modular retrieval + generation pipeline",
      "Optimized prompt structure for context retention",
      "Reduced hallucination by grounding responses in retrieved data",
      "Structured scalable inference architecture",
    ],
    technologies:
      "Python for backend orchestration, LLM APIs for generative responses, vector databases for semantic search, NLP preprocessing pipelines, and API services for inference integration.",
    impact:
      "Demonstrates real-world GenAI system design, showcasing how LLMs can be integrated into structured pipelines for knowledge intelligence rather than standalone prompt usage.",
    techStack: ["Python", "LLM APIs", "Vector DB", "NLP", "FastAPI"],
  },
  {
    id: 2,
    title: "Production ML Pipeline & Deployment Framework",
    category: "Machine Learning Engineering / MLOps / Applied AI",
    icon: <Cpu className="w-6 h-6" />,
    overview:
      "Engineered a reusable ML pipeline framework that transforms raw datasets into deployable models through structured feature engineering, training, evaluation, and inference service integration.",
    objective:
      "Bridge the gap between ML experimentation and deployable systems by designing modular pipelines that support reproducibility, scalability, and production-ready model serving.",
    architecture: [
      "Data preprocessing & feature engineering layer",
      "Model training & evaluation module",
      "Experiment tracking workflow",
      "Model packaging and serialization",
      "API-based inference service for deployment",
    ],
    achievements: [
      "Built reusable feature engineering workflows",
      "Structured consistent model training pipelines",
      "Implemented evaluation metrics and validation workflows",
      "Designed API inference architecture",
      "Reduced deployment friction for ML models",
    ],
    technologies:
      "Python for ML workflows, Scikit-learn and Pandas for model development, FastAPI for inference APIs, and containerized deployment structure.",
    impact:
      "Showcases ML systems engineering capability, proving ability to move from raw data → model → deployment, which is critical for real-world AI applications.",
    techStack: ["Python", "Scikit-learn", "Pandas", "FastAPI", "Docker"],
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 border-b border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,120,120,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-400 font-medium text-sm mb-6">
              <FileText className="w-4 h-4" />
              Case Studies
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Deep Dives into <span className="text-gray-400">AI/ML Systems</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Detailed technical breakdowns of end-to-end AI/ML projects,
              showcasing architecture decisions, implementation approaches, and real-world impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative"
              >
                {/* Case Study Number */}
                <div className="absolute -left-4 top-0 text-8xl font-bold text-white/[0.03] select-none hidden lg:block">
                  0{study.id}
                </div>

                <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-950/80 border border-white/10 rounded-2xl overflow-hidden">
                  {/* Header */}
                  <div className="p-8 border-b border-white/10">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-gray-400">
                        {study.icon}
                      </div>
                      <div className="flex-1">
                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 block">
                          {study.category}
                        </span>
                        <h2 className="text-2xl lg:text-3xl font-bold text-white">
                          {study.title}
                        </h2>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-8">
                    {/* Overview */}
                    <div>
                      <p className="text-gray-400 leading-relaxed text-base">
                        {study.overview}
                      </p>
                    </div>

                    {/* Objective */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                          <Target className="w-4 h-4 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">Project Objective</h3>
                      </div>
                      <p className="text-gray-400 leading-relaxed pl-11">
                        {study.objective}
                      </p>
                    </div>

                    {/* Architecture */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                          <Layers className="w-4 h-4 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">System Architecture</h3>
                      </div>
                      <ul className="space-y-2 pl-11">
                        {study.architecture.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-400">
                            <span className="mt-2 w-1.5 h-1.5 bg-gray-600 rounded-full flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                          <Trophy className="w-4 h-4 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">Key Achievements</h3>
                      </div>
                      <ul className="space-y-2 pl-11">
                        {study.achievements.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-400">
                            <Zap className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                          <Code2 className="w-4 h-4 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">Technologies & Implementation</h3>
                      </div>
                      <p className="text-gray-400 leading-relaxed pl-11 mb-4">
                        {study.technologies}
                      </p>
                      <div className="flex flex-wrap gap-2 pl-11">
                        {study.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 bg-white/5 text-gray-400 rounded-lg text-sm font-medium border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Impact */}
                    <div className="pt-6 border-t border-white/10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                          <TrendingUp className="w-4 h-4 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">Impact & Results</h3>
                      </div>
                      <p className="text-gray-400 leading-relaxed pl-11">
                        {study.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
