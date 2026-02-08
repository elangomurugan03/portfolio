"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiPython,
  SiTensorflow,
  SiFastapi,
  SiOpencv,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiKeras,
} from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";
import { Brain, Sparkles, ExternalLink, Github, Lock, Eye, FileText, Cpu, Database, Zap, X, Target, Trophy, Code2, AlertTriangle, TrendingUp } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Real-Time Accident Detection System",
    des: "A deep learning-based computer vision system that detects road accidents from video frames using motion analysis and CNN models for event detection.",
    iconLists: ["Python", "TensorFlow", "OpenCV"],
    link: "#",
    repo: "#",
    ndaNote: "",
    linksEnabled: false,
    fullDescription: "The system processes video frames through a preprocessing pipeline, extracts spatial-temporal features, and uses convolutional neural networks to classify accident scenarios. Inference logic is structured to simulate near real-time event detection.",
    tags: ["Computer Vision", "Deep Learning", "Safety Systems"],
    objective: "Develop a computer vision system capable of detecting road accidents from video streams by identifying abnormal motion patterns and collision events using deep learning models.",
    achievements: [
      "Designed CNN architecture optimized for event detection",
      "Built frame extraction and preprocessing workflows",
      "Applied data augmentation to improve model robustness",
      "Evaluated performance across varied lighting and motion conditions",
      "Structured inference pipeline for real-time simulation"
    ],
    techDescription: "Python used for backend ML processing. TensorFlow for model training and optimization. OpenCV for video frame handling and image processing. NumPy for numerical operations.",
    impact: "Demonstrates AI-driven monitoring for safety scenarios and showcases deep learning applied to real-time computer vision systems.",
    confidential: false,
  },
  {
    id: 2,
    title: "GenAI Knowledge Assistant",
    des: "An intelligent assistant that uses large language models and embeddings to transform unstructured documents into a searchable knowledge system.",
    iconLists: ["Python", "LLM APIs", "Vector DB"],
    link: "#",
    repo: "#",
    ndaNote: "",
    linksEnabled: false,
    fullDescription: "The pipeline includes document ingestion, chunking, embedding generation, and semantic search retrieval. LLM APIs are used to generate context-aware responses based on retrieved knowledge.",
    tags: ["Generative AI", "LLM Systems", "Semantic Search"],
    objective: "Build an AI-powered assistant that transforms unstructured documents into a searchable knowledge system using semantic embeddings and large language models.",
    achievements: [
      "Implemented embedding-based semantic search",
      "Built document preprocessing and chunking pipelines",
      "Designed LLM response generation layer",
      "Structured modular API for scalable inference",
      "Optimized prompt structure for better contextual output"
    ],
    techDescription: "Python for backend workflows, LLM APIs for generative responses, vector databases for semantic retrieval, and NLP pipelines for document processing.",
    impact: "Enables intelligent knowledge retrieval and demonstrates practical GenAI system integration beyond basic prompt usage.",
    confidential: false,
  },
  {
    id: 3,
    title: "ML Feature Engineering Pipeline",
    des: "Reusable data processing workflows that transform raw datasets into model-ready inputs using scalable feature engineering techniques.",
    iconLists: ["Python", "Pandas", "NumPy"],
    link: "#",
    repo: "#",
    ndaNote: "",
    linksEnabled: false,
    fullDescription: "The pipeline includes data cleaning, normalization, missing value handling, categorical encoding, and feature transformation modules.",
    tags: ["Machine Learning Engineering", "Data Pipeline", "Feature Engineering"],
    objective: "Create reusable workflows that transform raw datasets into structured, model-ready features using scalable preprocessing techniques.",
    achievements: [
      "Designed modular preprocessing architecture",
      "Built reusable feature transformation workflows",
      "Implemented normalization and outlier handling",
      "Structured consistent dataset preparation pipelines"
    ],
    techDescription: "Python, Pandas, and NumPy for structured data processing.",
    impact: "Improves ML experimentation efficiency and standardizes data preparation across models.",
    confidential: false,
  },
  {
    id: 4,
    title: "ML Model Inference API",
    des: "A lightweight API service that deploys trained ML models for real-time predictions with structured inference pipelines.",
    iconLists: ["Python", "FastAPI"],
    link: "#",
    repo: "#",
    ndaNote: "",
    linksEnabled: false,
    fullDescription: "A REST API serves inference requests, loads models dynamically, processes inputs, and returns predictions through structured endpoints.",
    tags: ["ML Deployment", "MLOps", "API Development"],
    objective: "Deploy trained machine learning models as API services for real-time prediction workflows.",
    achievements: [
      "Built REST inference endpoints",
      "Implemented model loading and prediction pipelines",
      "Designed scalable request-response architecture",
      "Structured error handling and validation logic"
    ],
    techDescription: "Python with FastAPI for high-performance API serving.",
    impact: "Demonstrates ML deployment readiness and production-style inference system design.",
    confidential: false,
  },
  {
    id: 5,
    title: "NLP Text Classification System",
    des: "A natural language processing model that classifies text using feature extraction, vectorization, and supervised ML techniques.",
    iconLists: ["Python", "Scikit-learn", "NLP"],
    link: "#",
    repo: "#",
    ndaNote: "",
    linksEnabled: false,
    fullDescription: "Includes text preprocessing, tokenization, vectorization, and model training for classification tasks.",
    tags: ["Natural Language Processing", "Machine Learning", "Text Analytics"],
    objective: "Develop a machine learning system to classify textual data into categories using feature extraction and supervised learning.",
    achievements: [
      "Implemented text cleaning and tokenization",
      "Used vectorization techniques for feature extraction",
      "Trained and evaluated classification models",
      "Handled noisy and unstructured textual data"
    ],
    techDescription: "Python, NLP techniques, Scikit-learn.",
    impact: "Showcases end-to-end NLP pipeline design and supervised ML implementation.",
    confidential: false,
  },
  {
    id: 6,
    title: "Deep Learning Image Classifier",
    des: "A CNN-based image classification model trained with augmentation and architecture tuning for multi-class recognition tasks.",
    iconLists: ["Python", "TensorFlow", "Keras"],
    link: "#",
    repo: "#",
    ndaNote: "",
    linksEnabled: false,
    fullDescription: "The system processes image inputs, applies augmentation, trains CNN architectures, and evaluates performance across classes.",
    tags: ["Deep Learning", "Computer Vision", "Image Classification"],
    objective: "Design a CNN-based model for multi-class image classification.",
    achievements: [
      "Applied data augmentation for generalization",
      "Tuned CNN architecture and hyperparameters",
      "Evaluated multi-class classification performance",
      "Structured reproducible training workflows"
    ],
    techDescription: "Python, TensorFlow/Keras.",
    impact: "Demonstrates deep learning model design for visual recognition tasks.",
    confidential: false,
  },
];

