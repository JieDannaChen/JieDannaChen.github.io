export interface Project {
  title: { en: string; zh: string };
  description: { en: string; zh: string };
  tags: string[];
  github?: string;
  demo?: string;
  image: string;
  impact?: { en: string; zh: string };
}

export const projects: Project[] = [
  {
    title: {
      en: 'End-to-End Code Coverage Pipeline',
      zh: '端到端代码覆盖率流水线',
    },
    description: {
      en: 'Designed and implemented a fully automated code coverage collection framework for a large-scale distributed storage system. Integrated with the test automation framework and CI/CD pipeline to enable one-click instrumentation, test execution, coverage merging, and HTML reporting — applied across the entire product line.',
      zh: '为大规模分布式存储系统设计并实现了全自动代码覆盖率收集框架。与测试自动化框架和 CI/CD 流水线深度集成，实现一键式代码插桩、测试执行、覆盖率合并和报告生成 — 已推广至整个产品线。',
    },
    tags: ['Java', 'JaCoCo', 'Robot Framework', 'Jenkins', 'CI/CD'],
    image: '/images/project-coverage.svg',
    impact: {
      en: '+14% line coverage · -10% defect escape · 0 critical defects in release',
      zh: '行覆盖率 +14% · 缺陷逃逸率 -10% · 发布周期 0 个严重缺陷',
    },
  },
  {
    title: {
      en: 'Chaos Engineering Framework',
      zh: '混沌工程测试框架',
    },
    description: {
      en: 'Led the design of a controlled chaos testing framework for enterprise storage clusters. Supports multi-level fault injection (disk, network, process, node), workflow-based test orchestration, and real-time monitoring dashboards. Integrated into CI/CD to catch reliability issues that traditional E2E testing misses.',
      zh: '主导设计了面向企业存储集群的可控混沌测试框架。支持多层级故障注入（磁盘、网络、进程、节点级别）、基于工作流的测试编排，以及实时监控看板。集成进 CI/CD 流水线，发现传统端到端测试无法覆盖的可靠性问题。',
    },
    tags: ['Python', 'Fault Injection', 'Distributed Systems', 'Automation'],
    image: '/images/project-chaos.svg',
  },
  {
    title: {
      en: 'Network Optimization for Storage Clusters',
      zh: '存储集群网络优化方案',
    },
    description: {
      en: 'Innovated a hardware-virtualization-based network separation design for distributed storage clusters — isolating client-facing traffic from internal replication using virtual functions, achieving zero additional hardware cost. Won recognition for exceptional creativity and technical execution at an internal innovation competition.',
      zh: '创新性地设计了基于硬件虚拟化的分布式存储集群网络分离方案 — 利用虚拟功能将客户端流量与内部复制流量隔离，实现零额外硬件成本。在公司内部创新竞赛中获得杰出创意和技术执行力的表彰。',
    },
    tags: ['Networking', 'SR-IOV', 'Storage', 'Innovation'],
    image: '/images/project-network.svg',
    impact: {
      en: 'Zero hardware cost · Hackathon award winner',
      zh: '零额外硬件成本 · 创新竞赛获奖',
    },
  },
];
