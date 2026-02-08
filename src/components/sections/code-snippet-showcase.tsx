"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import Editor from "@monaco-editor/react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Copy, 
  Check 
} from "lucide-react";
import { 
  SiTypescript, 
  SiPython, 
  SiReact
} from "react-icons/si";
import { TbBrain, TbServer } from "react-icons/tb";

interface CodeSnippet {
  id: number;
  title: string;
  description: string;
  language: string;
  tags: string[];
  icon: React.ComponentType<{ className?: string }>;
  code: string;
}

const codeSnippets: CodeSnippet[] = [
  {
    id: 1,
    title: "Advanced RAG Pipeline with Vector Search & LLM Orchestration",
    description: "Production-grade Retrieval-Augmented Generation system with semantic chunking, hybrid search, and multi-agent workflows",
    language: "typescript",
    tags: ["RAG", "Vector DB", "LangChain", "OpenAI", "Pinecone", "Redis"],
    icon: TbBrain,
    code: `// Advanced RAG Pipeline with Multi-Agent Orchestration
import { OpenAI } from "openai";
import { PineconeStore } from "@langchain/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { createClient } from "redis";
import { z } from "zod";

interface RAGConfig {
  vectorStore: PineconeStore;
  llm: OpenAI;
  cache: ReturnType<typeof createClient>;
  embeddingModel: OpenAIEmbeddings;
}

class AdvancedRAGPipeline {
  private config: RAGConfig;
  private semanticRouter: SemanticRouter;
  private queryRewriter: QueryRewriter;
  
  constructor(config: RAGConfig) {
    this.config = config;
    this.semanticRouter = new SemanticRouter(config.embeddingModel);
    this.queryRewriter = new QueryRewriter(config.llm);
  }

  async processQuery(query: string, context?: AgentContext): Promise<RAGResponse> {
    // Multi-step query processing with semantic routing
    const routingResult = await this.semanticRouter.route(query);
    const rewrittenQueries = await this.queryRewriter.expandQuery(query, routingResult);
    
    // Parallel retrieval with fusion scoring
    const retrievalPromises = rewrittenQueries.map(async (q) => {
      const cacheKey = await this.generateCacheKey(q, context);
      const cached = await this.config.cache.get(cacheKey);
      if (cached) return JSON.parse(cached);
      
      return this.hybridRetrieval(q, {
        alpha: 0.7, // Vector search weight
        beta: 0.3,  // Keyword search weight
        minSimilarity: 0.75,
        maxResults: 20
      });
    });
    
    const retrievalResults = await Promise.all(retrievalPromises);
    const fusedResults = this.fusionRanking(retrievalResults, rewrittenQueries);
    
    // Context-aware generation with citation tracking
    return this.generateWithCitations(query, fusedResults, context);
  }

  private async hybridRetrieval(query: string, params: RetrievalParams) {
    const [vectorResults, keywordResults] = await Promise.all([
      this.vectorSearch(query, params.maxResults),
      this.keywordSearch(query, params.maxResults)
    ]);
    
    // RRF (Reciprocal Rank Fusion) scoring
    return this.reciprocalRankFusion(vectorResults, keywordResults, params);
  }

  private fusionRanking(results: DocumentChunk[][], queries: string[]): DocumentChunk[] {
    const scoreMap = new Map<string, { doc: DocumentChunk; totalScore: number }>();
    
    results.forEach((resultSet, queryIndex) => {
      const queryWeight = 1 / (queryIndex + 1); // Decay for expanded queries
      
      resultSet.forEach((doc, rank) => {
        const rrf = 1 / (rank + 60); // RRF with k=60
        const existing = scoreMap.get(doc.id);
        
        if (existing) {
          existing.totalScore += rrf * queryWeight;
        } else {
          scoreMap.set(doc.id, { doc, totalScore: rrf * queryWeight });
        }
      });
    });
    
    return Array.from(scoreMap.values())
      .sort((a, b) => b.totalScore - a.totalScore)
      .slice(0, 10)
      .map(item => item.doc);
  }
}`,
  },
  {
    id: 2,
    title: "Distributed ML Training with Kubernetes & Ray",
    description: "Scalable machine learning pipeline with distributed training, hyperparameter optimization, and model serving",
    language: "python",
    tags: ["Ray", "Kubernetes", "MLOps", "Distributed Training", "AutoML"],
    icon: SiPython,
    code: `# Distributed ML Training Pipeline with Ray and Kubernetes
import ray
from ray import tune, train
from ray.train import ScalingConfig, RunConfig
from ray.train.huggingface import HuggingFaceTrainer
from ray.tune.schedulers import ASHAScheduler
from ray.tune.search.optuna import OptunaSearch
import torch
import transformers
from kubernetes import client, config
import asyncio
from typing import Dict, List, Optional
import wandb
from dataclasses import dataclass

@dataclass
class DistributedTrainingConfig:
    model_name: str
    dataset_path: str
    num_workers: int
    gpu_per_worker: int
    batch_size_per_worker: int
    learning_rate_range: tuple
    epochs: int
    checkpoint_freq: int

class KubernetesMLPipeline:
    def __init__(self, k8s_config_path: str, ray_cluster_config: Dict):
        config.load_kube_config(config_file=k8s_config_path)
        self.k8s_client = client.AppsV1Api()
        self.ray_config = ray_cluster_config
        
    async def setup_distributed_cluster(self) -> ray.cluster.Cluster:
        """Initialize Ray cluster on Kubernetes with auto-scaling"""
        cluster_config = {
            "cluster_name": "ml-training-cluster",
            "provider": {"type": "kubernetes", "namespace": "ml-workloads"},
            "head_node": {
                "cpu": 4,
                "memory": "16Gi", 
                "gpu": 1,
                "resources": {"CPU": 4, "memory": 16_000_000_000}
            },
            "worker_nodes": {
                "min_workers": 2,
                "max_workers": 20,
                "initial_workers": 4,
                "cpu": 8,
                "memory": "32Gi",
                "gpu": 2,
                "resources": {"CPU": 8, "memory": 32_000_000_000, "GPU": 2}
            }
        }
        
        # Deploy Ray cluster via Kubernetes operator
        await self._deploy_ray_cluster(cluster_config)
        return ray.init(address="ray://ml-training-cluster-head:10001")

    def create_training_pipeline(self, config: DistributedTrainingConfig):
        """Create distributed training pipeline with hyperparameter optimization"""
        
        def train_function(config_dict: Dict):
            import torch
            from transformers import (
                AutoTokenizer, AutoModelForSequenceClassification,
                TrainingArguments, Trainer, DataCollatorWithPadding
            )
            from datasets import load_dataset, load_metric
            
            # Multi-GPU setup within each worker
            local_rank = int(os.environ.get("LOCAL_RANK", 0))
            torch.cuda.set_device(local_rank)
            device = torch.device(f"cuda:{local_rank}")
            
            # Load and preprocess dataset with streaming
            dataset = load_dataset(
                config_dict["dataset_path"], 
                streaming=True,
                split="train"
            )
            
            tokenizer = AutoTokenizer.from_pretrained(config_dict["model_name"])
            model = AutoModelForSequenceClassification.from_pretrained(
                config_dict["model_name"],
                num_labels=config_dict["num_labels"]
            ).to(device)
            
            # Training with gradient accumulation
            training_args = TrainingArguments(
                output_dir=f"/tmp/model-{train.get_context().get_trial_id()}",
                per_device_train_batch_size=config_dict["batch_size"],
                gradient_accumulation_steps=config_dict["grad_accum_steps"],
                learning_rate=config_dict["learning_rate"],
                num_train_epochs=config_dict["epochs"],
                fp16=True,  # Mixed precision training
                gradient_checkpointing=True
            )
            
            trainer = Trainer(
                model=model,
                args=training_args,
                train_dataset=train_dataset,
                tokenizer=tokenizer
            )
            
            result = trainer.train()
            train.report({
                "loss": result.training_loss,
                "eval_f1": trainer.evaluate()["eval_f1"]
            })
            
        return train_function`,
  },
  {
    id: 3,
    title: "Event-Driven Microservices with CQRS & Event Sourcing",
    description: "Scalable microservices architecture using CQRS, Event Sourcing, and distributed event streaming with Kafka",
    language: "typescript",
    tags: ["CQRS", "Event Sourcing", "Kafka", "Microservices", "DDD"],
    icon: TbServer,
    code: `// Event-Driven Microservices with CQRS & Event Sourcing
import { EventStore, StreamName, Event, EventData } from '@eventstore/db-client';
import { Kafka, Producer, Consumer, EachMessagePayload } from 'kafkajs';
import { Repository, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { z } from 'zod';
import Redis from 'ioredis';

// Domain Events Schema
const UserRegisteredEventSchema = z.object({
  userId: z.string().uuid(),
  email: z.string().email(),
  registeredAt: z.date(),
  metadata: z.record(z.unknown()).optional()
});

const OrderCreatedEventSchema = z.object({
  orderId: z.string().uuid(),
  userId: z.string().uuid(),
  items: z.array(z.object({
    productId: z.string(),
    quantity: z.number(),
    price: z.number()
  })),
  totalAmount: z.number(),
  createdAt: z.date()
});

type DomainEvent = 
  | { type: 'UserRegistered'; data: z.infer<typeof UserRegisteredEventSchema> }
  | { type: 'OrderCreated'; data: z.infer<typeof OrderCreatedEventSchema> }
  | { type: 'PaymentProcessed'; data: PaymentProcessedEvent }
  | { type: 'InventoryUpdated'; data: InventoryUpdatedEvent };

// Event Sourcing Infrastructure
export class EventSourcingRepository<T extends AggregateRoot> {
  constructor(
    private eventStore: EventStore,
    private kafkaProducer: Producer,
    private redis: Redis,
    private aggregateFactory: (id: string) => T
  ) {}

  async save(aggregate: T): Promise<void> {
    const uncommittedEvents = aggregate.getUncommittedEvents();
    if (uncommittedEvents.length === 0) return;

    const streamName = \`\${aggregate.constructor.name}-\${aggregate.id}\`;
    const expectedRevision = aggregate.version - uncommittedEvents.length;

    // Transactional event store write
    const eventData = uncommittedEvents.map(event => ({
      id: crypto.randomUUID(),
      type: event.type,
      data: event.data,
      metadata: {
        aggregateId: aggregate.id,
        aggregateType: aggregate.constructor.name,
        version: ++aggregate.version,
        timestamp: new Date().toISOString()
      }
    }));

    try {
      // Optimistic concurrency control
      await this.eventStore.appendToStream(
        streamName,
        eventData,
        { expectedRevision }
      );

      // Publish to Kafka for downstream services
      await this.publishEvents(uncommittedEvents);
      
      // Update snapshot if needed
      if (aggregate.version % 100 === 0) {
        await this.saveSnapshot(aggregate);
      }

      aggregate.markEventsAsCommitted();
    } catch (error) {
      if (error.type === 'WrongExpectedRevision') {
        throw new OptimisticConcurrencyError(
          \`Aggregate \${aggregate.id} was modified by another process\`
        );
      }
      throw error;
    }
  }

  async getById(id: string): Promise<T | null> {
    const streamName = \`\${this.aggregateFactory(id).constructor.name}-\${id}\`;
    
    // Try to load from snapshot first
    const snapshot = await this.loadSnapshot(id);
    const fromVersion = snapshot ? snapshot.version : 0;
    
    // Load events after snapshot
    const events = this.eventStore.readStream(streamName, {
      fromRevision: fromVersion,
      direction: 'forwards'
    });

    const aggregate = snapshot ? 
      this.rehydrateFromSnapshot(snapshot) : 
      this.aggregateFactory(id);

    // Apply events to rebuild state
    for await (const event of events) {
      aggregate.applyEvent(event.event);
    }

    return aggregate.version > 0 ? aggregate : null;
  }
}`,
  },
  {
    id: 4,
    title: "GPU-Accelerated Computer Vision Pipeline",
    description: "High-performance computer vision system with CUDA acceleration, real-time object detection, and distributed inference",
    language: "python",
    tags: ["CUDA", "OpenCV", "PyTorch", "TensorRT", "Real-time", "Computer Vision"],
    icon: SiPython,
    code: `# GPU-Accelerated Computer Vision Pipeline with TensorRT Optimization
import torch
import torchvision.transforms as transforms
import tensorrt as trt
import pycuda.driver as cuda
import pycuda.autoinit
import numpy as np
import cv2
from concurrent.futures import ThreadPoolExecutor, as_completed
import asyncio
from typing import List, Tuple, Dict, Optional
from dataclasses import dataclass
import time

@dataclass
class DetectionResult:
    class_id: int
    confidence: float
    bbox: Tuple[int, int, int, int]
    mask: Optional[np.ndarray] = None
    keypoints: Optional[List[Tuple[float, float]]] = None

class TensorRTOptimizer:
    """Optimize PyTorch models for high-performance inference with TensorRT"""
    
    def __init__(self, max_batch_size: int = 32, precision: str = "fp16"):
        self.max_batch_size = max_batch_size
        self.precision = precision
        self.logger = trt.Logger(trt.Logger.WARNING)
        
    def optimize_model(
        self, 
        onnx_path: str, 
        engine_path: str,
        input_shape: Tuple[int, int, int, int]
    ) -> None:
        """Convert ONNX model to optimized TensorRT engine"""
        
        builder = trt.Builder(self.logger)
        config = builder.create_builder_config()
        network = builder.create_network(
            1 << int(trt.NetworkDefinitionCreationFlag.EXPLICIT_BATCH)
        )
        
        # Configure optimization settings
        config.max_workspace_size = 1 << 30  # 1GB
        config.set_flag(trt.BuilderFlag.GPU_FALLBACK)
        
        if self.precision == "fp16":
            config.set_flag(trt.BuilderFlag.FP16)
        elif self.precision == "int8":
            config.set_flag(trt.BuilderFlag.INT8)

class GPUAcceleratedDetector:
    """High-performance object detection with GPU acceleration"""
    
    def __init__(
        self, 
        engine_path: str,
        device_id: int = 0,
        max_batch_size: int = 16
    ):
        self.device_id = device_id
        self.max_batch_size = max_batch_size
        
        # Initialize CUDA context
        cuda.init()
        self.cuda_ctx = cuda.Device(device_id).make_context()
        
        # Load TensorRT engine
        self.runtime = trt.Runtime(trt.Logger(trt.Logger.WARNING))
        with open(engine_path, 'rb') as f:
            self.engine = self.runtime.deserialize_cuda_engine(f.read())
        self.context = self.engine.create_execution_context()
        
        # Create CUDA stream for async execution
        self.stream = cuda.Stream()
        
        # Pre-processing pipeline
        self.transform = transforms.Compose([
            transforms.Resize((640, 640)),
            transforms.ToTensor(),
            transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
        ])
        
    async def detect_batch(self, images: List[np.ndarray]) -> List[List[DetectionResult]]:
        """Process batch of images for object detection"""
        batch_size = min(len(images), self.max_batch_size)
        
        # Preprocess images in parallel
        with ThreadPoolExecutor(max_workers=4) as executor:
            futures = [
                executor.submit(self._preprocess_image, img) 
                for img in images[:batch_size]
            ]
            preprocessed = [f.result() for f in as_completed(futures)]
        
        # Prepare batch tensor
        batch_tensor = torch.stack(preprocessed).cuda(self.device_id)
        
        # Run inference
        self.context.execute_async_v2(
            bindings=self.bindings, 
            stream_handle=self.stream.handle
        )
        
        self.stream.synchronize()
        
        return detections`,
  },
];

