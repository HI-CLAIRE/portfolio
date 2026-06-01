export type Lang = "ko" | "en";

export const translations = {
  ko: {
    nav: {
      about: "소개",
      skills: "기술 스택",
      projects: "프로젝트",
      contact: "연락처",
    },
    hero: {
      badge: "3년차 프론트엔드 개발자",
      developerTitle: "Frontend Developer",
      bio: "사용자 경험을 먼저 생각하는 3년차 프론트엔드 개발자입니다.", // TODO: 실제 소개글로 교체
      cta: {
        projects: "프로젝트 보기",
        github: "GitHub",
        contact: "연락하기",
      },
      scroll: "Scroll",
    },
    about: {
      sectionLabel: "About Me",
      heading: "안녕하세요",
      bio: [
        "사용자가 실제로 사용하는 화면을 만드는 것에 보람을 느끼며, 읽기 좋은 코드와 직관적인 인터페이스를 추구합니다.", // TODO: 실제 소개글로 교체
        "신규 개발부터 운영·유지보수, 서비스 개편까지 다양한 성격의 프로젝트를 경험하며 요구사항을 빠르게 파악하고 실행하는 능력을 키워왔습니다.",
        "현재는 아트봉봉 서비스 개편에 참여하며 더 나은 사용자 경험을 만들기 위해 고민하고 있습니다.",
      ],
      githubLabel: "GitHub",
      blogLabel: "Blog",
      careerLabel: "Career Timeline",
      timeline: [
        {
          period: "2026.04 — 현재",
          company: "아트봉봉",
          role: "프론트엔드 개발자",
          desc: "기존 서비스 전면 개편 진행 중",
        },
        {
          period: "2025.02 — 2026.04",
          company: "TBL",
          role: "프론트엔드 개발자",
          desc: "TBLSHOP, 팬덤앱 어드민, TBL SSO 운영 및 유지보수",
        },
        {
          period: "2024.10 — 2025.01",
          company: "미니게임 프로젝트",
          role: "프론트엔드 개발자",
          desc: "웹 기반 미니게임 플랫폼 개발",
        },
        {
          period: "2023.11 — 2024.09",
          company: "대성전산",
          role: "프론트엔드 개발자",
          desc: "파피 서비스 신규 개발",
        },
      ],
    },
    skills: {
      sectionLabel: "Skills",
      heading: "기술 스택",
      categories: {
        frontend: "Frontend",
        tools: "Tools",
        capabilities: "Capabilities",
      },
    },
    projects: {
      sectionLabel: "Projects",
      heading: "프로젝트",
      subheading:
        "2023년부터 지금까지 참여한 프로젝트들입니다. 비공개 프로젝트는 상세 링크 없이 주요 기여 내용을 소개합니다.",
      filter: {
        all: "전체",
        new: "신규개발",
        maintenance: "운영·유지보수",
        redesign: "개편",
      },
      card: {
        private: "비공개",
        ongoing: "진행중",
        liveDemo: "Live Demo",
        privateMsg: "비공개 프로젝트입니다",
        roleLabel: {
          new: "신규개발",
          maintenance: "운영·유지보수",
          redesign: "개편",
        },
      },
    },
    contact: {
      sectionLabel: "Contact",
      heading: "연락하기",
      subheading:
        "새로운 기회나 협업 제안은 언제든 환영합니다.\n아래 채널로 자유롭게 연락 주세요.",
      builtWith: "Built with Next.js & Tailwind CSS",
    },
    projectsData: {
      daesungpappy: {
        title: "대성전산 파피",
        description:
          "대성전산의 메인 서비스 플랫폼으로 사용자 중심의 UI/UX를 구현하고 신규 기능 개발을 담당했습니다.",
        highlights: [
          "핵심 기여/성과를 여기에 입력해 주세요", // TODO
          "예: 페이지 로딩 속도 X% 개선",
          "예: 주요 기능 A, B, C 개발",
        ],
      },
      minigame: {
        title: "미니게임",
        description:
          "다양한 미니게임을 구현한 웹 기반 게임 플랫폼입니다. 인터랙티브한 UI와 부드러운 사용자 경험을 제공합니다.",
        highlights: [
          "핵심 기여/성과를 여기에 입력해 주세요", // TODO
          "예: 미니게임 X종 개발",
          "예: 특정 기술 활용 내용",
        ],
      },
      tblshop: {
        title: "TBLSHOP",
        subtitle: "TBL 프로젝트",
        description:
          "카페24 기반의 TBL 공식 쇼핑몰 운영 및 유지보수. 프로모션 페이지 제작, 기능 개선, 버그 수정 등을 담당했습니다.",
        highlights: [
          "핵심 기여/성과를 여기에 입력해 주세요", // TODO
          "예: 특정 프로모션 페이지 제작",
          "예: 성능 개선 또는 기능 추가 내용",
        ],
      },
      "fandum-admin": {
        title: "팬덤앱 어드민",
        subtitle: "TBL 프로젝트",
        description:
          "TBL 팬덤 애플리케이션의 관리자 대시보드 운영 및 유지보수. 콘텐츠 관리, 사용자 관리, 데이터 시각화 기능을 담당했습니다.",
        highlights: [
          "핵심 기여/성과를 여기에 입력해 주세요", // TODO
          "예: 어드민 기능 개선 내용",
          "예: 관리 효율 향상 내용",
        ],
      },
      "tbl-sso": {
        title: "TBL SSO",
        subtitle: "TBL 프로젝트",
        description:
          "팬덤앱 2종과 TBLSHOP을 통합 관리하는 싱글 사인온(SSO) 통합회원 시스템. 인증/인가 흐름 개선 및 운영을 담당했습니다.",
        highlights: [
          "핵심 기여/성과를 여기에 입력해 주세요", // TODO
          "예: 통합 인증 플로우 개선",
          "예: 서비스 연동 안정화",
        ],
      },
      artbonbon: {
        title: "아트봉봉",
        description:
          "기존 서비스의 전면 개편 프로젝트. 새로운 아키텍처와 개선된 UX를 기반으로 서비스를 재구축하고 있습니다.",
        highlights: [
          "핵심 기여/성과를 여기에 입력해 주세요", // TODO
          "예: 개편 작업 주요 내용",
          "예: 신규 기술 도입 내용",
        ],
      },
    },
  },

  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      badge: "3-Year Frontend Developer",
      developerTitle: "Frontend Developer",
      bio: "A frontend developer who puts user experience first.", // TODO: replace with real bio
      cta: {
        projects: "View Projects",
        github: "GitHub",
        contact: "Contact Me",
      },
      scroll: "Scroll",
    },
    about: {
      sectionLabel: "About Me",
      heading: "Hello there",
      bio: [
        "I find fulfillment in crafting screens that real users interact with, and I strive for clean, readable code paired with intuitive interfaces.", // TODO: replace with real bio
        "Through diverse projects — from new development to maintenance and full redesigns — I've built the ability to quickly understand requirements and execute them effectively.",
        "I'm currently working on a full redesign of the Artbonbon service, constantly seeking ways to deliver a better user experience.",
      ],
      githubLabel: "GitHub",
      blogLabel: "Blog",
      careerLabel: "Career Timeline",
      timeline: [
        {
          period: "Apr 2026 — Present",
          company: "Artbonbon",
          role: "Frontend Developer",
          desc: "Full service redesign in progress",
        },
        {
          period: "Feb 2025 — Apr 2026",
          company: "TBL",
          role: "Frontend Developer",
          desc: "TBLSHOP, Fandom App Admin, TBL SSO — operations & maintenance",
        },
        {
          period: "Oct 2024 — Jan 2025",
          company: "Mini Game Project",
          role: "Frontend Developer",
          desc: "Web-based mini game platform development",
        },
        {
          period: "Nov 2023 — Sep 2024",
          company: "Daesung Computer",
          role: "Frontend Developer",
          desc: "New development of Pappy service",
        },
      ],
    },
    skills: {
      sectionLabel: "Skills",
      heading: "Tech Stack",
      categories: {
        frontend: "Frontend",
        tools: "Tools",
        capabilities: "Capabilities",
      },
    },
    projects: {
      sectionLabel: "Projects",
      heading: "Projects",
      subheading:
        "Projects I've participated in from 2023 to present. Private projects are introduced with key contributions only.",
      filter: {
        all: "All",
        new: "New Dev",
        maintenance: "Maintenance",
        redesign: "Redesign",
      },
      card: {
        private: "Private",
        ongoing: "Ongoing",
        liveDemo: "Live Demo",
        privateMsg: "This is a private project",
        roleLabel: {
          new: "New Dev",
          maintenance: "Maintenance",
          redesign: "Redesign",
        },
      },
    },
    contact: {
      sectionLabel: "Contact",
      heading: "Get In Touch",
      subheading:
        "I'm always open to new opportunities and collaborations.\nFeel free to reach out through any of the channels below.",
      builtWith: "Built with Next.js & Tailwind CSS",
    },
    projectsData: {
      daesungpappy: {
        title: "Daesung Pappy",
        description:
          "Developed the main service platform for Daesung Computer, implementing user-centered UI/UX and new features.",
        highlights: [
          "Add key contributions/achievements here", // TODO
          "e.g., Improved page load speed by X%",
          "e.g., Developed features A, B, C",
        ],
      },
      minigame: {
        title: "Mini Game",
        description:
          "A web-based gaming platform featuring various mini games, focusing on interactive UI and smooth user experience.",
        highlights: [
          "Add key contributions/achievements here", // TODO
          "e.g., Developed X mini games",
          "e.g., Specific technical implementations",
        ],
      },
      tblshop: {
        title: "TBLSHOP",
        subtitle: "TBL Project",
        description:
          "Operations and maintenance of TBL's official Cafe24-based online shop, including promotion pages, feature improvements, and bug fixes.",
        highlights: [
          "Add key contributions/achievements here", // TODO
          "e.g., Created promotion landing pages",
          "e.g., Performance improvements or new features",
        ],
      },
      "fandum-admin": {
        title: "Fandom App Admin",
        subtitle: "TBL Project",
        description:
          "Operations and maintenance of the admin dashboard for TBL's fandom application, handling content management, user management, and data visualization.",
        highlights: [
          "Add key contributions/achievements here", // TODO
          "e.g., Admin feature improvements",
          "e.g., Management efficiency gains",
        ],
      },
      "tbl-sso": {
        title: "TBL SSO",
        subtitle: "TBL Project",
        description:
          "Single Sign-On integrated membership system managing two fandom apps and TBLSHOP under one roof. Responsible for auth flow improvements and operations.",
        highlights: [
          "Add key contributions/achievements here", // TODO
          "e.g., Improved unified authentication flow",
          "e.g., Service integration stabilization",
        ],
      },
      artbonbon: {
        title: "Artbonbon",
        description:
          "Full redesign of an existing service. Rebuilding the platform based on a new architecture and improved UX.",
        highlights: [
          "Add key contributions/achievements here", // TODO
          "e.g., Key redesign work",
          "e.g., New technology adoption",
        ],
      },
    },
  },
};

export type Translations = typeof translations["ko"] | typeof translations["en"];
