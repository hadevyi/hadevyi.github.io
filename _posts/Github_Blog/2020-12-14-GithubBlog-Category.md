---
title: "[Github Blog] minimal mistakes - Category 세팅하기"
categories:
  - Github_Blog
tags:
  - minimal mistakes
  - jekyll
  - blog
toc: true
toc_sticky: true
toc_label: "CATEGORY"
toc_icon: "blog"
---

📌 **작성자 개발 환경** <br>
**OS** : Windows 10<br>
**Tool** : Visual Studio Code<br>
{: .notice--primary}

![category](https://user-images.githubusercontent.com/45550607/102036580-8eb6c280-3e06-11eb-893a-8433222ef87b.PNG)

어느정도 세팅을 마쳤다면, 이제 상단의 Category를 준비해야합니다.<br>
저는 현재의 제 약력과 전체적인 카테고리, 태그들을 모든 내용을 게시판으로 정리하였습니다.<br>
이 외에도 연도별 등의 내용으로도 세팅하실 수 있습니다.<br>
<br>
원하는 url만 잘 기재하시면, 표출하고싶으신 사이트(Github 등)로 연결하실 수도 있습니다.<br>
<br>
<br>

# navigation.yml 수정

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

# 원하는 page 수정

- 수정 파일 : github.io 폴더 > _pages 폴더 > 원하는 md 파일 (해당 예시는 about.md 입니다.)
<br>

<script src="https://gist.github.com/eona1301/99003302c105278c33a0f30fabe8712d.js"></script>

## permalink 찾기

상단에 permalink 로 되어있는 내용을 그대로 차용해주시면 됩니다.<br>
title은 말그대로 제목입니다. 생략해주셔도 됩니다.<br>
<br>

## toc 다루기

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

toc에 등록되는 방법은 markdown의 헤더(Header)를 사용해주시면 자동으로 기재됩니다.<br>

![image](https://user-images.githubusercontent.com/45550607/102038869-b8beb380-3e0b-11eb-96a1-2a441c3d3ce8.png)

제목의 단계에 따라서 toc에서 이런식으로 들여쓰기도 가능합니다.<br>
<br>
<br>


🔔 **포스팅 공지** <br><br>
현재 작성한 포스팅은 **깃 블로그 카테고리 설정**과 관련된 내용입니다.<br>
minimal-mistakes 테마의 커스터마이징 및 포스팅에 관해서도 진행할 예정이니, 
**Github_Blog 카테고리**를 클릭하셔서 확인해보세요!<br>
{: .notice--success}