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
      resume: 'Resume',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Danna Chen',
      tagline: 'Senior AI Quality Engineer / SDET',
      keywords: 'AI-Assisted Testing  ·  Test Automation  ·  Cloud-Native Reliability  ·  Quality Platforms',
      description:
        '15+ years in software quality engineering, including 8+ years focused on testing Kubernetes-based enterprise object storage and the last 3 years applying AI to QA. I build Python workflows for coverage-driven test generation, defect triage, and evidence-backed RCA, and have led test strategy, automation, fault-injection, reliability, and CI/CD programs for distributed systems. My work includes a 96-skill enterprise AI agent platform and an integration-test strategy spanning 8 BUs.',
      cta: 'Explore My Work',
      resume: 'Download Resume',
    },
    skills: {
      title: 'Skills & Expertise',
      subtitle: 'AI quality engineering, agent architecture, and the tools I build with',
      technical: 'Technical Skills',
      focus: 'Core Focus',
    },
    projects: {
      title: 'AI Quality Engineering & Open Source Projects',
      subtitle: 'Testing agents, LLM quality evaluation, and agent platform architecture — where AI meets quality engineering',
      viewCode: 'GitHub',
      viewDemo: 'Demo',
    },
    achievements: {
      title: 'Achievements',
      subtitle: 'Key milestones across 15+ years of quality engineering',
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
      resume: '简历',
    },
    hero: {
      greeting: '你好，我是',
      name: '陈洁（Danna）',
      tagline: '高级 AI 质量工程师 / SDET',
      keywords: 'AI 辅助测试  ·  测试自动化  ·  云原生可靠性  ·  质量平台',
      description:
        '15 年以上软件质量工程经验，其中 8 年以上专注于 Kubernetes 企业级对象存储测试，最近 3 年专注于 AI 赋能的质量工程。基于 Python 构建覆盖率驱动的测试生成、缺陷分诊和证据驱动 RCA 工作流，并负责分布式系统的测试策略、自动化、故障注入、可靠性与 CI/CD。代表性工作包括 96 技能的企业级 AI Agent 平台，以及覆盖 8 个 BU 的集成测试策略。',
      cta: '看看我做了什么',
    },
    skills: {
      title: '技能树',
      subtitle: 'AI 质量工程、Agent 平台架构，以及我日常打磨的技术栈',
      technical: '技术栈',
      focus: '核心方向',
    },
    projects: {
      title: 'AI 质量工程与开源项目',
      subtitle: '测试 Agent、LLM 质量评测、Agent 平台架构——AI 在质量工程中的实践落地',
      viewCode: 'GitHub',
      viewDemo: '演示',
    },
    achievements: {
      title: '职业履历',
      subtitle: '十五年以上质量工程的关键里程碑',
    },
    personal: {
      title: '代码之外',
      quote: '写代码是手艺，跑马拉松是修行。',
      body: '业余马拉松选手。Marathon Copilot 源于自身的训练需求，把工程能力与对跑步的专注结合在一起。周期化训练、比赛补给、配速策略、恢复调整，这些内容都来自真实的训练里程，再用数据驱动持续优化个人成绩。',
    },
    contact: {
      title: '找到我',
      subtitle: '欢迎聊技术、聊合作',
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