export default function CodeSnippetShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarHeight, setSidebarHeight] = useState(0);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (activeIndex >= codeSnippets.length) setActiveIndex(0);
    if (activeIndex < 0) setActiveIndex(codeSnippets.length - 1);
    
    setTimeout(() => {
      if (sidebarRef.current && !isMobile) {
        setSidebarHeight(sidebarRef.current.offsetHeight);
      }
    }, 100);
  }, [activeIndex, isMobile]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024 && sidebarRef.current) {
        setSidebarHeight(sidebarRef.current.offsetHeight);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const timeout = setTimeout(() => {
      if (sidebarRef.current) {
        setSidebarHeight(sidebarRef.current.offsetHeight);
      }
    }, 500);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeout);
    };
  }, []);

  if (!codeSnippets.length) return null;

  const activeSnippet = codeSnippets[activeIndex];

  const copyToClipboard = (code: string, id: number) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="py-20 bg-background dark:bg-black px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 max-w-xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Code <span className="text-primary">Showcase</span>
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg">
          Explore my coding style through these snippets.
        </p>
      </motion.div>

      {/* Mobile Navigation */}
      {isMobile && (
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setActiveIndex((i) => i - 1)}
            className="p-2 bg-primary rounded-full text-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex gap-3 overflow-x-auto scrollbar-none">
            {codeSnippets.map((snippet, index) => {
              const Icon = snippet.icon;
              return (
                <button
                  key={snippet.id}
                  onClick={() => setActiveIndex(index)}
                  className={`p-2 rounded-lg transition ${
                    index === activeIndex
                      ? "bg-primary text-white"
                      : "bg-card text-muted-foreground"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </button>
              );
            })}
          </div>
          <button
            onClick={() => setActiveIndex((i) => i + 1)}
            className="p-2 bg-primary rounded-full text-white"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Main Content */}
      <div className="lg:flex lg:gap-8">
        {/* Desktop Sidebar */}
        {!isMobile && (
          <div
            ref={sidebarRef}
            className="hidden lg:flex lg:flex-col lg:w-80 lg:sticky lg:top-24 lg:space-y-6 lg:self-start"
          >
            {codeSnippets.map((snippet, index) => {
              const Icon = snippet.icon;
              const isLast = index === codeSnippets.length - 1;
              return (
                <button
                  key={snippet.id}
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-start gap-4 p-6 rounded-lg border transition text-left ${
                    index === activeIndex
                      ? "bg-primary/10 border-primary text-primary"
                      : "bg-card border-border text-card-foreground hover:bg-card/80"
                  } ${isLast ? "mb-6" : ""}`}
                >
                  <Icon className="w-10 h-10 flex-shrink-0" />
                  <div className="flex-grow">
                    <h3 className="font-semibold text-base">{snippet.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {snippet.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Code Editor */}
        <div className="flex-1 lg:flex lg:flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSnippet.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-card border border-border rounded-2xl shadow-lg overflow-hidden flex flex-col"
              style={{
                height: !isMobile && sidebarHeight > 0 ? `${sidebarHeight}px` : "auto",
              }}
            >
              {/* Header */}
              <div className="relative p-6 border-b border-border flex-shrink-0">
                <div>
                  <h3 className="font-bold text-lg">{activeSnippet.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {activeSnippet.description}
                  </p>
                </div>
                <button
                  onClick={() => copyToClipboard(activeSnippet.code, activeSnippet.id)}
                  className="absolute top-6 right-6 p-1 sm:p-2 bg-secondary rounded-lg text-secondary-foreground"
                >
                  {copiedId === activeSnippet.id ? (
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5 sm:w-6 sm:h-6" />
                  )}
                </button>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 px-6 py-4 bg-muted/50 border-b border-border flex-shrink-0">
                {activeSnippet.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-accent rounded-full text-xs text-accent-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Monaco Editor */}
              <div className="p-4 overflow-hidden flex-grow">
                <Editor
                  language={activeSnippet.language}
                  value={
                    activeSnippet.code +
                    (!isMobile && sidebarHeight > 0
                      ? "\n".repeat(Math.max(0, 20 - activeSnippet.code.split("\n").length))
                      : "")
                  }
                  theme={theme === "dark" ? "vs-dark" : "light"}
                  options={{
                    readOnly: true,
                    minimap: { enabled: false },
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    fontSize: isMobile ? 12 : 14,
                    wordWrap: "on",
                    wrappingIndent: "indent",
                    scrollbar: {
                      verticalScrollbarSize: isMobile ? 6 : 12,
                    },
                  }}
                  className="w-full !max-w-full min-h-[300px] sm:min-h-[400px]"
                  height={!isMobile && sidebarHeight > 0 ? `${sidebarHeight - 160}px` : "600px"}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
