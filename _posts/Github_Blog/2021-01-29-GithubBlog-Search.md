---
title: "[Github Blog] minimal mistakes - 검색창 노출시키기"
categories:
  - Github_Blog
tags:
  - minimal mistakes
  - jekyll
  - blog
  - google search console
toc: true
toc_sticky: true
toc_label: "SEACHER"
toc_icon: "blog"
---

📌 **작성자 개발 환경** <br>
**OS** : Windows 10<br>
**Tool** : Google Search Console, Visual Studio Code<br>
{: .notice--primary}

블로그를 꾸며간다는 것은, 더 많은 사람들이 내 글을 읽어줬으면 좋겠죠!<br>
그렇게 되려면, 키워드를 검색했을 때 보이는 것이 제일 중요할 겁니다.😎<br>
블로그의 첫 시리즈이자 현재 블로그의 세팅과 관련되 minimal mistakes의 마지막 포스트!<br>
<br>
Google search console 등록 방법에 대해 보여드리도록 하겠습니다!<br>
<br>
<br>

# Google search Console

[Google search Console](https://search.google.com/search-console/about)은 말그대로 google에서 검색을 하였을 때,<br>
나의 사이트가 보여질 수 있도록 등록하는 Google의 서비스입니다.<br>
<br>
당연히 Google 계정이 필요하겠죠?<br>
<br>

![image](https://user-images.githubusercontent.com/45550607/106382833-7b3ad780-6405-11eb-9d21-bbaabf650ab8.png){: .align-center}

현재 화면으로 "시작"하시면 됩니다.<br>

![image](https://user-images.githubusercontent.com/45550607/106382936-319ebc80-6406-11eb-962e-cb3b7f110da5.png){: .align-center}

접속하시면 이렇게 화면이 보입니다.<br>
전 도메인을 구입하지 않았고, github의 제공되는 url을 그대로 사용할 것이기에 우측의 [URL 접두어]를 사용합니다.<br>
혹시라도 도메인이 계신 분들은 DNS 인증만 진행하면 된다고 하니, 조금 더 편하고 빠르게 가능하실 껍니다. 😁<br>
<br>
<br>
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
HTML 파일은 가장 간편하며 보편적인 방법이라 선택하였습니다.<br>
특히 오류가 났을 때, 서칭 정보가 많아서 확인하기 쉬웠습니다.<br>
<br>
우선 현재 HTML 파일을 다운받아줍시다.<br>
<br>
<br>

# HTML 파일 세팅

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

# sitemap.xml 만들기

<script src="https://gist.github.com/eona1301/0917f0d1fc12314ef3f73fd5fc3b50f9.js"></script>

현재 보이시는 sitemap.xml의 코드를 google HTML 파일과 동일한 위치(Root 위치)에 만들어주시면 됩니다.<br>
<br>
현재의 sitemap.xml을 이용해 Google 크롤러가 주기적으로 저의 url을 체크할 수 있게 되었습니다.<br>
<br>

![image](https://user-images.githubusercontent.com/45550607/106384507-9b22c900-640e-11eb-8a57-68bd4e6ac560.png){: .align-center}

실제로 [http://127.0.0.1:4000/sitemap.xml](http://127.0.0.1:4000/sitemap.xml)로 접속하셔서 위와 같은 결과가 잘 보여지는지 확인해주세요. <br>
<br>
<br>


# robots.txt 만들기

<script src="https://gist.github.com/eona1301/c16bac3dde50d87d39c34754043cf93b.js"></script>

이제 접근하는 크롤러는 robots.txt를 보고 접근하고자 하는 sitemap의 위치를 확인하고,<br>
제한을 확인하여 본래의 웹사이트로 가져가게 됩니다.<br>
Allow에 본인이 원하시는 정보만 입력하거나 제한을 두고싶으신 내용을 입력하시면 크롤러가 확인해서 진행해줍니다.<br>
<br>
<br>


# 최종 Sitemap.xml 등록

![image](https://user-images.githubusercontent.com/45550607/106384572-e210be80-640e-11eb-9461-f784198136a3.png){: .align-center}

google search console에서 sitemaps 페이지에서 본인의 sitemap.xml을 등록해줍니다.<br>
처음 등록할 때는 바로 성공이라고 뜨지않고, 알수없음/실패 등의 다양한 내용으로 보여지게 됩니다.<br>
코드에 문제가 있는게 아니니 걱정마시고! 이제 기다림의 미학입니다! 😪<br>
<br>
<br>

# 등록 결과 확인

![image](https://user-images.githubusercontent.com/45550607/106384617-27cd8700-640f-11eb-8b24-49124ff2c65d.png){: .align-center}

2020년 12월 2n쯤 등록해서, 2021년 1월 2n쯤 노출이 되기 시작했습니다.<br>
빠르신 분들은 3~5일로도 나온다고 하는데, 전 자그마치 1달이 걸렸네요 ㅠㅠ <br>
초반에 sitemap의 코드가 잘못되었기도 하고, 가장 오래걸린 내용이였습니다.<br>
이제 노출이 되기 시작했으니 더욱 열심히 해보겠습니다! ㅎㅎ<br>
<br>
<br>

드디어 기나긴 세팅과 준비가 끝났습니다.<br>
<br>


🔔 **포스팅 공지** <br><br>
현재 작성한 포스팅은 **깃 블로그 검색 노출**와 관련된 내용입니다.<br>
minimal-mistakes 테마의 커스터마이징 및 포스팅에 작성한 글이 존재합니다. <br>
**Github_Blog 카테고리**를 클릭하셔서 확인해보세요!<br>
{: .notice--success}