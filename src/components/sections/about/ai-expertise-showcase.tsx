"use client";

import { motion } from "framer-motion";
import { Brain, Sparkles, Zap, Network, Bot, Eye, MessageSquare, BarChart3 } from "lucide-react";

const aiExpertise = [
  {
    id: 1,
    title: "Large Language Models",
    description: "Building applications with GPT-4, Claude, and open-source LLMs for text generation, analysis, and automation.",
    icon: MessageSquare,
    color: "from-purple-500 to-pink-500",
    skills: ["GPT-4", "Claude", "LLaMA", "Fine-tuning", "Prompt Engineering"],
  },
  {
    id: 2,
    title: "Computer Vision",
    description: "Developing image recognition, object detection, and visual AI systems for real-world applications.",
    icon: Eye,
    color: "from-blue-500 to-cyan-500",
    skills: ["OpenCV", "YOLO", "Image Classification", "OCR", "Segmentation"],
  },
  {
    id: 3,
    title: "Neural Networks",
    description: "Designing and training deep learning models for complex pattern recognition and prediction tasks.",
    icon: Network,
    color: "from-green-500 to-emerald-500",
    skills: ["TensorFlow", "PyTorch", "Keras", "CNNs", "Transformers"],
  },
  {
    id: 4,
    title: "AI Agents & Automation",
    description: "Creating autonomous AI agents that can reason, plan, and execute complex multi-step tasks.",
    icon: Bot,
    color: "from-orange-500 to-yellow-500",
    skills: ["LangChain", "AutoGPT", "CrewAI", "RAG", "Tool Use"],
  },
  {
    id: 5,
    title: "Generative AI",
    description: "Building creative AI applications for content generation, code synthesis, and artistic creation.",
    icon: Sparkles,
    color: "from-rose-500 to-red-500",
    skills: ["Stable Diffusion", "DALL-E", "Code Generation", "Audio AI"],
  },
  {
    id: 6,
    title: "ML Ops & Deployment",
    description: "Implementing end-to-end ML pipelines for training, deployment, and monitoring of AI systems.",
    icon: BarChart3,
    color: "from-indigo-500 to-violet-500",
    skills: ["MLflow", "Kubeflow", "Model Serving", "A/B Testing", "Monitoring"],
  },
];

export const AIExpertiseShowcase = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Artificial Intelligence{" "}
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Capabilities
            </span>
          </h2>
          <p className="text-xl text-muted-foreground whitespace-nowrap">
            Specialized in cutting-edge AI technologies, from large language models to computer vision
          </p>
        </motion.div>

        {/* AI Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiExpertise.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 h-full overflow-hidden">
                {/* Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Animated Corner Glow */}
                <motion.div
                  className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${item.color} blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="relative z-10 text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Skills Tags */}
                <div className="relative z-10 flex flex-wrap gap-2">
                  {item.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + skillIndex * 0.05 }}
                      className="px-2.5 py-1 rounded-lg bg-secondary/50 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Bottom Gradient Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} origin-left`}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