const getTechIcon = (tech: string) => {
  const icons: { [key: string]: React.ReactNode } = {
    Python: <SiPython className="w-4 h-4" />,
    TensorFlow: <SiTensorflow className="w-4 h-4" />,
    FastAPI: <SiFastapi className="w-4 h-4" />,
    OpenCV: <SiOpencv className="w-4 h-4" />,
    "Scikit-learn": <SiScikitlearn className="w-4 h-4" />,
    Pandas: <SiPandas className="w-4 h-4" />,
    NumPy: <SiNumpy className="w-4 h-4" />,
    Keras: <SiKeras className="w-4 h-4" />,
    NLP: <FileText className="w-4 h-4" />,
    "LLM APIs": <TbBrandOpenai className="w-4 h-4" />,
    "Vector DB": <Database className="w-4 h-4" />,
  };
  return icons[tech] || <div className="w-4 h-4 bg-muted rounded" />;
};

const getProjectIcon = (id: number) => {
  const icons: { [key: number]: React.ReactNode } = {
    1: <Eye className="w-8 h-8" />,            // Accident Detection (Computer Vision)
    2: <Sparkles className="w-8 h-8" />,       // GenAI Knowledge Assistant
    3: <Database className="w-8 h-8" />,       // Feature Engineering Pipeline
    4: <Zap className="w-8 h-8" />,            // ML Inference API
    5: <FileText className="w-8 h-8" />,       // NLP Text Classification
    6: <Brain className="w-8 h-8" />,          // Deep Learning Image Classifier
  };
  return icons[id] || <Brain className="w-8 h-8" />;
};

