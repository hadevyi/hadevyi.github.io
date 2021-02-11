---
title: "[Github Blog] minimal mistakes - 본문 영역 및 글자 크기"
categories:
  - Github_Blog
tags:
  - minimal mistakes
  - jekyll
  - blog
toc: true
toc_sticky: true
toc_label: "CONTENT"
toc_icon: "blog"
---

📌 **작성자 개발 환경** <br>
**OS** : Windows 10<br>
**Tool** : Visual Studio Code<br>
{: .notice--primary}

![image](https://user-images.githubusercontent.com/45550607/102040117-228c8c80-3e0f-11eb-8954-1df0b6d835fe.png)<br>
(minimal mistakes 제작자 Michael Rose [Sample Post](https://mmistakes.github.io/minimal-mistakes/markup-syntax-highlighting/))
{: .text-center}

minimal mistakes를 사용하기 전에 제일 머뭇거렸던 이유가 콘텐츠 영역의 너비가 너무 좁다는 것이였습니다.<br>
minimal mistakes 자체에서 wide page를 지원해줍니다.<br>
- minimal mistakes의 공식 홈페이지 가이드 [Wide-Page](https://mmistakes.github.io/minimal-mistakes/docs/layouts/#wide-page)에서 직접 확인하실 수 있습니다.<br>

하지만 이러한 경우 toc가 상단에 고정되게 됩니다.<br>
포스팅을 보는 중에 원하는 곳으로 언제든 이동할 수 있다는 것이 toc의 가장 큰 장점인데...🤦🏻‍♀️<br>
따라서 이 영역을 코드로 직접적으로 코드를 수정해야합니다.<br>
오늘은 이에 대해서 정리해보도록 하겠습니다. <br>
<br>
<br>

# WIDTH 조절하기

## _variables.scss 수정

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

# BLOG FONT 조절하기

## 글자 크기 : _reset.scss 수정

- 수정 파일 : github.io 폴더 > _sass 폴더 > _minimal-mistakes 폴더 > _reset.scss
<br>

<script src="https://gist.github.com/eona1301/891391423d765b7169ba87b15fbfd298.js"></script>

원 코드의 상단부(7번줄)에 있는 코드이기에 금방 찾으실 수 있으실 껍니다.<br>
전체적인 폰트의 기준은 없습니다!<br>
로컬 서버에서 직접 등록해보시면서, 원하시는 크키로 조정하시면 됩니다.<br>
<br>
<br>

## 밑줄 제거 : _base.scss 수정

![image](https://user-images.githubusercontent.com/45550607/102044651-a4ce7e00-3e1a-11eb-8f75-59ec2f1aa43b.png)<br>
{: .text-center}

처음 블로그를 세팅하면 각 포스터가 하이퍼링크로 처리된걸 확인하실 수가 있습니다.<br>
이가 계속 눈에 보이더라구요. 이미 많은 분들이 minimal mistakes에서 이를 많이 적용하셨더라구요.<br>
하이퍼링크는 a라는 태그값을 갖고있습니다.<br>
<br>

- 수정 파일 : github.io 폴더 > _sass 폴더 > _minimal-mistakes 폴더 > _base.scss
<br>

<script src="https://gist.github.com/eona1301/e7b36fcee4cfea32a7f3413b3cebef4f.js"></script>

base 파일의 중반부(127번줄)에 있습니다.<br>
찾기 힘드실 때는 Ctrl + F를 통해 `a{` 를 검색하셔서 확인해보세요! <br>
이후 하이퍼링크 처리와 관련된 decoration을 해지해야하니 이를 전체에 적용될 수 있도록 추가해주시면 되겠습니다!<br>
<br>
<br>


🔔 **포스팅 공지** <br><br>
현재 작성한 포스팅은 **깃 블로그 본문 및 폰트**와 관련된 내용입니다.<br>
minimal-mistakes 테마의 커스터마이징 및 포스팅에 관해서도 진행할 예정이니, 
**Github_Blog 카테고리**를 클릭하셔서 확인해보세요!<br>
{: .notice--success}