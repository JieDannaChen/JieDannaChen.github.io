import type { Lang } from '../i18n/translations';

export interface Project {
  title: { en: string; zh: string };
  description: { en: string; zh: string };
  tags: string[];
  github?: string;
  demo?: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: {
      en: 'AI Chat Assistant',
      zh: 'AI 智能对话助手',
    },
    description: {
      en: 'A conversational AI powered by large language models with RAG (Retrieval-Augmented Generation) for context-aware responses. Supports multi-turn dialogue and document Q&A.',
      zh: '基于大语言模型的智能对话系统，采用 RAG（检索增强生成）技术实现上下文感知的精准回答。支持多轮对话和文档问答。',
    },
    tags: ['Python', 'LangChain', 'OpenAI', 'FastAPI', 'Vector DB'],
    github: 'https://github.com/JieDannaChen',
    image: '/images/project-chat.svg',
  },
  {
    title: {
      en: 'Smart Image Classifier',
      zh: '智能图像分类器',
    },
    description: {
      en: 'A deep learning image classification system using transfer learning with PyTorch. Achieves high accuracy on custom datasets with an intuitive web interface for real-time predictions.',
      zh: '使用 PyTorch 迁移学习构建的深度学习图像分类系统。在自定义数据集上实现高精度分类，并提供直观的 Web 界面进行实时预测。',
    },
    tags: ['PyTorch', 'CNN', 'Transfer Learning', 'Gradio'],
    github: 'https://github.com/JieDannaChen',
    image: '/images/project-vision.svg',
  },
  {
    title: {
      en: 'AI Workflow Automation',
      zh: 'AI 工作流自动化',
    },
    description: {
      en: 'An intelligent automation platform that uses AI agents to orchestrate complex workflows. Features task decomposition, tool usage, and self-reflection capabilities.',
      zh: '基于 AI 智能体的自动化平台，用于编排复杂工作流。具备任务分解、工具调用和自我反思能力。',
    },
    tags: ['Python', 'AI Agents', 'LLM', 'Automation'],
    github: 'https://github.com/JieDannaChen',
    image: '/images/project-agent.svg',
  },
];
