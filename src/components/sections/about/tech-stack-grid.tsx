"use client";

import { motion } from "framer-motion";
import { Brain, Cog, Code, Cloud, Database, Sparkles } from "lucide-react";

const techCategories = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "from-violet-500 to-purple-600",
    bgGlow: "violet",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    title: "ML Engineering",
    icon: Cog,
    color: "from-emerald-500 to-teal-600",
    bgGlow: "emerald",
    skills: [
      "End-to-End Pipelines",
      "Data Preprocessing",
      "Model Inference APIs",
      "FastAPI Deployment",
      "Performance Tuning",
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Code,
    color: "from-blue-500 to-cyan-600",
    bgGlow: "blue",
    skills: [
      "Python",
      "TensorFlow / Keras",
      "PyTorch",
      "Scikit-learn",
      "Pandas & NumPy",
      "OpenCV",
    ],
  },
  {
    title: "Generative AI",
    icon: Sparkles,
    color: "from-rose-500 to-pink-600",
    bgGlow: "rose",
    skills: [
      "LLM APIs",
      "Prompt Engineering",
      "Embeddings",
      "Semantic Search",
      "RAG Systems",
    ],
  },
  {
    title: "Data & Analytics",
    icon: Database,
    color: "from-amber-500 to-orange-600",
    bgGlow: "amber",
    skills: [
      "SQL",
      "Data Cleaning",
      "Dataset Preparation",
      "Data Visualization",
      "Jupyter Notebook",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "from-slate-500 to-gray-600",
    bgGlow: "slate",
    skills: [
      "Azure Functions",
      "Azure Data Factory",
      "Docker",
      "Git & GitHub",
      "API Integration",
    ],
  },
];

export const TechStackGrid = () => {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Skills &{" "}
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building production-ready AI systems with modern tools and frameworks
          </p>
        </motion.div>

        {/* Tech Categories Grid - 3x2 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * categoryIndex, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group"
            >
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-card to-card/80 border border-border/50 hover:border-primary/40 transition-all duration-500 h-full overflow-hidden">
                {/* Background Glow */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br ${category.color} blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />
                
                {/* Category Header */}
                <div className="relative z-10 flex items-center gap-4 mb-5">
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg shadow-black/20`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="relative z-10 flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + skillIndex * 0.04 }}
                      className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-primary/10 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Bottom Accent Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${category.color} origin-left`}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
