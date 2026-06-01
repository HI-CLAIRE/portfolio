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
      bio: "책임감 있게 완성하고, 팀과 함께 성장하는 프론트엔드 개발자입니다.",
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
        "결제 시스템·인증·운영 자동화까지, 맡은 기능을 끝까지 책임지고 완성하는 것을 중요하게 생각합니다.",
        "신규 개발부터 운영·유지보수, 서비스 개편까지 다양한 성격의 프로젝트를 경험하며 요구사항을 빠르게 파악하고 실행하는 능력을 키워왔습니다. 미니게임 개발에서 커머스 운영, SSO 인증, 서비스 개편까지 — 새로운 도메인과 기술 스택을 빠르게 학습해 즉시 성과를 내왔습니다.",
        "현재는 아트봉봉 서비스 전면 개편에 참여하며, 더 나은 사용자 경험과 안정적인 아키텍처를 만들기 위해 고민하고 있습니다.",
      ],
      githubLabel: "GitHub",
      blogLabel: "Blog",
      companyLabel: "재직",
      presentLabel: "재직중",
      educationLabel: "학력",
      trainingLabel: "교육",
      careerLabel: "Career Timeline",
      timeline: [
        {
          period: "2026.04 — 현재",
          company: "아트봉봉",
          role: "프론트엔드 개발자",
          desc: "기존 서비스 전면 개편 진행 중 (Nx 모노레포, NestJS + Next.js 16)",
        },
        {
          period: "2025.05 — 2026.04",
          company: "더블랙레이블(TBL)",
          role: "프론트엔드 개발자",
          desc: "TBLSHOP 커머스, 팬덤앱 어드민, TBL SSO 통합회원, 브랜드사이트 운영·개편",
        },
        {
          period: "2024.12 — 2025.05",
          company: "미니게임 프로젝트",
          role: "프론트엔드 개발자",
          desc: "PixiJS 기반 웹 미니게임 플랫폼 신규 개발 (3개 게임 전 과정 총괄)",
        },
        {
          period: "2023.12 — 2024.10",
          company: "대성전산",
          role: "프론트엔드 개발자",
          desc: "파피 서비스 신규 개발, 어드민, FAN-G 프로토타입 개발",
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
      labels: {
        i18n: "i18n (다국어)",
        performance: "성능 최적화",
        deployment: "배포 자동화",
        accessibility: "웹 접근성 준수",
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
          "도서 제작·주문·결제 플랫폼 파피(paffy.co.kr) 신규 개발과 어드민 시스템 구축을 담당했습니다. 결제 시스템 설계부터 성능 최적화, 반응형 리드까지 폭넓은 역할을 수행했습니다.",
        highlights: [
          "결제 시스템 설계·개발 주도 — PG사(헥토파이낸셜) 연동, APP Route Handler로 콜백 리디렉션 구현 및 결제 예외 케이스 기획·서버팀과 협의 해결",
          "웹폰트 2.9MB → 11.6kB (약 250배 절감), 로딩 594ms → 2ms 단축 / 이미지 최적화로 메인 페이지 렌더링 최대 8초 개선",
          "어드민 초기 세팅 및 react-hook-form 도입으로 폼 유효성 개발 공수 절감 / 106건 기획 변경·75건 QA 이슈 신속 대응",
        ],
      },
      fang: {
        title: "FAN-G",
        description:
          "4주라는 제한된 기간 내에 메인홈·갤러리·컬러피커 등 핵심 페이지를 개발하고 proto-type 시연을 성공적으로 완료한 프로젝트입니다.",
        highlights: [
          "4주 내 4개 핵심 페이지 개발 및 proto-type 시연 완료 (메인홈·갤러리·컬러피커 등)",
          "next/image 활용으로 이미지 용량 최대 96.22% 절감",
          "SVG sprite 도입으로 53개 파일 → 2개 파일 통합 / 초기 세팅·기술 명세서 작성으로 협업 효율화",
        ],
      },
      minigame: {
        title: "미니게임",
        description:
          "PixiJS 기반 웹 미니게임 플랫폼을 레퍼런스 리서치부터 기획·개발·QA·배포까지 전 과정을 총괄했습니다. Cat Dive, Match Up, Perfect Fruits 등 3개 게임을 제작했습니다.",
        highlights: [
          "React Pixi·Matter.js·OpenCV.js를 검증·활용하여 Cat Dive·Match Up·Perfect Fruits 3개 게임 전 과정 총괄 개발",
          "FE 아키텍처 리서치 및 객체지향 설계 문서화로 향후 유지보수 비용 절감 기반 마련",
          "신규 게임개발팀 온보딩 지원 — React-Pixi 구조·물리엔진 패턴 코드 리뷰로 즉시 생산 가능 환경 조성",
        ],
      },
      brandsite: {
        title: "브랜드사이트 개편",
        description:
          "Azure 환경의 Next.js 브랜드사이트 전반을 개편·안정화했습니다. 반복적이고 오류 잦은 수동 배포 프로세스를 자동화하여 운영 효율을 크게 개선했습니다.",
        highlights: [
          "배포 프로세스 자동화 — 20개 이상 수동 명령어를 쉘스크립트 3종으로 7단계 단축, CLI 휴먼 에러 최소화",
          "전체 배포 절차·인증서 교체 작업 문서화로 신규 작업자 즉시 배포 가능 환경 구축",
          "QA 수행·SEO 최적화·서버 설정 등 운영 환경 전반 안정화 및 전체 UI 개선·정보 업데이트",
        ],
      },
      tbl: {
        title: "더블랙레이블 (TBL)",
        description:
          "TBLSHOP 커머스, 팬덤앱 어드민(Churrrrr·DAYOFF), TBL SSO 통합회원 등 4개 시스템을 운영·유지보수하며 멤버십 구매 시스템 신규 구축과 글로벌 다국어 대응을 주도했습니다.",
        highlights: [
          "cafe24 제약 환경에서 앱 연동형 멤버십 구현 — 4개 시스템(TBLShop·SSO·Churrrrr·DAYOFF) 간 데이터 연동 설계·안정화, MEOVV·ADP 멤버십 성공 오픈",
          "한·중·일·영 4개 언어 다국어 지원 체계 구축 및 회원가입 디바운싱·전화번호 유효성 등 다수 UX 이슈 발굴·개선",
          "ADMIN 이벤트 관리·계정 관리 페이지 개발 및 QR 체크인 구현 / 8개 이상 아티스트 페이지 추가·업데이트",
        ],
      },
      artbonbon: {
        title: "아트봉봉",
        description:
          "기존 서비스를 Nx 모노레포 기반으로 전면 개편 중입니다. NestJS 백엔드와 Next.js 16 프론트엔드를 함께 구축하며 교육 플랫폼에 맞는 아키텍처를 설계하고 있습니다.",
        highlights: [
          "Nx 모노레포 기반 NestJS(백엔드) + Next.js 16(프론트엔드) 풀스택 아키텍처 신규 구축",
          "Radix/shadcn 기반 디자인 시스템 구축 및 교사·학생 대시보드 개발",
          "Toss Payments 구독 결제 시스템 연동, AWS CDK + SST 기반 인프라 설계 (진행 중)",
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
      bio: "A frontend developer who takes full ownership and grows alongside the team.",
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
        "Whether it's payment systems, authentication, or deployment automation — I take full ownership of the features I'm responsible for and see them through to completion.",
        "Through diverse projects spanning new development, operations, and full redesigns — from mini-game platforms to e-commerce, SSO auth, and service overhauls — I've built the ability to quickly pick up new domains and tech stacks and deliver results immediately.",
        "I'm currently working on a full redesign of the Artbonbon service, focused on building a better user experience and a more stable architecture.",
      ],
      githubLabel: "GitHub",
      blogLabel: "Blog",
      companyLabel: "Company",
      presentLabel: "Current",
      educationLabel: "Education",
      trainingLabel: "Training",
      careerLabel: "Career Timeline",
      timeline: [
        {
          period: "Apr 2026 — Present",
          company: "Artbonbon",
          role: "Frontend Developer",
          desc: "Full service redesign in progress (Nx monorepo, NestJS + Next.js 16)",
        },
        {
          period: "May 2025 — Apr 2026",
          company: "THE BLACK LABEL (TBL)",
          role: "Frontend Developer",
          desc: "TBLSHOP commerce, fandom app admin, TBL SSO, brand site — operations & improvements",
        },
        {
          period: "Dec 2024 — May 2025",
          company: "Mini Game Project",
          role: "Frontend Developer",
          desc: "PixiJS-based web mini-game platform — 3 games from concept to deployment",
        },
        {
          period: "Dec 2023 — Oct 2024",
          company: "Daesung Computer",
          role: "Frontend Developer",
          desc: "Pappy service new development, admin system, FAN-G prototype development",
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
      labels: {
        i18n: "i18n (Internationalization)",
        performance: "Performance Optimization",
        deployment: "Deployment Automation",
        accessibility: "Web Accessibility (WCAG)",
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
          "Led new development of Pappy (paffy.co.kr), a book production and ordering platform, along with its admin system. Handled everything from payment system design to performance optimization and responsive development.",
        highlights: [
          "Led payment system design & development — PG (HectoFinancial) integration, APP Route Handler for callback redirects, collaborated with planning & server teams to resolve edge cases",
          "Web font: 2.9MB → 11.6kB (~250x reduction), load time 594ms → 2ms / Image optimization cut main page render time by up to 8 seconds",
          "Admin initial setup & react-hook-form adoption to reduce form validation effort / Handled 106 planning changes & 75 QA issues",
        ],
      },
      fang: {
        title: "FAN-G",
        description:
          "Successfully developed key pages — main home, gallery, color picker — and delivered a working prototype within just 4 weeks under tight resource constraints.",
        highlights: [
          "Developed 4 core pages and delivered a complete prototype demo within 4 weeks",
          "Reduced image size by up to 96.22% using next/image optimization",
          "Adopted SVG sprite to consolidate 53 files into 2 / Improved team collaboration via initial setup and technical specification documentation",
        ],
      },
      minigame: {
        title: "Mini Game",
        description:
          "Took full ownership of a PixiJS-based web mini-game platform — from research and planning through development, QA, and deployment. Delivered Cat Dive, Match Up, and Perfect Fruits.",
        highlights: [
          "Validated and applied React Pixi, Matter.js, and OpenCV.js to develop 3 games end-to-end: Cat Dive, Match Up, and Perfect Fruits",
          "Documented FE architecture research and OOP design to reduce future maintenance cost",
          "Supported onboarding of new game dev team — code reviews on React-Pixi structure & physics engine patterns enabled immediate productivity",
        ],
      },
      brandsite: {
        title: "Brand Site Redesign",
        description:
          "Redesigned and stabilized a Next.js brand site hosted on Azure. Significantly improved operational efficiency by automating the error-prone manual deployment process.",
        highlights: [
          "Automated deployment: reduced 20+ manual commands to 7 steps with 3 shell scripts, minimizing human error in the CLI",
          "Documented the full deployment process and certificate rotation steps to enable any new team member to deploy immediately",
          "Performed QA, SEO optimization, and server configuration to fully stabilize the production environment, plus overall UI improvements",
        ],
      },
      tbl: {
        title: "THE BLACK LABEL (TBL)",
        description:
          "Operated and maintained 4 systems — TBLSHOP commerce, fandom app admin (Churrrrr & DAYOFF), and TBL SSO. Led the new membership purchase system build and global multi-language support.",
        highlights: [
          "Built app-integrated membership in Cafe24's constrained environment — designed data sync across 4 systems (TBLShop, SSO, Churrrrr, DAYOFF), successfully launched MEOVV & ADP memberships",
          "Established 4-language (KO/EN/JA/ZH) i18n support and surfaced/resolved multiple UX issues including signup debouncing and phone number validation",
          "Developed event management & account management pages in ADMIN with QR check-in / Added and updated 8+ artist pages",
        ],
      },
      artbonbon: {
        title: "Artbonbon",
        description:
          "Full redesign of an existing education platform using an Nx monorepo architecture. Building the NestJS backend and Next.js 16 frontend together with a focus on scalability and user experience.",
        highlights: [
          "Building a full-stack architecture from scratch: NestJS (backend) + Next.js 16 (frontend) in an Nx monorepo",
          "Developing a design system based on Radix/shadcn and building teacher & student dashboards",
          "Integrating Toss Payments subscription billing and designing AWS CDK + SST infrastructure (in progress)",
        ],
      },
    },
  },
};

export type Translations = typeof translations["ko"] | typeof translations["en"];
