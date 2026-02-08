"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, ExternalLink } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-SAA-C03",
    icon: "☁️",
    color: "from-orange-400 to-yellow-500",
    skills: ["Cloud Architecture", "EC2", "S3", "Lambda", "CloudFormation"],
    verified: true,
  },
  {
    id: 2,
    title: "Microsoft Azure Developer Associate",
    issuer: "Microsoft",
    date: "2024",
    credentialId: "AZ-204",
    icon: "🔷",
    color: "from-blue-400 to-cyan-500",
    skills: ["Azure Functions", "Cosmos DB", "App Service", "DevOps"],
    verified: true,
  },
  {
    id: 3,
    title: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    date: "2023",
    credentialId: "GCP-PCD",
    icon: "🌐",
    color: "from-green-400 to-emerald-500",
    skills: ["GKE", "Cloud Run", "BigQuery", "Cloud Functions"],
    verified: true,
  },
  {
    id: 4,
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2023",
    credentialId: "TF-DEV",
    icon: "🧠",
    color: "from-orange-500 to-red-500",
    skills: ["Deep Learning", "Neural Networks", "Computer Vision", "NLP"],
    verified: true,
  },
];

export const CertificationsShowcase = () => {
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
            Certifications{" "}
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              & Courses
            </span>
          </h2>
          <p className="text-xl text-muted-foreground whitespace-nowrap">
            Continuous learning and professional development across multiple domains
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Header */}
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl shadow-lg`}
                    >
                      {cert.icon}
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                  
                  {cert.verified && (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20"
                    >
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span className="text-xs text-green-500 font-medium">Verified</span>
                    </motion.div>
                  )}
                </div>

                {/* Details */}
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground relative z-10">
                  <span>Issued: {cert.date}</span>
                  <span>•</span>
                  <span>ID: {cert.credentialId}</span>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {cert.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + skillIndex * 0.05 }}
                      className="px-3 py-1 rounded-lg bg-secondary/50 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Hover Accent */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${cert.color}`}
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
