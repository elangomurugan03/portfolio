"use client";

import { motion } from "framer-motion";
import { useState, ReactNode } from "react";

interface Tab {
  id: string;
  label: string;
  title: string;
  description: ReactNode;
  tags: string[];
}

const tabs: Tab[] = [
  {
    id: "vision",
    label: "About Me",
    title: "About Me",
    description: (
      <>
        I&apos;m an AI/ML systems engineer at IIT Madras in the Dept of Data Science &amp; AI, working under{" "}
        <a href="https://arunkt.wixsite.com/homepage" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
          Prof. Arun K. Tangirala
        </a>
        . My work focuses on building end-to-end ML pipelines and deploying models via FastAPI, including a Capgemini-sponsored initiative with the{" "}
        <a href="https://www.mdachennai.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
          Madras Dyslexia Association
        </a>
        . Previously, I was a PDI Analyst at Deloitte, developing automation solutions using Azure Function Apps, Logic Apps, and Data Factory. I&apos;m passionate about building production-ready AI systems that create real-world impact.
      </>
    ),
    tags: ["IIT Madras", "Machine Learning", "FastAPI", "Azure", "Production AI"],
  },
  {
    id: "expertise",
    label: "Expertise",
    title: "Expertise",
    description:
      "With hands-on experience in ML pipelines, system integration, and cloud-enabled deployment, I develop robust AI solutions that move from experimentation to production environments.",
    tags: ["End-to-End ML Pipelines", "Model Deployment", "System Integration"],
  },
  {
    id: "innovation",
    label: "Innovation",
    title: "Innovation",
    description:
      "Continuously exploring emerging AI methods and deployment practices, I apply modern tools and scalable architectures to create solutions that extend beyond research into real-world applications.",
    tags: ["Computer Vision", "AI Deployment", "Scalable ML Systems"],
  },
];

export const ModernAboutSection = () => {
  const [activeTab, setActiveTab] = useState("vision");

  const activeContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="py-8 relative overflow-visible">
      {/* Background Decorations */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full mx-auto px-4 md:px-6 overflow-visible">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            <span>AI/ML Systems</span>{" "}
            <span className="bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent">
              Engineer
            </span>
          </h1>
          <p className="text-xl text-muted-foreground whitespace-nowrap">
            Crafting intelligent systems that push the boundaries of what&apos;s possible with AI
          </p>
        </motion.div>

        {/* Profile Card Container */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-lg md:max-w-full mx-auto"
          >
            {/* Profile Card */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-4 md:p-8 shadow-2xl">
              {/* Profile Header */}
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-8 text-center md:text-left">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl md:text-3xl font-bold text-white">EM</span>
                  </div>
                </div>

                {/* Name & Role */}
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Elango Murugan</h2>
                  <div className="flex items-center justify-center md:justify-start">
                    <span className="text-primary font-medium">Project Associate @ IIT Madras</span>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex flex-wrap space-x-1 bg-muted/50 rounded-xl p-1 mb-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-primary/80 hover:text-primary-foreground"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-8 bg-gradient-to-br from-muted/30 to-card/50 rounded-xl p-4 md:p-6 border border-border/50 relative overflow-hidden"
              >
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl" />
                
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {activeContent?.title}
                  </h3>
                  <p className="text-foreground/90 leading-relaxed">
                    {activeContent?.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {activeContent?.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-lg border border-border/50 bg-background/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
