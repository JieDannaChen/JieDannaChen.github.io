export const languages = {
  en: 'English',
  zh: '中文',
};

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const translations = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Jie Chen (Danna)',
      tagline: 'AI Enthusiast & Software Engineer',
      description:
        'Passionate about building intelligent systems and exploring the frontiers of artificial intelligence. I love turning ideas into elegant, functional solutions.',
      cta: 'View My Work',
    },
    skills: {
      title: 'Skills & Interests',
      subtitle: 'Technologies I work with and topics that inspire me',
      technical: 'Technical Skills',
      interests: 'Interests & Explorations',
    },
    projects: {
      title: 'AI Projects',
      subtitle: 'Selected projects showcasing my journey in AI',
      viewCode: 'Source Code',
      viewDemo: 'Live Demo',
    },
    contact: {
      title: 'Get In Touch',
      subtitle: "I'd love to connect — feel free to reach out",
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    footer: {
      builtWith: 'Built with',
      and: '&',
      by: 'by Jie Chen',
    },
  },
  zh: {
    nav: {
      about: '关于',
      skills: '技能',
      projects: '项目',
      contact: '联系',
    },
    hero: {
      greeting: '你好，我是',
      name: '陈洁 (Danna)',
      tagline: 'AI 爱好者 & 软件工程师',
      description:
        '热衷于构建智能系统，探索人工智能的前沿领域。我喜欢将创意转化为优雅、实用的解决方案。',
      cta: '查看我的作品',
    },
    skills: {
      title: '技能与兴趣',
      subtitle: '我使用的技术和激发灵感的领域',
      technical: '专业技能',
      interests: '兴趣探索',
    },
    projects: {
      title: 'AI 项目',
      subtitle: '精选项目，展示我在 AI 领域的探索之旅',
      viewCode: '源代码',
      viewDemo: '在线演示',
    },
    contact: {
      title: '联系我',
      subtitle: '期待与你交流，欢迎随时联系',
      email: '邮箱',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    footer: {
      builtWith: '使用',
      and: '和',
      by: '构建 · 陈洁',
    },
  },
} as const;

export function t(lang: Lang, key: string): string {
  const keys = key.split('.');
  let value: any = translations[lang];
  for (const k of keys) {
    value = value?.[k];
  }
  return value ?? key;
}
