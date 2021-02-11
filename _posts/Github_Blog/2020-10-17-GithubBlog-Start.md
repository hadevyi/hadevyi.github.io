---
title: "[Github Blog] Jekyll - minimal mistakes 시작하기"
categories:
  - Github_Blog
tags:
  - minimal mistakes
  - jekyll
  - blog
toc: true
toc_sticky: true
toc_label: "GITHUB BLOG START"
toc_icon: "blog"
---

📌 **작성자 개발 환경** <br>
**OS** : Windows 10<br>
{: .notice--primary}


Github는 Programming Code를 올리고 공개하며 확인할 수 있습니다.<br>
<sup><i>(사실 Github 자체에 코드를 자유롭게 올리고, REAMME를 쓰고, 익숙해지는 것도 꽤나 오래 걸렸죠😅)</i></sup><br>
각 Repositories마다 REAM.MD가 있어, 각각에 대한 설명을 적을 수 있습니다.<br>
<br>
하지만 이론적인 부분과 오류사항 등에 대해 자세히 기재하기에는 어려웠습니다.<br>
이는 Github의 Issues나 Projects 등에서도 할 수 있지만...<br>
또, 좋은 코드는 프로그래밍 코드에서만 나오지 않기 때문에, 이를 기재하기 위해 Github blog를 설계하게 되었습니다.
<br>
<br>
오랜 기간 시행착오 후에 드디어 포스팅을 하네요!<br>
저와 같이 시작하는 모든 분들께 도움이 되셨으면 좋겠습니다!
<br>
<br>

# 기본 환경 세팅

## Ruby 세팅

[Ruby for Windows](https://rubyinstaller.org/downloads/) 링크에 접속하여, 아래 화면과 같은 목록을 확인합니다.

![ruby_download](https://user-images.githubusercontent.com/45550607/102007643-2fa56f00-3d6e-11eb-969c-74a5e722b2c8.png)

여기서 가장 중요한 것은 **Jekyll은 32bit**이기에, 설치시 (x64)가 아닌 **(x86)**으로 진행해야합니다.<br>
이는 초기 설정시 제일 빈번하게 발생하는 세팅 오류이기 때문에, 꼭 신경써서 설치해주셔야 합니다.
<br>
<br>

## Jekyll 세팅

```
gem install jekyll
```
이와 같은 명령어를 명령 프롬프트(CMD) 창에서 입력해줍니다.<br>
이러면 기본적인 세팅이 모두 완료되셨습니다!<br>

`ruby -v`과 `jekyll -v`로 정상적으로 설치되었는지 확인해주세요 :)

<br>
<br>

# minimal-mistakes 테마

- [minimal-mistakes theme 공식 홈페이지](https://mmistakes.github.io/minimal-mistakes/)
- [minimal-mistakes 가이드](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/)
- [minimal-mistakes Github Link](https://github.com/mmistakes/minimal-mistakes)
<br>

<div align=right>(🔺많이 참고했던 공식 홈페이지입니다! 원문이라 낯설지만 왠만한건 다 적혀있습니다.)</div>
<br>

다양한 테마가 있지만, minimal-mistakes를 선택한 가장 큰 이유는 아무래도 **커스터마이징**인거 같습니다.<br>
제가 신경쓰고 건드는 만큼 더욱 더 이뻐지고 구석구석 손길이 닿은 느낌이라 더 좋은거 같더라구요 ㅎㅎ<br>
공식 홈페이지에 가이드가 매우 잘 정리되어있어서 마음대로 커스터마이징하기 용이합니다.<br>

![image](https://user-images.githubusercontent.com/45550607/101988362-76e31f80-3cdc-11eb-9dee-8addd2f02882.png)

우측 상단에 있는 녹색 버튼에서 code repo의 link를 복사하셔서, clone 받아주세요.<br>
압축을 푸시면 다음과 같은 내용을 볼 수 있습니다.<br>
(clone 받으실 수 있는 Repo는 minimal-mistakes Github Link라고 정리한 곳을 확인하면 보실 수 있습니다!)

![image](https://user-images.githubusercontent.com/45550607/102005471-5a86c780-3d5c-11eb-8ad4-bc5fd466ed57.png)

여기서 제일 중요한 건 이걸 다 쓸건 아니에요! ㅎㅎ<br>
<span color=red>빨간색</span>은 그냥 지우셔도 되는 파일입니다!<br>
<span color=green>초록색</span>은 따로 남겨두셨다가, 포스팅 양식 등을 확인할 수 있는 내용입니다!

docs 내부의 _pages 폴더는 추후 상단의 카테고리를 선택할 수 있는 양식이라, 최상단으로 이동해주시면 좋습니다.

![image](https://user-images.githubusercontent.com/45550607/102005746-c407d580-3d5e-11eb-913a-bb2e36c54f4b.png)

여기까지 잘 따라 오셨다면, 최종적으로 정리하면 이런 구조를 가질껍니다.<br>
이렇게까지 정리하셨다면, 기초 작업은 완료되었습니다.<br>
이제 Github에 Github-Blog Repository를 만들어봅시다!<br>
<br>
<br>

# Github-Blog Repo 만들기

github에서 repository를 만드는 것은 지금까지 한 것보다 더 간단하겠죠! ㅎㅎ<br>
본인의 github 프로필을 확인해주시면, 이렇게 보이실꺼에요.

![image](https://user-images.githubusercontent.com/45550607/102006086-a12af080-3d61-11eb-9ce7-0471a7af0062.png)

이 중에서 **회색**으로 있는 내용이 ID 입니다. (여기서 생각도 못하게 못 찾았던 기억이...ㅋㅋ)

![image](https://user-images.githubusercontent.com/45550607/102006140-1b5b7500-3d62-11eb-8e07-6b51fd1341fb.png)

Github ID .github.io 의 형식으로 Repo를 만들어주신 후,<br>
지금까지 정리한 모든 사항을 push 해주시면 되겠습니다!<br>
이제 Github ID .github.io 의 링크에서 개발하신 minimal-mistakes 테마가 적용된 걸 확인하실 수 있습니다.<br>
<br>
<br>

# 로컬 서버 실행

github로 push해서 링크로 확인하는 방법이 있지만, 이는 딜레이도 있고 글을 올리는 기술 블로그의 특성상 좋진 않겠죠!<br>
<br>
따라서 바로 확인할 수 있는 과정이 있으면 좋습니다.<br>
제가 제일 애먹었던 부분이기도 하고, 또 했을 때 제일 쾌감이 되었던 부분이기도 합니다.<br>
<br>
익숙해지시면, 블로그 작업하기 직전에 이 과정 먼저 진행하시고 하실꺼에요 ㅎㅎ<br>
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
![image](https://user-images.githubusercontent.com/45550607/102006913-f407a680-3d67-11eb-9306-53bb0b1ba290.png)<br>
<br>
잘 보이셨다면 성공! (아마 이 사진보단 조금 더 단출하실 꺼에요.)<br>
오류사항이 있으시다면, 댓글 달아주세요.<br>
<br>
<br>

🔔 **포스팅 공지** <br><br>
현재 작성한 포스팅은 **깃 블로그 시작 세팅**과 관련된 내용입니다.<br>
minimal-mistakes 테마의 커스터마이징 및 포스팅에 관해서도 진행할 예정이니, 
**Github_Blog 카테고리**를 클릭하셔서 확인해보세요!<br>
{: .notice--success}