const getProjectGradient = (id: number) => {
  const gradients: { [key: number]: string } = {
    1: "from-rose-500 to-pink-600",              // Accident Detection - Rose/Pink
    2: "from-emerald-500 to-green-600",          // GenAI - Emerald/Green
    3: "from-cyan-500 to-blue-600",              // Feature Engineering - Cyan/Blue
    4: "from-violet-500 to-purple-600",          // Inference API - Violet/Purple
    5: "from-teal-500 to-cyan-600",              // NLP - Teal/Cyan
    6: "from-indigo-500 to-blue-600",            // Image Classifier - Indigo/Blue
  };
  return gradients[id] || "from-slate-400/80 to-gray-500/80";
};

const getProjectTags = (id: number) => {
  const tags: { [key: number]: string[] } = {
    1: ["Deep Learning", "Safety"],
    2: ["GenAI", "LLM"],
    3: ["Data", "Pipeline"],
    4: ["MLOps", "API"],
    5: ["NLP", "ML"],
    6: ["Vision", "CNN"],
  };
  return tags[id] || [];
};

interface Project {
  id: number;
  title: string;
  des: string;
  iconLists: string[];
  link: string;
  repo: string;
  ndaNote: string;
  linksEnabled: boolean;
  fullDescription: string;
  tags: string[];
  objective: string;
  achievements: string[];
  techDescription: string;
  impact: string;
  confidential: boolean;
}

