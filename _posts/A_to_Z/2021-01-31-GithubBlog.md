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
toc_icon: "bookmark"
---

💡 **A to Z**는 개별적으로 작성한 게시글을 한 번에 볼 수 있게 정리하였습니다.<br>
사용의 팁이나 고려하면 좋은 사항 등의 부가설명은 생략되고, 핵심 내용만 넣었습니다.<br>
상세한 설명과 관련 이야기(시행착오 및 전처리 작업 등)는 개별 포스트에 있습니다.<br>
{: .notice--warning}

# [00] Github Blog A to Z

1. [기본 세팅](https://eona1301.github.io/github_blog/GithubBlog-Start/) : Ruby, Jekyll, minimal-mistakes 테마 적용, github repo 생성, 로컬 서버로 블로그 실행
2. [기본 데이터 입력](https://eona1301.github.io/github_blog/GithubBlog-config/) : 블로그 기본 정보(_config.yml), 프로필 설정, 출력 게시물 개수 조정, Default post/page 설정
3. [카테고리 설정](https://eona1301.github.io/github_blog/GithubBlog-Category/) : 카테고리(navigation.yml) 수정, 원하는 페이지 양식 찾는 방법, toc 여부, 고정방법, 이름 변경
4. [본문 영역 조절](https://eona1301.github.io/github_blog/GithubBlog-Content-Width/) : 본문 영역 넓히기, 사이드바 좁히기, 글자 조정하기, 하이퍼링크 밑줄 제거하기
5. [파비콘 세팅](https://eona1301.github.io/github_blog/GithubBlog-Favicon/) : 웹사이트 아이콘 선택, icon만들기, 깃헙 블로그 적용하기(custom.html 수정하기)
6. [블로그 포스팅해보기](https://eona1301.github.io/github_blog/GithubBlog-Posting/) : minimal-mistakes 포스팅 양식 확인하기, 자주 사용하는 포스터 내용 문법 확인하기
7. [댓글 기능 추가하기](https://eona1301.github.io/github_blog/GithubBlog-Comment/) : DISQUS 가입하기, Shortname 찾기, _config 반영하기, 시범 댓글 확인
8. [방문자 통계하기](https://eona1301.github.io/github_blog/GithubBlog-Analytics/) : Google Analytics 가입하기, tranking ID 찾기, _config 반영하기, 결과 확인하기
9. [Google 검색 노출하기](https://eona1301.github.io/github_blog/GithubBlog-Search/) : Google Search Console, sitemap, robots, 적용하기
10. [깔끔한 코드블럭 작성하기](https://eona1301.github.io/github_blog/GithubBlog-Code/) : MarkDown Code Block, Gist 사용방법
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

<script src="https://gist.github.com/eona1301/29e2f42d13e94559e5a0d63c51b8fce5.js"></script>

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

<script src="https://gist.github.com/eona1301/2164e69b3615da9804e51f5e3c3b3146.js"></script>

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

<script src="https://gist.github.com/eona1301/2853e7022b37493053f98037ebae7505.js"></script>

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

<script src="https://gist.github.com/eona1301/d189862ece5d5f954360c63a99e4469b.js"></script>

코드 상 두번째 줄에 위치한 값 painate의 속성이 보여질 개수입니다.<br>
이걸 원하는 개수대로 고쳐주시면 되겠습니다.<br>
<br>

- 수정 파일 : github.io 폴더 > _config.yml
<br>

<script src="https://gist.github.com/eona1301/ce49543bed1499284c74e6457c813a66.js"></script>

<br>
앞서 참고하고자 하였던, Docs 폴더의 _config.yml를 모방했습니다!<br>
포스터 글을 업데이트하는데, 폴더화를 시켜서 파일 정리하는게 좋을 것같아 확인했습니다.<br>
필수 사항은 아니니 생략해주셔도 됩니다.<br>
<br>
<br>

# [03] 카테고리 설정하기

- 수정 파일 : github.io 폴더 > _data 폴더 > navigation.yml
<br>

<script src="https://gist.github.com/eona1301/760067e1c637892536fa9512fb11bbee.js"></script>

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

<script src="https://gist.github.com/eona1301/99003302c105278c33a0f30fabe8712d.js"></script>

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

<script src="https://gist.github.com/eona1301/493a1a671316ae45c6ddc5831f802388.js"></script>

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

<script src="https://gist.github.com/eona1301/891391423d765b7169ba87b15fbfd298.js"></script>

원 코드의 상단부(7번줄)에 있는 코드이기에 금방 찾으실 수 있으실 껍니다.<br>
전체적인 폰트의 기준은 없습니다!<br>
로컬 서버에서 직접 등록해보시면서, 원하시는 크키로 조정하시면 됩니다.<br>
<br>
<br>

## 하이퍼링크 밑줄 제거

- 수정 파일 : github.io 폴더 > _sass 폴더 > _minimal-mistakes 폴더 > _base.scss
<br>

<script src="https://gist.github.com/eona1301/e7b36fcee4cfea32a7f3413b3cebef4f.js"></script>

base 파일의 중반부(127번줄)에 있습니다.<br>
찾기 힘드실 때는 Ctrl + F를 통해 `a{` 를 검색하셔서 확인해보세요! <br>
이후 하이퍼링크 처리와 관련된 decoration을 해지해야하니 이를 전체에 적용될 수 있도록 추가해주시면 되겠습니다!<br>
<br>
<br>

# [05] 파비콘(웹 아이콘) 설정

[realfavicongenerator](https://realfavicongenerator.net/)에 접속해서 원하는 사진을 넣어주세요.

![image](https://user-images.githubusercontent.com/45550607/102049292-f2031d80-3e23-11eb-9b6a-ab656118915d.png)
{: .text-center}

그럼 이 코드를 보실 수 있습니다.<br>
이 코드를 활용해서 블로그에 적용해봅시다.<br>
<br>

- 수정 파일 : github.io 폴더 > _includes 폴더 > _head 폴더 > custom.html

<script src="https://gist.github.com/eona1301/1503f596d7330d3d4600fcb1df8bde16.js"></script>

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

<script src="https://gist.github.com/eona1301/97484af7daac622ce9c905f6d521a2de.js"></script>

<script src="https://gist.github.com/eona1301/126daa1811b8e0e9599221aba9b6708a.js"></script>

위의 코드를 모두 작성한 후 git push 해주세요!<br>
여기서 중요한 점은 로컬 서버에서는 comment 처리부분이 보여지지 않습니다.<br>
또, git push를 해주셔도 반영되는데에 딜레이가 걸리기 때문에 코드 수정 후 5~10분 정도 기다려주세요.<br>
<br>
<br>
<br>

# [08] 방문자 통계 보기

[Google Analytics](https://analytics.google.com/analytics/web/) 에 접속하시면 무료로 시작할 수 있습니다. <br>
또 본인의 Github Blog를 등록하신 후 tracking_id를 찾아주세요.<br>

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

# [09] 구글 검색 노출시키기

[Google search Console](https://search.google.com/search-console/about)은 말그대로 google에서 검색을 하였을 때,<br>
나의 사이트가 보여질 수 있도록 등록하는 Google의 서비스입니다. 당연히 Google 계정이 필요하겠죠?<br>

![image](https://user-images.githubusercontent.com/45550607/106382936-319ebc80-6406-11eb-962e-cb3b7f110da5.png){: .align-center}

이전의 댓글 기능처럼 코드 상으로 추가하실 건 없습니다!<br>
<br>

![image](https://user-images.githubusercontent.com/45550607/106383074-09fc2400-6407-11eb-8b2e-7be1507bef2f.png){: .align-center}

유효한 URL인지 확인이 되면 소유권을 확인하기 위해서 다음과 같은 화면이 뜹니다.<br>

- **HTML 파일 : 웹사이트에 HTML 파일 업로드 (권장)**
- HTML 태그 : 사이트 홈페이지에 메타태그 추가
- Google 애널리틱스 : Google 애널리틱스 계정 사용
- Google 태그 관리자 : Google 태그 관리자 계정 사용
- 도메일 이름 공급업체 ; DNS 레코드와 Google 연결

이렇게 엄청나게 다양한 방법이 존재하지만, 전 HTML 파일을 진행할 예정입니다.<br>
우선 현재 HTML 파일을 다운받아줍시다.<br>
<br>
<br>

## HTML 파일 세팅

![image](https://user-images.githubusercontent.com/45550607/106383234-25b3fa00-6408-11eb-948a-6fad99018610.png){: .align-center}

<br>
이렇게 다운받은 HTML 파일은 `_config.xml`과 동일한 위치(Root 위치)에 넣어주시면 됩니다.<br>
commit을 하기 전에 `http://127.0.0.1:4000/google_HTML_파일명.HTML` 으로 Local Test를 해주세요.<br>
<br>

![image](https://user-images.githubusercontent.com/45550607/106383381-e508b080-6408-11eb-905a-640a1e56f819.png){: .align-center}

이렇게 파일의 명과 함께 정상적으로 보여진다면, 정확하게 등록을 하신겁니다.<br>
아직 이는 현재의 사이트가 내 소유이다를 알려주는 것뿐, 검색의 url 정보를 크롤링은 할 수가 없습니다.<br>
따라서 이러한 작업을 할 수 있도록, 추가적인 내용을 추가해줍시다!<br>
<br>

## sitemap.xml 만들기

<script src="https://gist.github.com/eona1301/0917f0d1fc12314ef3f73fd5fc3b50f9.js"></script>

현재 보이시는 sitemap.xml의 코드를 google HTML 파일과 동일한 위치(Root 위치)에 만들어주시면 됩니다.<br>
<br>
현재의 sitemap.xml을 이용해 Google 크롤러가 주기적으로 저의 url을 체크할 수 있게 되었습니다.<br>
<br>

![image](https://user-images.githubusercontent.com/45550607/106384507-9b22c900-640e-11eb-8a57-68bd4e6ac560.png){: .align-center}

실제로 [http://127.0.0.1:4000/sitemap.xml](http://127.0.0.1:4000/sitemap.xml)로 접속하셔서 위와 같은 결과가 잘 보여지는지 확인해주세요. <br>
<br>
<br>


## robots.txt 만들기

<script src="https://gist.github.com/eona1301/c16bac3dde50d87d39c34754043cf93b.js"></script>

이제 접근하는 크롤러는 robots.txt를 보고 접근하고자 하는 sitemap의 위치를 확인하고,<br>
제한을 확인하여 본래의 웹사이트로 가져가게 됩니다.<br>
Allow에 본인이 원하시는 정보만 입력하거나 제한을 두고싶으신 내용을 입력하시면 크롤러가 확인해서 진행해줍니다.<br>
<br>
<br>


## 최종 Sitemap.xml 등록

![image](https://user-images.githubusercontent.com/45550607/106384572-e210be80-640e-11eb-9461-f784198136a3.png){: .align-center}

google search console에서 sitemaps 페이지에서 본인의 sitemap.xml을 등록해줍니다.<br>
처음 등록할 때는 바로 성공이라고 뜨지않고, 알수없음/실패 등의 다양한 내용으로 보여지게 됩니다.<br>
코드에 문제가 있는게 아니니 걱정마시고! 이제 기다림의 미학입니다! 😪<br>
<br>
<br>

## 등록 결과 확인

![image](https://user-images.githubusercontent.com/45550607/106384617-27cd8700-640f-11eb-8b24-49124ff2c65d.png){: .align-center}

2020년 12월 2n쯤 등록해서, 2021년 1월 2n쯤 노출이 되기 시작했습니다.<br>
빠르신 분들은 3~5일로도 나온다고 하는데, 전 자그마치 1달이 걸렸네요 ㅠㅠ <br>
초반에 sitemap의 코드가 잘못되었기도 하고, 가장 오래걸린 내용이였습니다.<br>
이제 노출이 되기 시작했으니 더욱 열심히 해보겠습니다! ㅎㅎ<br>
<br>
<br>

# [10] 깔끔한 코드블럭 작성하기

![image](https://user-images.githubusercontent.com/45550607/110230979-2cc6ae80-7f58-11eb-97d5-6936e04df6d9.png){: .image-center}

[Github Gist](https://gist.github.com/)에 접속하면 위와 같은 화면을 보실 수 있습니다.<br>
이렇게 작성을 완료하면, 제가 빨간 사각형을 한 영역에서 해당 코드의 Embed 코드를 얻을 수 있습니다.<br>
이 코드를 우측 버튼으로 Copy하여 원하는 posting 위치에 넣으면 됩니다.<br>


이렇게 첫 A to Z 시리즈의 블로그 세팅글을 마치도록 하겠습니다.<br>
모두 따라오시느라 수고많으셨습니다!<br>
궁금하신 사항은 댓글 부탁드려요 :) <br>
<br>


🔔 **포스팅 공지** <br><br>
현재 작성한 포스팅은 **깃 블로그 지킬 minimal mistakes**과 관련된 종합 내용입니다.<br>
<br>
A to Z 카테고리는 지금까지 진행할 포스팅을 확인하기 편하게 순서대로 정리한 글입니다.<br>
각각의 포스터에서 조금 더 자세한 설명과 팁 등이 적혀있으니 참조해주세요.<br>
{: .notice--success}