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
      achievements: '履历',
      personal: '生活',
      contact: '联系',
    },
    hero: {
      greeting: '你好，我是',
      name: '陈洁 (Danna)',
      tagline: '首席工程师 · AI Agent 系统与平台架构',
      description:
        '深耕软件工程 15 年，从中国互联网黄金期（美团点评、满帮集团）到 Dell Technologies 企业级分布式存储，一直在平台架构和质量工程两条线上走。在大众点评把 API 测试框架做落地，九成测试不用开浏览器；在满帮把线上事故压了 80%；在 Dell 给三地团队搭自动化体系、回归周期缩短 40%。近几年一头扎进 AI Agent 领域：从零搭起 87 技能的自主 Agent 平台，打通 10 多个内部系统，带向量记忆和智能路由，200 多名工程师在用；也做了自驱动测试 Agent 和多模型编排。VP 年度之星、黑客松冠军、QeCon 大会讲师。',
      cta: '看看我做了什么',
    },
    skills: {
      title: '技能树',
      subtitle: 'Agent 系统、平台架构，还有平时用的技术栈',
      technical: '技术栈',
      interests: '正在探索',
    },
    projects: {
      title: '开源项目',
      subtitle: '自主 Agent、AI 代码质量、技能生态管理',
      viewCode: 'GitHub',
      viewDemo: '演示',
    },
    achievements: {
      title: '职业履历',
      subtitle: '一路走来的关键节点',
    },
    personal: {
      title: '代码之外',
      quote: '写代码是工作，跑马拉松是修行。',
      body: '认真跑步的业余马拉松选手。Marathon Copilot 这个项目就是因为自己要训练才做的 — 把写代码的手艺和跑步的热爱放到了一起。周期化训练、比赛补给、配速策略、恢复调整、用数据一点点磨 PB，这些我不是查资料写的，是自己一公里一公里跑出来的。',
    },
    contact: {
      title: '找到我',
      subtitle: '想聊技术、聊合作，随时欢迎',
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
