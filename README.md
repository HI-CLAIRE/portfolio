# Portfolio

3년차 프론트엔드 개발자 포트폴리오 사이트입니다.

## 기술 스택

- **Framework**: Next.js 16 (Static Export)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Language**: TypeScript
- **Deploy**: GitHub Pages (GitHub Actions)

## 로컬 실행

```bash
npm install
npm run dev
```

## 배포

`main` 브랜치에 push하면 GitHub Actions가 자동으로 빌드 후 GitHub Pages에 배포합니다.

### GitHub Pages 초기 설정

1. 저장소 Settings → Pages
2. Source: **GitHub Actions** 선택

### 저장소 이름에 따른 자동 basePath

- `username.github.io` 저장소 → 루트(`/`) 배포
- 그 외 저장소(예: `portfolio`) → `/portfolio` 경로로 자동 배포

## 개인 정보 업데이트

`data/projects.ts` 파일에서 아래 항목을 수정하세요.

- `personalInfo` — 이름, 이메일, GitHub URL, 한 줄 소개
- `projects` — 각 프로젝트의 배포 URL, 기술 스택, 핵심 성과
- `skills` — 보유 기술 목록

## 프로젝트 스크린샷 추가

`public/images/` 폴더에 이미지를 넣고, `data/projects.ts`의 `imageUrl` 필드를 업데이트하세요.
