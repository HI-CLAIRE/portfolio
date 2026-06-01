export type Visibility = "public" | "private";
export type Role = "new" | "maintenance" | "redesign";

export interface LiveLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  period: string;
  techStack: string[];
  role: Role;
  visibility: Visibility;
  liveUrl?: string;
  liveLinks?: LiveLink[];
  imageUrl?: string;
  status?: "ongoing";
}

export const projects: Project[] = [
  // 1. 다중 시스템 연동·국제화·멤버십 런칭 — 비즈니스 임팩트 최대
  {
    id: "tbl",
    period: "2025.05 — 2026.04",
    techStack: [
      "Next.js 14",
      "TypeScript",
      "MUI",
      "TanStack Query",
      "Zustand",
      "i18next",
      "Cafe24",
      "Zod",
    ],
    role: "maintenance",
    visibility: "public",
    liveLinks: [
      { label: "TBLSHOP", url: "https://tblshop.com/" },
      { label: "Churrrrr (App)", url: "https://play.google.com/store/apps/details?id=com.theblacklabel.fandom&hl=ko" },
      { label: "DAY OFF (App)", url: "https://play.google.com/store/apps/details?id=com.theblacklabel.fandom.dayoff&hl=ko" },
    ],
  },
  // 2. 풀스택·모노레포·AWS 인프라 — 현재 진행형, 가장 현대적 스택
  {
    id: "artbonbon",
    period: "2026.04 — 현재",
    techStack: [
      "Next.js 16",
      "NestJS",
      "TypeScript",
      "Tailwind CSS",
      "Nx",
      "TanStack Query",
      "Jotai",
      "AWS CDK",
      "Toss Payments",
    ],
    role: "redesign",
    visibility: "public",
    liveUrl: "https://art-bonbon.com/",
    status: "ongoing",
  },
  // 3. PG 결제 설계·성능 최적화 — 수치 기반 성과 명확
  {
    id: "daesungpappy",
    period: "2023.12 — 2024.10",
    techStack: [
      "Next.js 13",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "Sass",
      "React Hook Form",
      "MUI",
      "Recoil",
    ],
    role: "new",
    visibility: "public",
    liveUrl: "https://www.paffy.co.kr/",
  },
  // 4. PixiJS·물리엔진 — 희소성 높은 게임 개발 경험
  {
    id: "minigame",
    period: "2024.12 — 2025.05",
    techStack: ["TypeScript", "PixiJS", "React", "Vite", "Yarn Workspaces", "Matter.js"],
    role: "new",
    visibility: "private",
  },
  // 5. 배포 자동화·Azure — DevOps 감각 어필
  {
    id: "brandsite",
    period: "2025.04 — 2025.07",
    techStack: ["Next.js", "TypeScript", "Azure", "Shell Script"],
    role: "redesign",
    visibility: "public",
    liveUrl: "https://genesisnest.com/ko",
  },
  // 6. 4주 프로토타입·이미지 최적화
  {
    id: "fang",
    period: "2024.08 — 2024.11",
    techStack: ["Next.js", "TypeScript", "SVG Sprite"],
    role: "new",
    visibility: "private",
  },
];

export const skills = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Sass/SCSS",
    "MUI (Material UI)",
  ],
  tools: [
    "Git",
    "GitHub",
    "Figma",
    "Vite",
    "Nx / Turbo",
    "Azure",
    "AWS CDK",
  ],
  etc: [
    "PixiJS",
    "TanStack Query",
    "React Hook Form",
    "i18n",
    "performance",
    "deployment",
    "accessibility",
  ],
};

export const personalInfo = {
  name: "김규연",
  nameEn: "Claire Kim",
  github: "https://github.com/HI-CLAIRE",
  email: "claire3320@gmail.com",
  linkedin: "",
  blog: "https://hi-claire.tistory.com/",
};

export const company = {
  name: "제네시스네스트",
  nameEn: "GenesisNest",
  period: "2023.12 — 현재",
  periodEn: "Dec 2023 — Present",
};

export const education = [
  {
    institution: "연세대학교 미래캠퍼스",
    institutionEn: "Yonsei University (Mirae Campus)",
    major: "화학및의화학과 (전공) · 중어중문학과 (이중전공)",
    majorEn: "Chemistry & Medical Chemistry (Major) · Chinese Language & Literature (Double Major)",
    period: "2017.03 — 2022.08",
  },
];

export const training = [
  {
    name: "삼성 청년 SW 아카데미 8기",
    nameEn: "Samsung SW Academy For Youth (SSAFY) 8th",
    detail: "수료",
    detailEn: "Completed",
    period: "2022.07 — 2023.06",
  },
  {
    name: "42Seoul",
    nameEn: "42Seoul",
    detail: "",
    detailEn: "",
    period: "2022.01 — 2022.05",
  },
];
