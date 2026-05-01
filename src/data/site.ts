export const siteMeta = {
  title: 'Hadevyi',
  brand: '당현아 공식 홈페이지',
  subtitle: '이력서와 작업 기록을 연결하는 메인 홈페이지',
  tagline: '당현아의 작업과 기록을 연결하는 공식 홈페이지',
  description:
    '당현아의 이력서, 포트폴리오, 경험 정리, 블로그를 독립 GitHub Pages 사이트로 연결하는 공식 홈페이지입니다.',
  siteUrl: 'https://hadevyi.github.io/',
  rootPath: '/',
  repoUrl: 'https://github.com/hadevyi/hadevyi.github.io'
} as const;

export const sectionSites = [
  {
    href: '/resume/',
    label: '이력서',
    description: '압축된 경력 요약과 현재 집중 영역을 빠르게 보여주는 독립 사이트',
    repo: 'hadevyi/resume',
    urlLabel: 'hadevyi.github.io/resume/'
  },
  {
    href: '/portfolio/',
    label: '포트폴리오',
    description: '프로젝트 배경, 설계 과정, 결과를 케이스 스터디로 정리하는 독립 사이트',
    repo: 'hadevyi/portfolio',
    urlLabel: 'hadevyi.github.io/portfolio/'
  },
  {
    href: '/experience/',
    label: '경험 정리',
    description: '성장 흐름과 운영 기준을 시간 맥락에 맞춰 풀어내는 독립 사이트',
    repo: 'hadevyi/experience',
    urlLabel: 'hadevyi.github.io/experience/'
  },
  {
    href: '/blog/',
    label: '블로그',
    description: '긴 글과 기술 메모, 설계 기록을 남기는 독립 블로그 사이트',
    repo: 'hadevyi/blog',
    urlLabel: 'hadevyi.github.io/blog/'
  }
] as const;

export const mainNav = [
  {
    href: '/',
    label: '홈',
    description: '공식 홈페이지 메인 화면'
  },
  {
    href: '/resume/',
    label: '이력서',
    description: '빠르게 훑는 경력 요약과 현재 집중 영역'
  },
  {
    href: '/portfolio/',
    label: '포트폴리오',
    description: '프로젝트 구조와 결과를 보여주는 케이스 스터디'
  },
  {
    href: '/experience/',
    label: '경험 정리',
    description: '시간 흐름에 따라 정리한 성장 서사와 작업 방식'
  },
  {
    href: '/blog/',
    label: '블로그',
    description: '기술 기록, 설계 메모, 장기적인 학습 아카이브'
  },
  {
    href: 'https://github.com/hadevyi',
    label: 'GitHub',
    description: '전체 저장소와 작업 기록',
    external: true
  }
] as const;

export const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/hadevyi'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hadevyi/'
  }
] as const;
