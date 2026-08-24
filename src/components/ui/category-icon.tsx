import React from "react";
import {
  Layout,
  Server,
  Database,
  Cloud,
  Infinity as InfinityIcon,
  Sparkles,
  ShieldCheck,
  BarChart3,
  Smartphone,
  PenTool,
  Code2,
  PenLine,
  Video,
  Workflow,
  Microscope,
  Gauge,
  Network,
  Layers,
  Cpu,
  Compass,
} from "lucide-react";

type IconType = React.ComponentType<{ className?: string }>;

// Single source of truth: category slug → line icon (no emojis anywhere).
export const categoryIcons: Record<string, IconType> = {
  // technologies
  frontend: Layout,
  backend: Server,
  databases: Database,
  cloud: Cloud,
  devops: InfinityIcon,
  ai: Sparkles,
  cybersecurity: ShieldCheck,
  data: BarChart3,
  mobile: Smartphone,
  design: PenTool,
  // ai-tools
  coding: Code2,
  writing: PenLine,
  video: Video,
  automation: Workflow,
  research: Microscope,
  productivity: Gauge,
  // interviews
  "system-design": Network,
  // careers
  "frontend-developer": Layout,
  "backend-developer": Server,
  "full-stack-developer": Layers,
  "ai-engineer": Sparkles,
  "ml-engineer": Cpu,
  "cloud-engineer": Cloud,
  "devops-engineer": InfinityIcon,
  "cybersecurity-engineer": ShieldCheck,
  "product-manager": Compass,
  "ui-ux-designer": PenTool,
  "data-engineer": Database,
};

export function getCategoryIcon(slug: string): IconType {
  return categoryIcons[slug] || Layers;
}

export function CategoryIcon({ slug, className }: { slug: string; className?: string }) {
  const Icon = getCategoryIcon(slug);
  return <Icon className={className} />;
}
