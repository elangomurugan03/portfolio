"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PageTransition } from "@/components/page-transition";
import { ModernAboutSection } from "@/components/sections/about/modern-about-section";
import { CertificationsShowcase } from "@/components/sections/about/certifications-showcase";
import { TechStackGrid } from "@/components/sections/about/tech-stack-grid";
import { AIExpertiseShowcase } from "@/components/sections/about/ai-expertise-showcase";

// CTA Section Component
const CTASection = () => (
  <div className="py-6 w-full bg-gradient-to-br from-background via-background to-muted/20">
    <div className="max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl border border-primary/20"
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Build Something{" "}
            <span className="text-primary">Amazing?</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mx-auto mb-8">
            I&apos;m always open to working on exciting machine learning and AI projects, turning ideas into intelligent, real-world systems. 
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-blue-500 text-primary-foreground px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Let&apos;s Collaborate
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  </div>
);

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <main className="flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
          <div className="max-w-7xl w-full">
            {/* Modern About Section */}
            <div className="pt-6">
              <ModernAboutSection />
            </div>

            {/* Certifications Showcase */}
            <div className="pt-2">
              <CertificationsShowcase />
            </div>

            {/* Tech Stack Grid */}
            <div id="tech-stack-section" className="pt-4">
              <TechStackGrid />
            </div>

            {/* AI Expertise Showcase */}
            <AIExpertiseShowcase />

            {/* CTA Section */}
            <CTASection />
          </div>
        </main>
      </div>
    </PageTransition>
  );
}
