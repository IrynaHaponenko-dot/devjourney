export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  type?: "generated" | "screenshot" | "diagram" | "illustration" | "logo";
};

export type ParagraphBlock = { type: "paragraph"; text: string };
export type HeadingBlock = { type: "heading"; text: string; level: 2 | 3 };
export type ImageBlock = { type: "image"; image: ImageAsset };
export type CodeBlock = { type: "code"; code: string; language?: string };
export type PromptBlock = { type: "prompt"; text: string; title?: string };
export type CalloutBlock = { type: "callout"; text: string; title?: string };
export type ChecklistBlock = { type: "checklist"; items: string[] };
export type ContentBlock =
  | ParagraphBlock
  | HeadingBlock
  | ImageBlock
  | CodeBlock
  | PromptBlock
  | CalloutBlock
  | ChecklistBlock;

export type WorkflowStage = "idea" | "discovery" | "design" | "code" | "test" | "deploy";
export type WorkflowStep = {
  id: WorkflowStage;
  title: string;
  description: string;
  aiHelpsWith: string[];
  developerDecides: string[];
};

export type Article = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  author?: string;
  coverImage: ImageAsset;
  content: ContentBlock[];
  relatedArticles?: string[];
};

export type Tool = {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  logo: ImageAsset;
  useCases: string[];
  workflowStages: WorkflowStage[];
  websiteUrl?: string;
  documentationUrl?: string;
  relatedArticles?: string[];
  content: ContentBlock[];
};

export type AIUpdate = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readingTime: number;
  coverImage: ImageAsset;
  sourceUrl?: string;
  content: ContentBlock[];
  relatedUpdates?: string[];
};
