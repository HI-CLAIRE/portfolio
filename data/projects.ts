export type Visibility = "public" | "private";
export type Role = "new" | "maintenance" | "redesign";

export interface Project {
  id: string;
  period: string;
  techStack: string[];
  role: Role;
  visibility: Visibility;
  liveUrl?: string;
  imageUrl?: string;
  status?: "ongoing";
}

export const projects: Project[] = [
  {
    id: "daesungpappy",
    period: "2023.11 — 2024.09",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    role: "new",
    visibility: "public",
    liveUrl: "https://example.com", // TODO: 실제 배포 URL로 교체
  },
  {
    id: "minigame",
    period: "2024.10 — 2025.01",
    techStack: ["JavaScript", "HTML5 Canvas"], // TODO: 실제 기술스택으로 교체
    role: "new",
    visibility: "private",
  },
  {
    id: "tblshop",
    period: "2025.02 — 2026.04",
    techStack: ["JavaScript", "HTML/CSS", "Cafe24", "Liquid"],
    role: "maintenance",
    visibility: "public",
    liveUrl: "https://example.com", // TODO: 실제 카페24 쇼핑몰 URL로 교체
  },
  {
    id: "fandum-admin",
    period: "2025.02 — 2026.04",
    techStack: ["React", "TypeScript"], // TODO: 실제 기술스택으로 교체
    role: "maintenance",
    visibility: "private",
  },
  {
    id: "tbl-sso",
    period: "2025.02 — 2026.04",
    techStack: ["React", "TypeScript"], // TODO: 실제 기술스택으로 교체
    role: "maintenance",
    visibility: "private",
  },
  {
    id: "artbonbon",
    period: "2026.04 — 현재",
    techStack: ["React", "TypeScript", "Next.js"], // TODO: 실제 기술스택으로 교체
    role: "redesign",
    visibility: "private",
    liveUrl: "https://example.com", // TODO: 기존 서비스 URL로 교체
    status: "ongoing",
  },
];

export const skills = {
  frontend: [
    "React",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "Vue.js", // TODO: 실제 기술스택으로 교체/수정
    "HTML5",
    "CSS3",
    "Tailwind CSS",
  ],
  tools: [
    "Git",
    "GitHub",
    "Figma",
    "Vite",
    "Webpack",
    // TODO: 실제 사용 툴로 교체/수정
  ],
  etc: [
    "REST API",
    "Responsive Design",
    "Cross-browser Compatibility",
    // TODO: 실제 역량으로 교체/수정
  ],
};

export const personalInfo = {
  name: "YOUR NAME", // TODO: 실제 이름으로 교체
  nameEn: "Your Name", // TODO: 영문 이름으로 교체
  github: "https://github.com/yourusername", // TODO: 실제 GitHub URL로 교체
  email: "your@email.com", // TODO: 실제 이메일로 교체
  linkedin: "", // TODO: LinkedIn URL (선택)
  blog: "", // TODO: 블로그/노션 URL (선택)
};
