---
title: "[A to Z] SW Expert Academy Algorithms Solution"
categories:
  - A_to_Z
tags:
  - SWEA
  - algorithm
  - solution
toc: true
toc_sticky: true
toc_label: "SWEA"
toc_icon: "file-code"
---

💡 **A to Z**는 개별적으로 작성한 게시글을 한 번에 볼 수 있게 정리하였습니다.<br>
문제의 상세한 풀이가 아닌 작성자가 푼 문제를 한눈에 볼 수 있도록 정리하였습니다.<br>
상세한 설명과 관련 이야기(시행착오 및 로직 설명 등)는 개별 포스트에 있습니다.<br>
{: .notice--warning}

# SWEA?!

![image](https://user-images.githubusercontent.com/45550607/109965056-cc562800-7d31-11eb-97d6-5fdbc88c5930.png){: .align-center}

<span style="color:blue;font-weight:bold">삼성</span>에서 운영하고, 알고리즘을 비롯해 다양한 학습도 할 수 있는 사이트입니다.<br>
사실 백준, 프로그래머스 등 낯익은 문제 사이트도 있었지만 SW Expert Academy (이하 SWEA)는 생소했습니다.<br>
헌데 저만 생소할 뿐, 삼성과 관련한 입사 준비나 알고리즘을 넓게 풀어보신 분들께는 꽤나 낯익은 사이트더라구요!<br>
<br>
백준보다는 조금 더 친절한 사이트로 개인적으로는 테스크 케이스 체크를 많이 할 수 있는 사이트라 정말 좋아합니다.<br>
<br>
<br>

# 장점

## 알고리즘

![image](https://user-images.githubusercontent.com/45550607/109968541-3244ae80-7d36-11eb-9d40-1622963c35ea.png){: .align-center}

위 사진은 제가 실제 SWEA 문제를 푸는 화면입니다.<br>
<br>
원래 사용하던 백준 사이트와는 다르게 SWEA는 많은 테스트 케이스를 공개하고,<br>
그 **테스트 케이스를 input과 output으로 구별해서 txt 파일로 제공**합니다.<br>
<br>
이 말인 즉 **사이트에 제출하지 않아도, 다양한 테스트 케이스의 결과를 로컬에서 확인**할 수 있습니다.<br>
또한 사이트 내의 자체 디버깅 기능도 있어서 제출하기 전에 확인도 할 수 있습니다.<br>
<br>
<br>

## LEARN

![image](https://user-images.githubusercontent.com/45550607/109973220-78e8d780-7d3b-11eb-94e1-34827e78e2ca.png){: .align-center}

SWEA 가입 후에는 여기 있는 강의를 모두 들을 수 있습니다.<br>
각 강의마다 실습도 있고, 이론도 있고 다양하게 있어서, 알고리즘을 시작하기 전에 언어 공부용으로도 좋습니다.<br>
디테일하나 부분을 모두 캐치한다기 보다는 기초적이고 핵심적으로 꼭 다뤄야하는 내용들을 짚기에,<br>
새로운 공부를 하고 싶다면 확인하는 것도 좋은 것같습니다 :)<br>
<br>
<br>

# SWEA 주의사항

SWEA는 오직 Java로만 풀 예정입니다. (이러고 언제 마음이 바뀔지는 모르겠지만...)<br>
따라서 Java 기준으로의 주의사항을 작성할 테니 유의해주세요!

1. package : default
2. Class name : Solution
3. FileInputStream 지우기

특히 3번의 경우 SWEA의 장점인 input.txt가 있기 때문에, 편해서 쓰다가 안지우고 제출한 적도 많습니다.🤣<br>
이렇게만 챙겨주시면 오히려 테스트 케이스도 많이 확인하시면서 더욱 다양한 사고를 하실 수 있을 껍니다!!<br>
<br>
<br>

# 포스팅 안내

해당 포스팅은 각 풀이할 문제를 찾기 쉽게 정리하고자 합니다.<br>
A to Z에는 어떤 문제를 풀었는지를, 그리고 개별 포스터에 세부 풀이를 할 예정입니다.<br>
1주일에 1회 식 수정/업데이트 할 예정입니다!<br>
<br>
이 포스팅의 길이가 길어지는 만큼 실력이 늘어나도록 노력해보겠습니다.<br>
원하시는 문제를 찾으실 때는 **Ctrl + F**로 문제 번호를 검색해서 봐주시면 좋겠습니다!<br>
<br>
<br>

# 문제 풀이 리스트

|  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;문제 번호&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; |  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;문제 이름&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;    | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;문제 레벨&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;풀이링크&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; |
| :---: | :----------------------------------------------: | :----------------: | :---: |
| 1208  |       [S/W 문제해결 기본] 1일차 - Flatten        |         D3         |       |
| 1209  |         [S/W 문제해결 기본] 2일차 - Sum          |         D3         |       |
| 1210  |       [S/W 문제해결 기본] 1일차 - Flatten        |         D4         |       |
| 1218  |     [S/W 문제해결 기본] 4일차 - 괄호 짝짓기      |         D4         |       |
| 1220  |       [S/W 문제해결 기본] 5일차 - Magnetic       |         D3         |       |
| 1223  |       [S/W 문제해결 기본] 6일차 - 계산기2        |         D4         |       |
| 1224  |       [S/W 문제해결 기본] 6일차 - 계산기3        |         D4         |       |
| 1225  |      [S/W 문제해결 기본] 7일차 - 암호생성기      |         D3         |       |
| 1233  | [S/W 문제해결 기본] 9일차 - 사칙연산 유효성 검사 |         D4         |       |
| 1234  |      [S/W 문제해결 기본] 10일차 - 비밀번호       |         D3         |       |
| 1247  |      [S/W 문제해결 응용] 3일차 - 최적 경로       |         D5         |       |
| 1289  |              원재의 메모리 복구하기              |         D3         |       |
| 1767  |       [SW Test 샘플문제] 프로세서 연결하기       |  SW Test 샘플문제  |       |
| 1859  |                백만 장자 프로젝트                |         D2         |       |
| 1861  |                   정사각형 방                    |         D4         |       |
| 1873  |                 상호의 배틀필드                  |         D3         |       |
| 1940  |                   가랏! RC카!                    |         D2         |       |
| 1948  |                   날짜 계산기                    |         D2         |       |
| 1954  |                   달팽이 숫자                    |         D2         |       |
| 1974  |                   스도쿠 검증                    |         D2         |       |
| 1996  |                 숫자를 정렬하자                  |         D2         |       |
| 2001  |                    파리 퇴치                     |         D2         |       |
| 2005  |                 파스칼의 삼각형                  |         D2         |       |
| 2105  |         [모의 SW 역량테스트] 디저트 카페         | 모의 SW 역량테스트 |       |
| 2805  |                 농작물 수확하기                  |         D3         |       |
| 3234  |                준환이의 양팔저울                 |         D4         |       |
| 3499  |                   퍼펙트 셔플                    |         D3         |       |
| 4012  |           [모의 SW 역량테스트] 요리사            | 모의 SW 역량테스트 |       |
| 5215  |                 햄버거 다이어트                  |         D3         |       |
| 5432  |                 쇠막대기 자르기                  |         D4         |       |
| 5603  |             [Professional] 건초더미              |         D3         |       |
| 6808  |            규영이와 인영이의 카드게임            |         D3         |       |
| 9229  |                한빈이와 Spot Mart                |         D3         |       |



🔔 **포스팅 공지** <br><br>
현재 작성한 포스팅은 **SW Expert Academy**과 관련된 종합 내용입니다.<br>
<br>
A to Z 카테고리는 지금까지 진행할 포스팅을 확인하기 편하게 순서대로 정리한 글입니다.<br>
각각의 포스터에서 조금 더 자세한 설명과 팁 등이 적혀있으니 참조해주세요.<br>
{: .notice--success}