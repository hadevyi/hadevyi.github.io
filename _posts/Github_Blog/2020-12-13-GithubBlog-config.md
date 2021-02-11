---
title: "[Github Blog] minimal mistakes - config.yml 수정하기"
categories:
  - Github_Blog
tags:
  - minimal mistakes
  - jekyll
  - blog
toc: true
toc_sticky: true
toc_label: "CONFIG MODIFY"
toc_icon: "blog"
---

📌 **작성자 개발 환경** <br>
**OS** : Windows 10<br>
**Tool** : Visual Studio Code<br>
{: .notice--primary}

<br>
나의 블로그이다는 걸 보여주기 위해, 기본적인 정보를 넣고 정리하는게 중요합니다!<br>
본인의 정보를 잘 정리해주시고, 본인의 정체성을 잘 들어내보세요!<br>
<br>
저는 정리할 때, 뿌듯하고 또 제 노트를 칭찬해주던 고등학교, 학부 시절의 기억때문에, <br>
"정리가 재밌는 개발자"라는 정체성을 잡았습니다.<br>
<br>
개발을 할때, 혹은 공부하는 습관 중에 본인은 어떤 습관과 재미를 느끼는 지 생각해보세요!
<br>
<br>
<br>

# 기본 정보 입력

- 수정 파일 : github.io 폴더 > _config.yml
<br>

<script src="https://gist.github.com/eona1301/29e2f42d13e94559e5a0d63c51b8fce5.js"></script>

<br>
블로그 전반의 기본 사항들입니다. 순서와는 무관하게 설명을 잘 참고해주세요!<br>
모두 다 수정하실 필요는 없습니다. 상세한 내용은 위의 코드를 확인해주세요.<br>
주석아 아닌 부분은 실제로 제가 적용한 코드입니다. 참고하면서 적용해보세요!<br>
구절을 적용해보시면서 로컬 서버에서 확인해보세요!<br>

[http://127.0.0.1:4000](http://127.0.0.1:4000) 으로 확인하실 수 있으며, 해당방법이 어려우시면 저의 포스터를 확인해주세요!<br>
<br>
<br>

# 프로필 영역 입력

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

# 하단 프로필 영역

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

# 첫 화면 게시물 개수

- 수정 파일 : github.io 폴더 > _config.yml
<br>

<script src="https://gist.github.com/eona1301/d189862ece5d5f954360c63a99e4469b.js"></script>

코드 상 두번째 줄에 위치한 값 painate의 속성이 보여질 개수입니다.<br>
이걸 원하는 개수대로 고쳐주시면 되겠습니다.<br>
<br>


# Defaults 설정

- 수정 파일 : github.io 폴더 > _config.yml
<br>

<script src="https://gist.github.com/eona1301/ce49543bed1499284c74e6457c813a66.js"></script>

<br>
앞서 참고하고자 하였던, Docs 폴더의 _config.yml를 모방했습니다!<br>
포스터 글을 업데이트하는데, 폴더화를 시켜서 파일 정리하는게 좋을 것같아 확인했습니다.<br>
필수 사항은 아니니 생략해주셔도 됩니다.<br>
<br>
<br>

🔔 **포스팅 공지** <br><br>
현재 작성한 포스팅은 **깃 블로그 기본 데이터 입력**과 관련된 내용입니다.<br>
minimal-mistakes 테마의 커스터마이징 및 포스팅에 관해서도 진행할 예정이니, 
**Github_Blog 카테고리**를 클릭하셔서 확인해보세요!<br>
{: .notice--success}