// Project Detail Modal Component
const ProjectModal = ({ 
  project, 
  isOpen, 
  onClose 
}: { 
  project: Project | null; 
  isOpen: boolean; 
  onClose: () => void;
}) => {
  if (!project) return null;
  
  const gradient = getProjectGradient(project.id);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
          
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900/95 via-gray-900/98 to-black/95 border border-white/10 rounded-3xl shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 pr-12">
                {project.title}
              </h2>

              {/* Short Description */}
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {project.fullDescription}
              </p>

              {/* Banner with Icon */}
              <div className={`relative h-48 md:h-56 bg-gradient-to-br ${gradient} rounded-2xl mb-6 flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
                <div className="relative z-10 w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white">
                  {getProjectIcon(project.id)}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 bg-gradient-to-r ${gradient} bg-opacity-20 text-white rounded-full text-sm font-medium border border-white/20`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Project Objective */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Target className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Project Objective</h3>
                </div>
                <p className="text-gray-300 leading-relaxed pl-12">
                  {project.objective}
                </p>
              </div>

              {/* Key Achievements */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-amber-500/20 rounded-lg">
                    <Trophy className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Key Achievements</h3>
                </div>
                <ul className="space-y-3 pl-12">
                  {project.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <span className="mt-2 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies & Implementation */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-500/20 rounded-lg">
                    <Code2 className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Technologies & Implementation</h3>
                </div>
                <p className="text-gray-300 leading-relaxed pl-12 mb-4">
                  {project.techDescription}
                </p>
                <div className="flex flex-wrap gap-2 pl-12">
                  {project.iconLists.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300"
                    >
                      {getTechIcon(tech)}
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Confidentiality Notice */}
              {project.confidential && (
                <div className="mb-8 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <p className="text-amber-300 text-sm">
                      Can only share small parts due to NDA restrictions
                    </p>
                  </div>
                </div>
              )}

              {/* Impact & Results */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Impact & Results</h3>
                </div>
                <p className="text-gray-300 leading-relaxed pl-12">
                  {project.impact}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/10">
                {project.linksEnabled ? (
                  <>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${gradient} text-white rounded-xl font-semibold hover:opacity-90 transition-opacity`}
                    >
                      <ExternalLink className="w-5 h-5" />
                      View Live Demo
                    </a>
                    {project.repo && project.repo !== "#" && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-colors border border-white/20"
                      >
                        <Github className="w-5 h-5" />
                        View on GitHub
                      </a>
                    )}
                  </>
                ) : (
                  <div className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/5 text-gray-400 rounded-xl font-semibold cursor-not-allowed border border-white/10">
                    <Cpu className="w-5 h-5" />
                    Links Coming Soon
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ProjectCard = ({ project, onViewDetails }: { project: Project; onViewDetails: () => void }) => {
  const gradient = getProjectGradient(project.id);
  const categoryTags = getProjectTags(project.id);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="group relative bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 h-[420px] flex flex-col"
    >
      {/* Project Header with Centered Icon */}
      <div className={`h-48 bg-gradient-to-br ${gradient} relative overflow-hidden flex-shrink-0`}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }} />
        </div>
        
        {/* Animated Floating Dots */}
        <motion.div 
          className="absolute top-8 left-8 w-2 h-2 bg-white/40 rounded-full"
          animate={{ y: [0, -8, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-12 left-16 w-1.5 h-1.5 bg-white/30 rounded-full"
          animate={{ y: [0, -6, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div 
          className="absolute top-6 right-12 w-2 h-2 bg-white/35 rounded-full"
          animate={{ y: [0, -10, 0], opacity: [0.35, 0.7, 0.35] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-16 right-8 w-1.5 h-1.5 bg-white/40 rounded-full"
          animate={{ y: [0, -5, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />
        <motion.div 
          className="absolute top-20 right-20 w-1 h-1 bg-white/50 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
        />
        
        {/* Decorative Lines/Shapes */}
        <div className="absolute top-10 left-10 w-12 h-12 border border-white/10 rounded-lg rotate-12 group-hover:rotate-0 transition-transform duration-500" />
        <div className="absolute bottom-14 left-6 w-8 h-8 border border-white/15 rounded-md -rotate-6 group-hover:rotate-6 transition-transform duration-500" />
        <div className="absolute top-8 right-6 w-10 h-10 border border-white/10 rounded-lg rotate-45 group-hover:rotate-[55deg] transition-transform duration-500" />
        
        {/* Centered Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:bg-white/30 group-hover:shadow-xl transition-all duration-300"
          >
            {getProjectIcon(project.id)}
          </motion.div>
        </div>
        
        {/* Category Tags at Bottom */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 flex-wrap justify-center">
          {categoryTags.map((tag, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="px-4 py-1.5 bg-black/40 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20 group-hover:bg-black/50 transition-colors"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-foreground leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-1">{project.title}</h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
          {project.des}
        </p>

        {/* Tech Stack - Highlighted */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.iconLists.slice(0, 3).map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 rounded-full text-xs font-medium border border-primary/20 text-primary hover:bg-primary/20 transition-colors cursor-default"
            >
              <span className="text-primary">{getTechIcon(tech)}</span>
              <span>{tech}</span>
            </motion.div>
          ))}
          {project.iconLists.length > 3 && (
            <div className="px-3 py-1.5 bg-muted/60 rounded-full text-xs font-medium text-muted-foreground border border-border/50">
              +{project.iconLists.length - 3} more
            </div>
          )}
        </div>

        {/* NDA Note */}
        {project.ndaNote && (
          <div className="flex items-center gap-2 text-xs text-amber-600 dark:text-amber-400 mb-4">
            <Lock className="w-3 h-3" />
            <span>{project.ndaNote}</span>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between pt-3 mt-auto border-t border-border/30 bg-black/5 -mx-5 px-5 pb-1 -mb-5 rounded-b-2xl">
          <motion.button
            onClick={onViewDetails}
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 text-primary font-medium text-sm hover:underline transition-all"
          >
            View Details
          </motion.button>
          <motion.div
            whileHover={{ scale: 1.15, rotate: -10 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors cursor-pointer"
            onClick={onViewDetails}
          >
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Featured Work
            </motion.div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-500">Projects</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              A collection of projects showcasing my skills in AI/ML, deep learning, and intelligent system development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <AnimatePresence>
              {projectsData.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.5, ease: "easeOut" }
                    }
                  }}
                >
                  <ProjectCard 
                    project={project} 
                    onViewDetails={() => handleViewDetails(project)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </main>
  );
}
