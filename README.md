# Hadevyi.github.io

`hadevyi.github.io`는 당현아의 메인 개인 홈페이지 저장소입니다.  
이 사이트는 `resume`, `portfolio`, `experience`, `blog`를 하나의 정적 멀티페이지 구조로 연결하는 공식 홈페이지 역할을 합니다.

## 기술 스택

- `Astro`
- `TypeScript`
- `Tailwind CSS v4`
- `MDX`
- `Astro Content Collections`
- `GitHub Actions + GitHub Pages`

## 주요 라우트

- `/`: 공식 홈페이지
- `/resume/`: 이력서형 요약 페이지
- `/portfolio/`: 프로젝트 목록 및 상세 페이지
- `/experience/`: 경험 정리 및 성장 기록
- `/blog/`: 블로그 목록 및 글 상세 페이지

## 로컬 실행

이 프로젝트는 `Node.js 22.12+` 이상이 필요합니다.

```bash
npm install
npm run dev
```

## 스크립트

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 로컬 개발 서버 실행 |
| `npm run build` | 정적 사이트 빌드 |
| `npm run preview` | 빌드 결과 미리보기 |
| `npm run check` | Astro 타입 및 라우트 검증 |

## 배포

- `.github/workflows/deploy.yml`에 GitHub Pages 배포 워크플로가 포함되어 있습니다.
- GitHub 저장소 설정에서 `Pages > Source`를 `GitHub Actions`로 바꾸면 됩니다.
- 이 저장소는 `username.github.io` 패턴이므로 `base` 설정 없이 루트 경로(`/`)에 배포됩니다.

## 나중에 붙일 환경 변수

필요할 때 GitHub Actions 또는 로컬 환경에 아래 값을 추가하면 됩니다.

- `PUBLIC_GA_ID`: Google Analytics 측정 ID
- `PUBLIC_GOOGLE_SITE_VERIFICATION`: Search Console 메타 태그 값
