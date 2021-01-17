---
title: "[Github Blog] minimal mistakes - 포스팅 글 써보기"
categories:
  - Github_Blog
tags:
  - minimal mistakes
  - jekyll
  - blog
toc: true
toc_sticky: true
toc_label: "POSTING"
toc_icon: "blog"
---

📌 **작성자 개발 환경** <br>
**OS** : Windows 10<br>
**Tool** : Visual Studio Code<br>
{: .notice--primary}

이제 본격적으로 포스팅 올리는 방법에 대해서 설명드리겠습니다.<br>
minimal mistakes의 경우 양식이 정해져있어서, 한번 익숙해지시면 손쉽게 포스팅 가능하실껍니다.<br>
<br>

# 폴더 생성하기

- 생성 파일 : github.io 폴더 > _posts 폴더

![image](https://user-images.githubusercontent.com/45550607/102193457-737bae00-3eff-11eb-9176-b97e0a487715.png)
{: .text-center}

이전에 docs 파일을 참고하여, 포스팅 글을 정리할 폴더 _posts를 생성하였습니다.<br>
여기까지만 하면, 포스팅은 충분히 등록할 수 있습니다.<br>
<br>
하지만 이렇게만 업데이트하면 관리가 어려울 것 같아서 각 카테고리마다 추가적으로 폴더화했습니다.<br>
어떤 분은 연도마다 하시기도 하시더라구요!<br>
<br>
필수사항은 아니니 이렇게 할 수도 있구나로 생각해주시면 될 것같습니다.<br>

![image](https://user-images.githubusercontent.com/45550607/102195867-79bf5980-3f02-11eb-86f3-66ebf19cc679.png)<br>
(카테고리 별 폴더화 ; 제 정리 방법입니다. 필수는 아니에요!)
{: .text-center}
<br>
<br>
<br>

# 포스터 양식 확인

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

# 포스터 내용 작성

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

## 문자 정렬

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

## 이미지

### MD 이미지 표시하기

우선 markdown에 사진을 넣는 것을 어려워하시는 분이 있어, 이것부터 설명드리고 시작해보겠습니다.<br>
오늘 테스트해보고자 하는 사진은, 제가 먹고싶은 "애플망고"입니다. <i>(ㅋㅋㅋㅋㅋㅋ)</i><br>
<br>
직접적으로 사진을 첨부하실 수 있지만, 오늘 할 것은 조금 더 간단한 방법입니다.<br>
<br>
<br>

1) github repo의 Issues에 접속하세요. (아무 repo나 괜찮습니다.) <br>

![image](https://user-images.githubusercontent.com/45550607/102207515-8f884b00-3f11-11eb-967f-289f43b9e131.png)
{: .align-center}
<br>

2) New Issue를 눌러주세요.

![image](https://user-images.githubusercontent.com/45550607/102207525-91eaa500-3f11-11eb-876a-c4136c068bc2.png)
{: .align-center}
<br>

3) 원하는 사진을 작성 영역으로 드래그합니다.

![image](https://user-images.githubusercontent.com/45550607/102207533-944cff00-3f11-11eb-8145-6ea8e584aff6.png)
{: .align-center}
<br>

4) 처음에 이러한 업로드 코드가 뜹니다.

![image](https://user-images.githubusercontent.com/45550607/102207538-9616c280-3f11-11eb-95a0-d6a57956a8bf.png)
{: .align-center}
<br>

5) 약 1~2초만 기다리면 코드가 만들어집니다.
![image](https://user-images.githubusercontent.com/45550607/102207543-9747ef80-3f11-11eb-8bab-71db01706ddd.png)
{: .align-center}
<br>

6) 해당 코드를 복붙하여 VS Code에 넣으시면 사진이 보여집니다.

![image](https://user-images.githubusercontent.com/45550607/102208131-60260e00-3f12-11eb-9524-44ea1bbddeef.png)
{: .align-center}
<br>

사진의 원본 사이즈대로 보여지기 때문에,<br>
간단하게 사이즈 조정하시려면 그림판이나 PPT에서 조정하셔도 되고, 코드로 resize해주셔도 됩니다.<br>
<br>


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

## 문자 박스 

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
<br>

지금까지의 제 기준으로 포스팅하면서 많이 사용하는 내용을 기록해보았습니다.<br>
내용을 로컬 서버에서 테스트하셔도 되고, github push 후 블로그 주소에서 확인할 수 있습니다.<br>
github push는 딜레이가 조금 있으니 로컬 서버에서 먼저 확인하고, 하시는게 좋습니다!<br>
<br>
지금까지 진행한 내용 중에 적용이 안되시거나 이해가 힘드신 내용이 있다면 댓글로 남겨주세요 :)<br>
<br>
<br>

🔔 **포스팅 공지** <br><br>
현재 작성한 포스팅은 **깃 블로그 포스팅**과 관련된 내용입니다.<br>
minimal-mistakes 테마의 커스터마이징 및 포스팅에 관해서도 진행할 예정이니, 
**Github_Blog 카테고리**를 클릭하셔서 확인해보세요!<br>
{: .notice--success}