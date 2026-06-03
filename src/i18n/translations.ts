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
      personal: 'Personal',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Danna Chen',
      tagline: 'Principal Engineer · AI Agent Systems & Platform Architecture',
      description:
        '15 years building globally scalable platforms — from China\'s internet hyper-growth (Meituan/Dianping, Full Truck Alliance) to enterprise distributed storage at Dell Technologies. Architected an autonomous AI agent platform (87 skills, tool-use across 10+ systems, persistent vector memory, intelligent task routing) adopted by 200+ engineers. Built self-directed testing agents and multi-model orchestration systems. VP Star Award & Hackathon Champion.',
      cta: 'Explore My Work',
    },
    skills: {
      title: 'Skills & Expertise',
      subtitle: 'Agent systems, platform architecture, and the tools I build with',
      technical: 'Technical Skills',
      interests: 'Areas of Exploration',
    },
    projects: {
      title: 'AI Agent & Open Source Projects',
      subtitle: 'Autonomous agents, multi-model orchestration, and self-directed testing systems',
      viewCode: 'GitHub',
      viewDemo: 'Demo',
    },
    achievements: {
      title: 'Achievements',
      subtitle: 'Key milestones across my career journey',
    },
    personal: {
      title: 'Beyond the Code',
      quote: "I don't just build technology — I live the running lifestyle.",
      body: 'Competitive amateur marathon runner. Marathon Copilot was born from my own training needs, combining engineering skills with a deep passion for the sport. I understand the runner\'s journey from first principles: periodization, race nutrition, pacing strategy, recovery science, and the data-driven pursuit of personal bests. Every line of code in that project comes from real miles on the road.',
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
      personal: '个人',
      contact: '联系',
    },
    hero: {
      greeting: '你好，我是',
      name: '陈洁 (Danna)',
      tagline: '首席工程师 · AI Agent 系统 & 平台架构',
      description:
        '15 年全球化平台构建经验 — 从中国互联网高速增长时代（美团/大众点评、满帮集团）到 Dell Technologies 企业级分布式存储。主导构建自主 AI Agent 平台（87 技能、10+ 系统工具调用、持久化向量记忆、智能任务路由），被 200+ 人工程组织采用。构建自驱动测试 Agent 和多模型编排系统。VP 年度之星奖 & 黑客松冠军。',
      cta: '了解我的工作',
    },
    skills: {
      title: '技能与专长',
      subtitle: 'Agent 系统、平台架构，以及我构建工具所用的技术栈',
      technical: '专业技能',
      interests: '探索领域',
    },
    projects: {
      title: 'AI Agent & 开源项目',
      subtitle: '自主 Agent、多模型编排与自驱动测试系统',
      viewCode: 'GitHub',
      viewDemo: '演示',
    },
    achievements: {
      title: '职业成就',
      subtitle: '职业旅程中的关键里程碑',
    },
    personal: {
      title: '代码之外',
      quote: '我不只是构建技术 — 我活在跑步的生活方式中。',
      body: '业余竞技马拉松跑者。Marathon Copilot 诞生于我自己的训练需求，将工程能力与对跑步的热爱相融合。我从第一性原理理解跑者的旅程：周期化训练、比赛营养、配速策略、恢复科学，以及数据驱动的 PB 追求。项目中的每一行代码，都来自路上真实跑过的每一公里。',
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
