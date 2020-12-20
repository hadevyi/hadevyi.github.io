---
title: "[A to Z] Github Blog Jekyll minimal mistakes"
categories:
  - A_to_Z
tags:
  - minimal mistakes
  - jekyll
  - blog
  - favicon
  - disqus
  - google analytics
toc: true
toc_sticky: true
toc_label: "GITHUB BLOG JEKYLL"
---

💡 **A to Z**는 개별적으로 작성한 게시글을 한 번에 볼 수 있게 정리하였습니다.<br>
사용의 팁이나 고려하면 좋은 사항 등의 부가설명은 생략되고, 핵심 내용만 넣었습니다.<br>
상세한 설명과 관련 이야기(시행착오 및 전처리 작업 등)는 개별 포스트에 있습니다.<br>
{: .notice--warning}

# [00] Github Blog A to Z

1. [기본 세팅](https://eona1301.github.io/github_blog/GithubBlog-Start/) : Ruby, Jekyll, minimal-mistakes 테마 적용, github repo 생성, 로컬 서버로 블로그 실행
2. [기본 데이터 입력](https://eona1301.github.io/github_blog/GithubBlog-config/) : 블로그 기본 정보(_config.yml), 좌측/하단 프로필, 출력 게시물 개수 조정, Default post/page 설정
3. [카테고리 설정](https://eona1301.github.io/github_blog/GithubBlog-Category/) : 카테고리(navigation.yml) 수정, 원하는 페이지 양식 찾는 방법, toc 여부, 고정방법, 이름 변경
4. [본문 영역 조절](https://eona1301.github.io/github_blog/GithubBlog-Content-Width/) : 본문 영역 넓히기, 사이드바 좁히기, 글자 조정하기, 하이퍼링크 밑줄 제거하기
5. [파비콘 세팅](https://eona1301.github.io/github_blog/GithubBlog-Favicon/) : 웹사이트 아이콘 선택, icon만들기, 깃헙 블로그 적용하기(custom.html 수정하기)
6. [블로그 포스팅해보기](https://eona1301.github.io/github_blog/GithubBlog-Posting/) : minimal-mistakes 포스팅 양식 확인하기, 자주 사용하는 포스터 내용 문법 확인하기
7. [댓글 기능 추가하기](https://eona1301.github.io/github_blog/GithubBlog-Comment/) : DISQUS 가입하기, Shortname 찾기, _config 반영하기, 시범 댓글 확인
8. [방문자 통계하기](https://eona1301.github.io/github_blog/GithubBlog-Analytics/) : Google Analytics 가입하기, tranking ID 찾기, _config 반영하기, 결과 확인하기
<br>

# [01] 기본 세팅

## 기본 환경

### Ruby 세팅
<br>

[Ruby for Windows](https://rubyinstaller.org/downloads/) 링크에 접속하여, 아래 화면과 같은 목록을 확인합니다.

![ruby_download](https://user-images.githubusercontent.com/45550607/102007643-2fa56f00-3d6e-11eb-969c-74a5e722b2c8.png)

여기서 가장 중요한 것은 **Jekyll은 32bit**이기에, 설치시 (x64)가 아닌 **(x86)**으로 진행해야합니다.<br>
이는 초기 설정시 제일 빈번하게 발생하는 세팅 오류이기 때문에, 꼭 신경써서 설치해주셔야 합니다.
<br>
<br>

### Jekyll 세팅
<br>

```
gem install jekyll
```
이와 같은 명령어를 명령 프롬프트(CMD) 창에서 입력해줍니다.<br>
이러면 기본적인 세팅이 모두 완료되셨습니다!<br>

`ruby -v`과 `jekyll -v`로 정상적으로 설치되었는지 확인해주세요 :)

<br>
<br>

## minimal-mistakes 테마

- [minimal-mistakes theme 공식 홈페이지](https://mmistakes.github.io/minimal-mistakes/)
- [minimal-mistakes 가이드](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/)
- [minimal-mistakes Github Link](https://github.com/mmistakes/minimal-mistakes)
<br>

<div align=right>(🔺많이 참고했던 공식 홈페이지입니다! 원문이라 낯설지만 왠만한건 다 적혀있습니다.)</div>
<br>

![image](https://user-images.githubusercontent.com/45550607/101988362-76e31f80-3cdc-11eb-9dee-8addd2f02882.png)

우측 상단에 있는 녹색 버튼에서 code repo의 link를 복사하셔서, clone 받아주세요.<br>
압축을 푸시면 다음과 같은 내용을 볼 수 있습니다.<br>
(clone 받으실 수 있는 Repo는 minimal-mistakes Github Link라고 정리한 곳을 확인하면 보실 수 있습니다!)

![image](https://user-images.githubusercontent.com/45550607/102005471-5a86c780-3d5c-11eb-8ad4-bc5fd466ed57.png)

여기서 제일 중요한 건 이걸 다 쓸건 아니에요! ㅎㅎ<br>
<span color=red>빨간색</span>은 그냥 지우셔도 되는 파일입니다!<br>
<span color=green>초록색</span>은 따로 남겨두셨다가, 포스팅 양식 등을 확인할 수 있는 내용입니다!

docs 내부의 _pages 폴더는 추후 상단의 카테고리를 선택할 수 있는 양식이라, 최상단으로 이동해주시면 좋습니다.
<br>
<br>

## Github-Blog Repository 만들기

github에서 repository를 만드는 것은 지금까지 한 것보다 더 간단하겠죠! ㅎㅎ<br>

![image](https://user-images.githubusercontent.com/45550607/102006140-1b5b7500-3d62-11eb-8e07-6b51fd1341fb.png)

Github ID .github.io 의 형식으로 Repo를 만들어주신 후,<br>
지금까지 정리한 모든 사항을 push 해주시면 되겠습니다!<br>
이제 Github ID .github.io 의 링크에서 개발하신 minimal-mistakes 테마가 적용된 걸 확인하실 수 있습니다.<br>
<br>
<br>

## 로컬 서버 실행

<br>
![image](https://user-images.githubusercontent.com/45550607/102006653-eb15d580-3d65-11eb-9030-e520e1eba53c.png)<br>
<br>
지금과 같은 형식은 이렇습니다. (_posts와 image 폴더는 추후에 다시 설명드릴 예정입니다!)<br>
이 상태에서는 로컬 서버에서 확인하실 수가 없습니다.<br>
<b>현재의 repo의 폴더에서 명령프롬프트(CMD)창을 여시면 됩니다!</b><br><br>
```
gem install bundler
bundle exec jekyll serve
```
이를 순차적으로 입력하시면, `.jekyll-cache` 폴더와 `Gemfile.lock` 파일이 생깁니다.<br>
이 두가지가 정상적으로 생기셔야만, 로컬 서버에 연결하실 수가 있습니다.<br>
<br>
![image](https://user-images.githubusercontent.com/45550607/102006801-46949300-3d67-11eb-946a-ea4297b05723.png)
<br>
<br>
`Server running... press ctrl-c to stop.`으로 된다면 정상적으로 열렸습니다.<br>

[http://127.0.0.1:4000](http://127.0.0.1:4000) 으로 바로 확인해보세요.<br>
확인하시는 중에는 CMD창을 종료하시면 안됩니다!<br>
모든 Repo의 변동사항을 확인해서 Serve에서 바로 확인하실 수 있습니다.<br>
<br>
<br>

# [02] 기본 데이터 입력

- 수정 파일 : github.io 폴더 > _config.yml
<br>

```yml
minimal_mistakes_skin    : "default"  # 전체적인 블로그의 색감을 정하는 값입니다.
                           # "default" "air", "aqua", "contrast", "dark"
                           # "dirt", "neon", "mint", "plum", "sunrise"

# Site Settings
locale                   : "ko-KR"    # 블로그의 주요 언어입니다. 한국어로 보려고 ko-KR로 설정했습니다.
title                    : "정리가 재밌는 개발자 Blog"  # 사이트 탭에서 보이는 이름입니다.
title_separator          : "-"
subtitle                 : "version 1.0"              # 화면 title 하단에 있는 소제목입니다.
name                     : "당현아(Dang Hyeona)"      # 화면 하단 영역의 이름입니다.
description              : "매일 반복하는 공부 습관"   # 설명란입니다. (어디 적용되는지 모르겠네요...) 
url                      : "https://eona1301.github.io" # 현재의 블로그 url 입니다.
baseurl                  : # 폴백(예기치 못한 오류)일 때 연결되는 url입니다.
repository               : "https://github.com/eona1301/eona1301.github.io" # Github Repo url입니다.
teaser                   : # 폴백일 때 보일 이미지입니다. "assets/images/"로 연결됩니다.
logo                     : # 화면에 보여지는 logo 이미지입니다. "assets/images"로 세팅합니다.
masthead_title           : "정리가 재밌는 개발자"     # 화면 title 입니다.
```
<br>
블로그 전반의 기본 사항들입니다. 순서와는 무관하게 설명을 잘 참고해주세요!<br>
모두 다 수정하실 필요는 없습니다. 상세한 내용은 위의 코드를 확인해주세요.<br>
주석아 아닌 부분은 실제로 제가 적용한 코드입니다. 참고하면서 적용해보세요!<br>
구절을 적용해보시면서 로컬 서버에서 확인해보세요!<br>

[http://127.0.0.1:4000](http://127.0.0.1:4000) 으로 확인하실 수 있습니다.
<br>
<br>

- 수정 파일 : github.io 폴더 > _config.yml
<br>
<br>

```yml
# Site Author
author:
  name             : "Dang Hyeona"                  # 이름 영역입니다.
  avatar           : "image/profile/2020me.jpg"     # 프로필 사진 경로입니다.
  bio              : "**기록이 자산!!**<br>매일 공부하고 있습니다.<br>소통을 좋아합니다."
                     # biography의 약칭으로, 자기소개를 적으시면 됩니다.
                     # 줄바꿈은 <br>로 굵은 글씨는 **글씨** 로 표기해주세요. 
  location         : "Republic of Korea"            # 지역 입니다. 
  email            : # 이메일 주소입니다. (links에서 작성할 수 있기 때문에 생략하였습니다.)
  links:
    - label: "Email"
      icon: "fas fa-fw fa-envelope-square"
      url: mailto:eona1301@email.com
    - label: "GitHub"
      icon: "fab fa-fw fa-github"
      url: "https://github.com/eona1301"
    - label: "Facebook"
      icon: "fab fa-fw fa-facebook-square"
      url: "https://www.facebook.com/eona1301"
    - label: "Instagram"                            # 표시되는 이름입니다.
      icon: "fab fa-fw fa-instagram"                # fab fa-fw fa-{SNS NAME} 으로 해주세요.
      url: "https://www.instagram.com/danghyeona/"  # 개인 SNS 계정 링크를 기재하면 됩니다.
```
<br>
블로그 좌측에서 보여지는 프로필의 영역입니다.<br>
바로 보여지다보니, 아무래도 많은 분들이 제일 먼저 신경쓰는 영역이 될 것 같습니다.<br>
저의 경우는 프로필 사진을 보관할 곳은 image라고 따로 만들어서 진행하였습니다만,<br>
원래 있는 assets의 폴더를 바로 활용해주셔도 괜찮습니다.<br>
사진의 경로와 확장자명(.png, .jpg 등)까지 명확히 기재해주세요!<br>
<br>
또한, email 기재 시 이메일 주소를 누르면 이메일 기재를 할 수 있도록 mailto: 를 붙여주셔야해요!<br>
<br>
<br>

- 수정 파일 : github.io 폴더 > _config.yml
<br>
<br>

```yml
# Site Footer
footer:
  links:
    - label: "Email"
      icon: "fas fa-fw fa-envelope-square"
      url: mailto:eona1301@email.com
    - label: "Twitter"
      icon: "fab fa-fw fa-twitter-square"
      # url:                                        # 이런식으로 url을 주석처리하면 노출되지 않습니다.
    - label: "Facebook"
      icon: "fab fa-fw fa-facebook-square"
      url: "https://www.facebook.com/eona1301"
    - label: "GitHub"
      icon: "fab fa-fw fa-github"
      url: "https://github.com/eona1301"
    - label: "GitLab"
      icon: "fab fa-fw fa-gitlab"
      # url:
    - label: "Bitbucket"
      icon: "fab fa-fw fa-bitbucket"
      # url:
    - label: "Instagram"
      icon: "fab fa-fw fa-instagram"
      url: "https://www.instagram.com/danghyeona/"
```
<br>
프로필의 맨 하단에 있는 footer의 기재사항입니다.<br>
좌측 프로필 영역과 동일한 데이터라 Ctrl C + Ctrl V만 하면 금방 만들어지는 영역입니다.<br>
기본 양식처럼 있는 영역이 대다수인데 사실 안하는 SNS가 더 많아서 url을 주석처리하면 노출되지 않습니다.<br>
<br>
프로필 영역과 동일하게, email 기재 시 이메일 주소를 누르면 이메일 기재를 할 수 있도록 mailto: 를 붙여주셔야해요!<br>
<br>
<br>

- 수정 파일 : github.io 폴더 > _config.yml
<br>
<br>

```yml
# Outputting
permalink: /:categories/:title/
paginate: 15                                    # Defaults : 5
paginate_path: /page:num/
timezone: # https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
```
코드 상 두번째 줄에 위치한 값 painate의 속성이 보여질 개수입니다.<br>
이걸 원하는 개수대로 고쳐주시면 되겠습니다.<br>
<br>

- 수정 파일 : github.io 폴더 > _config.yml
<br>
<br>

```yml
# Defaults
defaults:
  # _posts
  - scope:
      path: ""
      type: posts
    values:
      layout: single
      author_profile: true
      read_time: true
      comments: # true
      share: true
      related: true
  
  # _pages                      : 해당 하단 영역이 새로 추가되었습니다.
  - scope:
      path: "_pages"
      type: pages
    values:
      layout: single
      author_profile: true
```
<br>
앞서 참고하고자 하였던, Docs 폴더의 _config.yml를 모방했습니다!<br>
포스터 글을 업데이트하는데, 폴더화를 시켜서 파일 정리하는게 좋을 것같아 확인했습니다.<br>
필수 사항은 아니니 생략해주셔도 됩니다.<br>
<br>
<br>

# [03] 카테고리 설정하기

- 수정 파일 : github.io 폴더 > _data 폴더 > navigation.yml
<br>

```yml
# main links
main:
  #- title: "Home"
  #  url: "/"
  - title: "Introduce"
    url: /about/
  - title: "Category"
    url: "/categories/"
  - title: "Tags"
    url: /tags/
```
title은 화면에 보여지는 영역입니다. 여기에 기재하는 텍스트값대로 보여집니다.<br>
url은 _pages내에 정해져있는 양식 혹은 특정 링크로 연결해줍니다.<br>
<br>
_pages내의 양식을 그대로 활용하기 위해서는 특정한 permalink 를 알아야합니다.<br>
이 내용은 _pages 내의 상세한 내용에서 자세히 알려드리겠습니다!<br>
<br>
minimal mistakes의 대다수는 `/page name/` 으로 해소됩니다.<br>
<br>
<br>

## 원하는 page 수정

- 수정 파일 : github.io 폴더 > _pages 폴더 > 원하는 md 파일 (해당 예시는 about.md 입니다.)
<br>

```md
---
permalink: /about/
title: "About"
toc: true
toc_sticky: true
toc_label: "MYSELF"
---

![icon](/assets/logo.ico/apple-icon-120x120.png)

원하는 자기소개 상세 내용
```

### permalink 찾기

상단에 permalink 로 되어있는 내용을 그대로 차용해주시면 됩니다.<br>
title은 말그대로 제목입니다. 생략해주셔도 됩니다.<br>
<br>

### toc 다루기

![image](https://user-images.githubusercontent.com/45550607/102038539-dccdc500-3e0a-11eb-8620-d6d17092d2cf.png)<br>

toc는 Table of Contents의 약칭으로 모든 포스터의 우측에 적힐 수 있는 내용입니다.<br>
필수 사항은 아니라서 toc, toc_sticky, toc_label 모두 생략하셔도 됩니다.<br>
<br>
하지만 설명하는 내용이 길어질수록, 원하는 정보를 찾고자하는 사용자가 불편하겠죠?<br>
저는 무조건 스크롤이 생기는 내용이라면 toc를 사용합니다.

- toc : 목차 (클릭 시 화면 이동까지 가능)
- toc_sticky : true로 만들어주면, 화면을 옮겨도(스크롤을 해도) 항상 우측 상단에 고정되어있습니다.
- toc_label : toc의 제목입니다. 지정하지 않으면 MY PAGE과 같은 기본값으로 보입니다.
<br>
<br>
<br>

# [04] 본문 관련 설정하기

## WIDTH 조절하기

- 수정 파일 : github.io 폴더 > _sass 폴더 > _minimal-mistakes 폴더 > _variables.scss

```scss
/*
   Grid
   ========================================================================== */

$right-sidebar-width-narrow: 100px !default;    // default 200px
$right-sidebar-width: 200px !default;           // default 300px
$right-sidebar-width-wide: 250px !default;      // default 400px
```
현재의 코드는 _variables.scss 중에서도 거의 최하단에 있습니다.<br>
찾으실 때 무수한 코드를 다 내리지마시고, 제일 아래의 스크롤로 내리세요.<br>
본문에 너비를 직접적으로 넓히는게 아니라, 양쪽에 sidebar를 조절하는 방식입니다.<br>
각 기본 값은 200, 300, 400px이였지만 100, 200, 250px로 조절했습니다.<br>
혹시라도 돌려놓고 싶을까봐 주석으로 남겨두었습니다!<br>
<br>
로컬 서버로 적용하는 범위를 확인해보시고, 원하시는 값으로 조정해보세요!
<br>
<br>

## BLOG FONT 조절하기

- 수정 파일 : github.io 폴더 > _sass 폴더 > _minimal-mistakes 폴더 > _reset.scss
<br>

```scss
html {
  /* apply a natural box layout model to all elements */
  box-sizing: border-box;
  background-color: $background-color;
  font-size: 16px;                    // Default 16px;

  @include breakpoint($medium) {
    font-size: 16px;                  // Default 18px;
  }

  @include breakpoint($large) {
    font-size: 16px;                  // Default 20px;
  }

  @include breakpoint($x-large) {
    font-size: 16px;                  // Default 22px;
  }

  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}
```
원 코드의 상단부(7번줄)에 있는 코드이기에 금방 찾으실 수 있으실 껍니다.<br>
전체적인 폰트의 기준은 없습니다!<br>
로컬 서버에서 직접 등록해보시면서, 원하시는 크키로 조정하시면 됩니다.<br>
<br>
<br>

## 하이퍼링크 밑줄 제거

- 수정 파일 : github.io 폴더 > _sass 폴더 > _minimal-mistakes 폴더 > _base.scss
<br>

```scss
a {
  text-decoration: none;                // 추가된 코드입니다.

  &:focus {
    @extend %tab-focus;
  }

  &:visited {
    color: $link-color-visited;
  }

  &:hover {
    color: $link-color-hover;
    outline: 0;
  }
}
```
base 파일의 중반부(127번줄)에 있습니다.<br>
찾기 힘드실 때는 Ctrl + F를 통해 `a{` 를 검색하셔서 확인해보세요! <br>
이후 하이퍼링크 처리와 관련된 decoration을 해지해야하니 이를 전체에 적용될 수 있도록 추가해주시면 되겠습니다!<br>
<br>
<br>

# [05] 파비콘(웹 아이콘) 설정하기

[realfavicongenerator](https://realfavicongenerator.net/)에 접속해서 원하는 사진을 넣어주세요.

![image](https://user-images.githubusercontent.com/45550607/102049292-f2031d80-3e23-11eb-9b6a-ab656118915d.png)
{: .text-center}

그럼 이 코드를 보실 수 있습니다.<br>
이 코드를 활용해서 블로그에 적용해봅시다.<br>
<br>

- 수정 파일 : github.io 폴더 > _includes 폴더 > _head 폴더 > custom.html

```html
<!-- start custom head snippets -->

<!-- insert favicons. use https://realfavicongenerator.net/ -->
<link rel="apple-touch-icon" sizes="180x180" href="{{site.baseurl}}/assets/logo.ico/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="{{site.baseurl}}/assets/logo.ico/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="{{site.baseurl}}/assets/logo.ico/favicon-16x16.png">
<link rel="mask-icon" href="{{site.baseurl}}/assets/logo.ico/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff">

<!-- end custom head snippets -->
```
최종적으로 업데이트 된 코드는 이와 같습니다.<br>
처음 받은 코드와 다른 내용은 href의 영역 즉 상세 링크입니다.<br>
파일 이름 앞에 {{site.baseurl}}/assets/logo.ico 를 추가해주시면 됩니다.<br>

![image](https://user-images.githubusercontent.com/45550607/102050451-35f72200-3e26-11eb-930f-c1427a2271b3.png)
{: .text-center}

이렇게 최종적으로 적용된 모습을 확인하실 수 있습니다.
<br>
<br>

# [06] 블로그 포스팅 해보기

## 폴더 생성하기

- 생성 파일 : github.io 폴더 > _posts 폴더

![image](https://user-images.githubusercontent.com/45550607/102193457-737bae00-3eff-11eb-9176-b97e0a487715.png)
{: .text-center}

이전에 docs 파일을 참고하여, 포스팅 글을 정리할 폴더 _posts를 생성하였습니다.<br>
여기까지만 하면, 포스팅은 충분히 등록할 수 있습니다.<br>
<br>
<br>

## 포스터 양식 확인

docs의 post를 참고하면서 확인해보도록 하겠습니다.<br>

![image](https://user-images.githubusercontent.com/45550607/102197239-3239cd00-3f04-11eb-807a-b1cd7b720d87.png)
{: .text-center}

예시 포스터 입니다. 자세히 보시면 ---로 있는 구간이 있습니다.<br>
이 안에서 상세 내용을 정리하시면 됩니다.<br>
기본적인 양식을 설명해드리겠습니다.<br>
<br>
- <b>파일명</b> : YEAR_MONTH_DAY-title.md
- <b>내부양식</b>

|       name       |                                mean                                 |
| :--------------: | :------------------------------------------------------------------ |
|      title       | 실제 화면에 보이는 제목                                             |
|    categories    | 포스터의 소속 카테고리                                              |
|       tags       | 포스터 태그                                                         |
|       toc        | table of content의 약칭, 우측 상단의 목차                           |
|    toc_label     | toc의 이름                                                          |
|     toc_icon     | toc의 아이콘                                                        |
|    toc_sticky    | toc의 고정유무, 고정(true)시 스크롤에도 우측상단에 고정되게 보인다. |
| last_modified_at | 게시글 마지막 수정일, 포스터에는 년월일까지 보여집니다.             |

<br>
<br>
<br>

## 포스터 내용 작성

![image](https://user-images.githubusercontent.com/45550607/102203378-df641380-3f0b-11eb-811b-1ec83d95e420.png)
{: .text-center}

현재 해당 포스터 작성 화면입니다.<br>
좌측부터 Markdown 화면, Markdown 적용 화면, 로컬서버 적용 화면입니다.<br>
제가 했던 github log도 보고, 서칭을 통해 추가적으로 들어가면 좋은 내용이 있을지 확인합니다.<br>
<br>
예상하신 것처럼, github blog의 포스터 글은 Markdown 문법사항을 갖고있습니다.<br>
하지만 실제로 쓸 수 있는 문법 사항과 적용되는 것에 차이가 있기 때문에 2중으로 확인해보고 있습니다.<br>
Markdown 문법도 다시 한번 정리할 것이지만, 블로그 포스팅을 할 때 자주 사용하는 내용을 정리해보도록 하겠습니다.
<br>
<br>
이는 [공식 가이드](https://mmistakes.github.io/minimal-mistakes/docs/utility-classes/)와 인터넷 서칭을 참고해 **실제로 포스팅 시 많이 사용하는 내용**을 기재하였습니다!
<br>
<br>

### 문자 정렬

왼쪽 정렬 (Default)
{: .text-left}

```md
왼쪽 정렬 (Default).
{: .text-left}
```

중앙 정렬
{: .text-center}

```md
중앙 정렬
{: .text-center}
```

오른쪽 정렬
{: .text-right}

```md
오른쪽 정렬
{: .text-right}
```

### 이미지 정렬

<br>
<br>

![image](https://user-images.githubusercontent.com/45550607/102208312-9b284180-3f12-11eb-8467-7b5ea1779ac7.png){: .align-left}
왼쪽 정렬입니다. 원하는 이미지를 원하는 위치에서 표출할 수 있는 예시입니다. 해당 출처는 minimal mistakes의 공식 사이트에 나와있는 글을 참조했습니다. 그 중에서 제가 자주 사용하는 내용만 가져왔습니다.
<br>
<br>
<br>
<br>

```md 
![image](https://user-images.githubusercontent.com/45550607/102208312-9b284180-3f12-11eb-8467-7b5ea1779ac7.png)
{: .align-left}
왼쪽 정렬입니다. 원하는 이미지를 원하는 위치에서 표출할 수 있는 예시입니다.
해당 출처는 minimal mistakes의 공식 사이트에 나와있는 글을 참조했습니다. 
그 중에서 제가 자주 사용하는 내용만 가져왔습니다.
```
<br>

![image](https://user-images.githubusercontent.com/45550607/102208312-9b284180-3f12-11eb-8467-7b5ea1779ac7.png){: .align-center}

중앙 정렬입니다. 원하는 이미지를 원하는 위치에서 표출할 수 있는 예시입니다. 해당 출처는 minimal mistakes의 공식 사이트에 나와있는 글을 참조했습니다. 그 중에서 제가 자주 사용하는 내용만 가져왔습니다.
<br>
<br>

```md 
![image](https://user-images.githubusercontent.com/45550607/102208312-9b284180-3f12-11eb-8467-7b5ea1779ac7.png)
{: .align-center}
중앙 정렬입니다. 원하는 이미지를 원하는 위치에서 표출할 수 있는 예시입니다.
해당 출처는 minimal mistakes의 공식 사이트에 나와있는 글을 참조했습니다. 
그 중에서 제가 자주 사용하는 내용만 가져왔습니다.
```
<br>

![image](https://user-images.githubusercontent.com/45550607/102208312-9b284180-3f12-11eb-8467-7b5ea1779ac7.png){: .align-right}
오른쪽 정렬입니다. 원하는 이미지를 원하는 위치에서 표출할 수 있는 예시입니다. 해당 출처는 minimal mistakes의 공식 사이트에 나와있는 글을 참조했습니다. 그 중에서 제가 자주 사용하는 내용만 가져왔습니다.
<br>
<br>
<br>
<br>

```md 
![image](https://user-images.githubusercontent.com/45550607/102208312-9b284180-3f12-11eb-8467-7b5ea1779ac7.png)
{: .align-right}
오른쪽 정렬입니다. 원하는 이미지를 원하는 위치에서 표출할 수 있는 예시입니다.
해당 출처는 minimal mistakes의 공식 사이트에 나와있는 글을 참조했습니다. 
그 중에서 제가 자주 사용하는 내용만 가져왔습니다.
```
<br>
<br>
<br>

### 문자 박스 

| Notice Type |       Class        |
| :---------: | :----------------: |
|   Default   |     `.notice`      |
|   Primary   | `.notice--primary` |
|    Info     |  `.notice--info`   |
|   Warning   | `.notice--warning` |
|   Success   | `.notice--success` |
|   Danger    | `.notice--danger`  |


**Default 문자 박스입니다.** 문자 박스는 색이 달라 원하는 정보를 블로그 방문자에게 보여주기 좋은 것 같습니다! Notice Type의 뜻에 접근하셔도 되고, 원하는 색상에 따라 사용해주셔도 될 것 같습니다.
{: .notice}

**Primary 문자 박스입니다.** 문자 박스는 색이 달라 원하는 정보를 블로그 방문자에게 보여주기 좋은 것 같습니다! Notice Type의 뜻에 접근하셔도 되고, 원하는 색상에 따라 사용해주셔도 될 것 같습니다.
{: .notice--primary}

**Info 문자 박스입니다.** 문자 박스는 색이 달라 원하는 정보를 블로그 방문자에게 보여주기 좋은 것 같습니다! Notice Type의 뜻에 접근하셔도 되고, 원하는 색상에 따라 사용해주셔도 될 것 같습니다.
{: .notice--info}

**Warning 문자 박스입니다.** 문자 박스는 색이 달라 원하는 정보를 블로그 방문자에게 보여주기 좋은 것 같습니다! Notice Type의 뜻에 접근하셔도 되고, 원하는 색상에 따라 사용해주셔도 될 것 같습니다.
{: .notice--warning}

**Success 문자 박스입니다.** 문자 박스는 색이 달라 원하는 정보를 블로그 방문자에게 보여주기 좋은 것 같습니다! Notice Type의 뜻에 접근하셔도 되고, 원하는 색상에 따라 사용해주셔도 될 것 같습니다.
{: .notice--success}

**Danger 문자 박스입니다.** 문자 박스는 색이 달라 원하는 정보를 블로그 방문자에게 보여주기 좋은 것 같습니다! Notice Type의 뜻에 접근하셔도 되고, 원하는 색상에 따라 사용해주셔도 될 것 같습니다.
{: .notice--danger}

<br>
<br>

# [07] 댓글 기능 추가하기

- 수정 파일 : github.io 폴더 > _config.yml
<br>

```yml
# _config.yml, 32line 코드
comments:
  provider    : "disqus"                                # comment 처리 사이트 명칭 기재
              # false (default), "disqus", "discourse", "facebook"
              # "staticman", "staticman_v2", "utterances", "custom"
  disqus:
    shortname : "eona1301-github-io"                    # disqus의 shortname 기재
              # https://help.disqus.com/customer/portal/articles/466208-what-s-a-shortname-
```

```yml
# _config.yml, 270line 코드

# Defaults
defaults:
  # _posts
  - scope:
      path: ""
      type: posts
    values:
      layout: single
      author_profile: true
      read_time: true
      comments: true                                    # comment 를 주석 해지 후 true로 수정하기
      share: true
      related: true
  
  # _pages
  - scope:
      path: "_pages"
      type: pages
    values:
      layout: single
      author_profile: true
```

위의 코드를 모두 작성한 후 git push 해주세요!<br>
여기서 중요한 점은 로컬 서버에서는 comment 처리부분이 보여지지 않습니다.<br>
또, git push를 해주셔도 반영되는데에 딜레이가 걸리기 때문에 코드 수정 후 5~10분 정도 기다려주세요.<br>
<br>
<br>
<br>

# [08] 방문자 통계 보기

[Google Analytics](https://analytics.google.com/analytics/web/) 에 접속하시면 무료로 시작할 수 있습니다. 또 본인의 Github Blog를 등록하신 후 tracking_id를 찾아주세요.

- 수정 파일 : github.io 폴더 > _config.yml
<br>

```yml
# Analytics
analytics:
  provider               : "google-gtag" 
                          # false (default), "google", "google-universal", "google-gtag", "custom"
  google:
    tracking_id          : "G-5HQPK7RHNC"
    anonymize_ip         : # true, false (default)
```
이를 git push해주세요. 댓글 기능보다는 더 빠르게 바로 반영됩니다.<br><br>

![04](https://user-images.githubusercontent.com/45550607/102707509-f7a6aa80-42de-11eb-9fd5-691b59ff143b.PNG){: .align-center}
<br>

이제 Google Analytics에서 방문자 수가 카운딩됩니다.<br>
tracking_id를 연결한 후부터 카운딩하기 때문에, 첫 화면은 다를 수 있다는 점 유의해주세요.<br>
<br>
<br>
<br>


🔔 **포스팅 공지** <br><br>
현재 작성한 포스팅은 **깃 블로그 지킬 minimal mistakes**과 관련된 종합 내용입니다.<br>
<br>
A to Z 카테고리는 지금까지 진행할 포스팅을 확인하기 편하게 순서대로 정리한 글입니다.<br>
각각의 포스터에서 조금 더 자세한 설명과 팁 등이 적혀있으니 참조해주세요.<br>
{: .notice--success}