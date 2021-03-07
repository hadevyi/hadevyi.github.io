---
title: "[Github Blog] MarkDown 프로그래밍 코드 작성하기"
categories:
  - Github_Blog
tags:
  - minimal mistakes
  - jekyll
  - blog
toc: true
toc_sticky: true
toc_label: "CODE POSTING"
toc_icon: "blog"
---

📌 **작성자 개발 환경** <br>
**OS** : Windows 10<br>
**Tool** : Github Gist<br>
{: .notice--primary}

기술 블로그를 작성하면, 프로그래밍 코드가 아예 없는 글을 작성하긴 힘듭니다!<br>
알고리즘 코드를 작성하거나, 기본 개념부터 개발자는 프로그래밍 코드와 뗄 수 없는 사이죠.<br>
<br>
프로그래밍 코드 블록을 작성하는 다양한 방법을 소개해드리겠습니다.<br>
저 역시 많이 고민했는데, 알게 되어서 이렇게 공유해봅니다!<br>
<br>
<br>

# MD Code Block

Markdown에는 기본적으로 프로그래밍 코드를 작성해줄 수 있는 문법이 있습니다.<br>
이건 많은 분들이 가장 많이 하는 방법입니다.<br>

## 작성 방법

작성하는 방법은 두가지 방법이 아래와 같습니다.

1) 첫 번째
~~~text
```원하는 확장자 (ex. py, java, md 등)
원하는 프로그래밍 코드 내용
```
~~~

<br>
2) 두 번째
```text
~~~원하는 확장자 (ex. py, java, md 등)
원하는 프로그래밍 코드 내용
~~~
```
<br>

## 작성 결과

```py
name = input("이름을 입력해주세요 : ")
print(F"지금 접속한 {name}님 환영합니다!")
```

~~~text
```py
name = input("이름을 입력해주세요 : ")
print(F"지금 접속한 {name}님 환영합니다!")
```
~~~

## 장점

md의 간단한 문법 형식으로 코드를 쉽게 작성할 수 있습니다.<br>
심지어 text, py, java, md 등 간단한 문법 체계만 갖추면, 각 문법에 알맞게 코드도 보여지죠.<br>
<br>

## 단점

우선 <span style="color:blue;">**가독성이 떨어집니다.**</span> 몇번째 라인인지, 확인하기가 많이 힘들죠.<br>
<br>
또 <span style="color:blue;">**유지보수 면**</span>으로는 <span style="color:blue;">**좋지 않습니다.**</span><br>
포스팅을 하는 사람들도 정말 "사람"인지라 오타가 자주 발생하죠. (제가 자주 그럽니다.. 😂)<br>
그 오타를 발견하는 등 코드를 수정해야한다면, 포스팅 전체를 수정해야죠...<br>
<br>
그리고 일부 상황에서는 <span style="color:blue;">**코드가 아닌 실행할 결과**</span>가 반영이 되서 포스팅하기가 어렵습니다.<br>
실제로 github io의 sitemap.xml 작성 방법을 포스팅할 때,<br>
코드가 실행되서 크롤링한 값이 보여집니다. 매우 당혹스럽죠...<br>
<br>
<br>

# 새로운 방법 고민

블로그 포스팅을 오래한 것은 아니지만, 간간히 마주치는 markdown code block 때문에 꽤나 고생해봤습니다.<br>
설명을 할 때, 코드 라인별로 설명하는게 좋기에 어떻게 하면 IDE 환경처럼 보일 수 있을까를 고민했습니다.<br>
<br>
그렇게 구글링을 하고 웹에 둥둥 떠다니다보니, 다른 분들의 코드가 보였습니다.<br>
제가 생각한 것처럼 이쁘게 포스팅을 하시더라구요!<br>
지금부터 소개해드릴 부분이 새롭게 적응해보고 다뤄본 내용입니다!<br>
<br>
<br>

# Github Gist

![image](https://user-images.githubusercontent.com/45550607/110230800-e0c73a00-7f56-11eb-93e1-4e13e4d3eb0c.png){: .image-center}

Github와는 별개로 작성할 수 있으며, 원하는 코드 블럭만 만들 수 있습니다.<br>
[Github Gist](https://gist.github.com/)에 접속하면 위와 같은 화면을 보실 수 있습니다.<br>
Github처럼 코드를 업로드할 수 있으며, 각 문법 사항도 적응할 수 있습니다.<br>
지금부터 상세히 설명드릴테니 잘 따라오세요!!!<br>
<br>
<br>

## 작성 방법

![image](https://user-images.githubusercontent.com/45550607/110230896-8c708a00-7f57-11eb-922f-73ee7981a691.png){: .image-center}

위 화면처럼 작성을 해주세요. <br>

- 최상단 : 현재 코드의 설명
- 파일명 : ~.py, ~.java 등으로 끝나는 파일명, 해당 확장자대로 코드 문법을 맞춤
- 코드란 : 원하는 코드를 작성

이 후에 Create를 하면 되는데, 2가지에 옵션이 있습니다.<br>
secret와 pulic이 있지만 저희가 진행되는 내용에는 사실 2개가 크게 구별되진 않습니다.<br>
secret로 하면 내 gish에서는 타인이 볼 수 없으며, pulic은 볼 수 있습니다.<br>
허나 저흰 이 코드의 주소를 Copy에서 사용할 것이기 때문에 개인의 선택에 따라 하시면 됩니다!<br>
<br>

![image](https://user-images.githubusercontent.com/45550607/110230979-2cc6ae80-7f58-11eb-97d5-6936e04df6d9.png){: .image-center}

이렇게 작성이 완료된 화면에서, 제가 빨간 사각형을 한 영역에서 해당 코드의 Embed 코드를 얻을 수 있습니다.<br>
이 코드를 우측 버튼으로 Copy하여 원하는 posting 위치에 넣으면 됩니다.<br>
<br>
<br>

## 작성 결과

<script src="https://gist.github.com/eona1301/d8087874070c4ccaae7ca09895adcfd6.js"></script>

<br>
<br>

## 장점

아무래도 코드가 조금 더 깔끔하고, 알아보기가 쉽습니다. 즉, 가독성이 많이 올라가게 되었죠.<br>
그리고 markdown code block에서 발생했던 오류는 찾을 수가 없습니다.<br>
코드를 수정하고 싶을 때, 이미 작성한 gish를 수정하면 Embed 주소는 그대로니 바로 반영될 수 있습니다.<br>
또 포스팅 자체에 코드적인 부분은 gish로 바뀌고, Embed Link 하나가 되니 포스팅에도 집중하게 됩니다!<br>
<br>
저도 이 방법을 찾고 블로그 전체 code block을 모두 수정했습니다!<br>
단점은 사실 아직 찾을 수가 없네요 :) <br>
<br>
<br>
제가 블로그 3달차이지만 꽤 많이 고생해서 포스팅에 TMI가 많긴했네요..! 😁<br>
다들 편리한 프로그래밍 코드 포스팅 하세요!!!
<br>
<br>

🔔 **포스팅 공지** <br><br>
현재 작성한 포스팅은 **깃 블로그 코드 작성하기**와 관련된 내용입니다.<br>
minimal-mistakes 테마의 커스터마이징 및 포스팅에 작성한 글이 존재합니다. <br>
**Github_Blog 카테고리**를 클릭하셔서 확인해보세요!<br>
{: .notice--success}