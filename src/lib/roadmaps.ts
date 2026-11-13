/* ============================================================
   TechVerse — Interactive (roadmap.sh-style) roadmap model
   ------------------------------------------------------------
   Structured, node-based roadmaps rendered as an interactive
   branch timeline with clickable topic nodes, a resources
   drawer, and per-node progress tracking (localStorage).

   A slug that has an InteractiveRoadmap here renders the
   interactive view on /roadmaps/[slug]; slugs without one fall
   back to the existing MDX roadmap. See src/data/roadmaps.ts.
   ============================================================ */

export interface RoadmapResource {
  label: string;
  url: string;
}

export interface RoadmapTopic {
  /** Unique within the roadmap — also the localStorage progress key. */
  id: string;
  title: string;
  summary?: string;
  resources?: RoadmapResource[];
  /** Nice-to-have, not required for the path. Rendered with a dashed style. */
  optional?: boolean;
}

export interface RoadmapMilestone {
  id: string;
  title: string;
  summary?: string;
  topics: RoadmapTopic[];
}

export interface InteractiveRoadmap {
  slug: string;
  title: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  estimatedTime: string;
  category: string;
  milestones: RoadmapMilestone[];
}

export function countTopics(roadmap: InteractiveRoadmap): number {
  return roadmap.milestones.reduce((n, m) => n + m.topics.length, 0);
}

export function allTopicIds(roadmap: InteractiveRoadmap): string[] {
  return roadmap.milestones.flatMap((m) => m.topics.map((t) => t.id));
}
