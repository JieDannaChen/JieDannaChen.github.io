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
      tagline: 'Principal Engineer · Platform Architecture & AI Engineering',
      description:
        '15 years building globally scalable platforms — from China\'s internet hyper-growth era (Meituan/Dianping, Full Truck Alliance) to enterprise distributed storage at Dell Technologies. Architected an enterprise AI platform (87 production skills, 10+ system integrations) adopted by a 200+ person engineering org. VP Star Award recipient. Competitive marathon runner who built Marathon Copilot — a full-stack AI coaching product combining sports science, LLM orchestration, and consumer product delivery.',
      cta: 'Explore My Work',
    },
    skills: {
      title: 'Skills & Expertise',
      subtitle: 'Technical domains I specialize in and areas I actively explore',
      technical: 'Technical Skills',
      interests: 'Areas of Exploration',
    },
    projects: {
      title: 'AI & Open Source Projects',
      subtitle: 'Building tools at the intersection of AI, quality engineering, and real life',
      viewCode: 'GitHub',
      viewDemo: 'Demo',
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
      tagline: '首席工程师 · 平台架构 & AI 工程',
      description:
        '15 年全球化平台构建经验 — 从中国互联网高速增长时代（美团/大众点评、满帮集团）到 Dell Technologies 企业级分布式存储。主导构建企业 AI 平台（87 个生产技能、10+ 系统集成），被 200+ 人工程组织广泛采用。VP 年度之星奖获得者。热爱马拉松的跑者，打造了 Marathon Copilot — 融合运动科学、LLM 编排与消费级产品交付的全栈 AI 教练产品。',
      cta: '了解我的工作',
    },
    skills: {
      title: '技能与专长',
      subtitle: '我深耕的技术领域和持续探索的方向',
      technical: '专业技能',
      interests: '探索领域',
    },
    projects: {
      title: 'AI & 开源项目',
      subtitle: '在 AI、质量工程与真实生活的交汇处构建工具',
      viewCode: 'GitHub',
      viewDemo: '演示',
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
