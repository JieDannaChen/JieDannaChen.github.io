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
      achievements: 'Achievements',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Danna Chen',
      tagline: 'Senior Principal Engineer · Quality & Storage',
      description:
        '15+ years in quality engineering, test architecture, and distributed storage systems. I build automated testing frameworks, pioneer code coverage pipelines, and drive quality transformation across large-scale enterprise products. Passionate about chaos engineering, AI-augmented testing, and open-source community.',
      cta: 'Explore My Work',
    },
    skills: {
      title: 'Skills & Expertise',
      subtitle: 'Technical domains I specialize in and areas I actively explore',
      technical: 'Technical Skills',
      interests: 'Areas of Exploration',
    },
    projects: {
      title: 'Featured Work',
      subtitle: 'Selected engineering initiatives that drove measurable impact',
      viewCode: 'Learn More',
      viewDemo: 'Case Study',
    },
    achievements: {
      title: 'Achievements',
      subtitle: 'Key milestones across my career journey',
    },
    contact: {
      title: 'Get In Touch',
      subtitle: "Open to collaboration, speaking, and knowledge exchange",
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    footer: {
      builtWith: 'Built with',
      and: '&',
      by: 'by Danna Chen',
    },
  },
  zh: {
    nav: {
      about: '关于',
      skills: '技能',
      projects: '项目',
      achievements: '成就',
      contact: '联系',
    },
    hero: {
      greeting: '你好，我是',
      name: '陈洁 (Danna)',
      tagline: '资深首席工程师 · 质量工程 & 分布式存储',
      description:
        '15+ 年质量工程、测试架构与分布式存储系统经验。擅长构建自动化测试框架、开创代码覆盖率流水线，并推动大规模企业产品的质量转型。热衷于混沌工程、AI 增强测试和开源社区。',
      cta: '了解我的工作',
    },
    skills: {
      title: '技能与专长',
      subtitle: '我深耕的技术领域和持续探索的方向',
      technical: '专业技能',
      interests: '探索领域',
    },
    projects: {
      title: '代表项目',
      subtitle: '精选工程实践，每一项都带来了可量化的影响',
      viewCode: '了解更多',
      viewDemo: '案例研究',
    },
    achievements: {
      title: '职业成就',
      subtitle: '职业旅程中的关键里程碑',
    },
    contact: {
      title: '联系我',
      subtitle: '欢迎合作交流、技术分享与知识探讨',
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
