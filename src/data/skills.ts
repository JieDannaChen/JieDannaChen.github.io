export interface Skill {
  name: string;
  icon: string;
  category: 'language' | 'framework' | 'ai' | 'tool';
}

export interface Interest {
  name: { en: string; zh: string };
  icon: string;
  description: { en: string; zh: string };
}

export const skills: Skill[] = [
  { name: 'Python', icon: '🐍', category: 'language' },
  { name: 'TypeScript', icon: '📘', category: 'language' },
  { name: 'Java', icon: '☕', category: 'language' },
  { name: 'PyTorch', icon: '🔥', category: 'ai' },
  { name: 'TensorFlow', icon: '🧠', category: 'ai' },
  { name: 'LangChain', icon: '🔗', category: 'ai' },
  { name: 'React', icon: '⚛️', category: 'framework' },
  { name: 'Node.js', icon: '🟢', category: 'framework' },
  { name: 'Docker', icon: '🐳', category: 'tool' },
  { name: 'Git', icon: '📂', category: 'tool' },
  { name: 'Linux', icon: '🐧', category: 'tool' },
  { name: 'AWS', icon: '☁️', category: 'tool' },
];

export const interests: Interest[] = [
  {
    name: { en: 'Large Language Models', zh: '大语言模型' },
    icon: '💬',
    description: {
      en: 'Exploring prompt engineering, fine-tuning, and building applications with LLMs',
      zh: '探索提示工程、模型微调以及基于 LLM 的应用开发',
    },
  },
  {
    name: { en: 'Computer Vision', zh: '计算机视觉' },
    icon: '👁️',
    description: {
      en: 'Image recognition, object detection, and visual understanding systems',
      zh: '图像识别、目标检测和视觉理解系统',
    },
  },
  {
    name: { en: 'AI Agents', zh: 'AI 智能体' },
    icon: '🤖',
    description: {
      en: 'Building autonomous agents that reason, plan, and take actions',
      zh: '构建能够推理、规划和执行的自主智能体',
    },
  },
  {
    name: { en: 'Open Source', zh: '开源社区' },
    icon: '🌐',
    description: {
      en: 'Contributing to and learning from the open-source community',
      zh: '参与开源社区，向社区学习和贡献',
    },
  },
];
