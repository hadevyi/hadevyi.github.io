---
title: "[Github Blog] minimal mistakes - 파비콘(Favicon) 세팅하기"
categories:
  - Github_Blog
tags:
  - minimal mistakes
  - jekyll
  - blog
  - favicon
toc: true
toc_sticky: true
toc_label: "FAVICON"
toc_icon: "blog"
---

📌 **작성자 개발 환경** <br>
**OS** : Windows 10<br>
**Tool** : Visual Studio Code<br>
{: .notice--primary}

파비콘(Favicon)이란, 인터넷 웹 브라우저의 주소창에 표시되는 대표 아이콘입니다.<br>
기본적으로 세팅해두지 않으면,<br>

![image](https://user-images.githubusercontent.com/45550607/102047077-fc231d00-3e1f-11eb-9e29-85dcd9c6e70b.png)
{: .text-center}

크롬을 기준으로 이러한 지구본 모양만 보여지게 됩니다.<br>
블로그의 정체성을 나타내기 위해선, 지구본보단 원하는 모양으로 바꾸는게 좋겠죠!<br>
<br>
<br>

# 원하는 이미지 찾기

이미지는 직접 만드셔도 좋고, 찾으셔도 좋습니다.<br>
저같은 경우엔 직접 만들 자신이 없어서 픽토그램을 사용해서 만들기로 했습니다.<br>
자주 사용하던 flaticon을 이용해서 했지만, 이외에도 많은 사이트가 많습니다!<br>

- [flaticon](https://www.flaticon.com/)
- [Icooon-mono](https://icooon-mono.com/)
- [Thenounproject](https://thenounproject.com/)
- [Iconfinder](https://www.iconfinder.com/)
- [Freepik](https://www.freepik.com/)
- [FreeVectors](https://www.freevectors.net/)

제가 결정한 이미지는 이 이미지입니다.<br>
<br>

![apple-icon-60x60](https://user-images.githubusercontent.com/45550607/102047780-37721b80-3e21-11eb-853a-6ec27afa8318.png)
{: .align-left}
이 이미지를 이용해 파비콘으로 등록해보겠습니다.<br>
<br>
<br>
<br>

# favicon icon 만들기

[realfavicongenerator](https://realfavicongenerator.net/)에 접속해서 원하는 사진을 넣어주세요.

![image](https://user-images.githubusercontent.com/45550607/102048128-e3b40200-3e21-11eb-8cc2-58034447de8d.png)
{: .text-center}

흰색 버튼을 보면 Random도 있어서 고민이 되신다면 random하게 받아보시는 것도 좋습니다.<br>

![image](https://user-images.githubusercontent.com/45550607/102048971-62f60580-3e23-11eb-87ec-026baa926fe5.png)
{: .text-center}

해당 사이트에서는 이렇게 각 환경에서 적용되는 모습도 보여줍니다.<br>
이렇게 정리한 후 다운로드를 받으시면 압축 폴더를 받으실 수 있습니다.<br>
정리한 모든 파일을 assets 내의 logo.ico라는 폴더를 만들어 정리해주세요.<br>
<br>

![image](https://user-images.githubusercontent.com/45550607/102048691-f24ee900-3e22-11eb-9934-6bd8c989165c.png)
{: .text-center}

이렇게 정리하셨으면 1차적으로 정리가 완료되셨습니다.<br>
가장 하단에서 Generate your Favicons and HTML code 버튼을 눌러주세요.<br>

![image](https://user-images.githubusercontent.com/45550607/102049292-f2031d80-3e23-11eb-9b6a-ab656118915d.png)
{: .text-center}

그럼 이 코드를 보실 수 있습니다.<br>
이 코드를 활용해서 블로그에 적용해봅시다.<br>
<br>
<br>
<br>

# custom.html 수정

- 수정 파일 : github.io 폴더 > _includes 폴더 > _head 폴더 > custom.html

<script src="https://gist.github.com/eona1301/1503f596d7330d3d4600fcb1df8bde16.js"></script>

최종적으로 업데이트 된 코드는 이와 같습니다.<br>
처음 받은 코드와 다른 내용은 href의 영역 즉 상세 링크입니다.<br>
파일 이름 앞에 {{site.baseurl}}/assets/logo.ico 를 추가해주시면 됩니다.<br>
html에서 변수를 호출하기 위해서는 중괄호가 꼭 이중으로 있어야 합니다.<br>

![image](https://user-images.githubusercontent.com/45550607/102050451-35f72200-3e26-11eb-930f-c1427a2271b3.png)
{: .text-center}

이렇게 최종적으로 적용된 모습을 확인하실 수 있습니다.
<br>
<br>
<br>


🔔 **포스팅 공지** <br><br>
현재 작성한 포스팅은 **깃 블로그 파비콘 세팅**과 관련된 내용입니다.<br>
minimal-mistakes 테마의 커스터마이징 및 포스팅에 관해서도 진행할 예정이니, 
**Github_Blog 카테고리**를 클릭하셔서 확인해보세요!<br>
{: .notice--success}