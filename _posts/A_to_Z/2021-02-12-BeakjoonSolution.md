---
title: "[A to Z] Beakjoon Algorithms Solution"
categories:
  - A_to_Z
tags:
  - beakjoon
  - algorithm
  - solution
toc: true
toc_sticky: true
toc_label: "Beakjoon"
toc_icon: "file-code"
---

💡 **A to Z**는 개별적으로 작성한 게시글을 한 번에 볼 수 있게 정리하였습니다.<br>
문제의 상세한 풀이가 아닌 작성자가 푼 문제를 한눈에 볼 수 있도록 정리하였습니다.<br>
상세한 설명과 관련 이야기(시행착오 및 로직 설명 등)는 개별 포스트에 있습니다.<br>
{: .notice--warning}

# Beakjoon 시작?!

![image](https://user-images.githubusercontent.com/45550607/107451393-88d12980-6b8a-11eb-98b4-35213a6a05ec.png){: .align-center}

어느 정도 개발을 했다고 하면 자연스럽게 코딩테스트를 준비하거나 연습하기 위해 들어온다는 [Beakjoon](https://www.acmicpc.net/) 사이트!<br>
코딩테스트를 준비하는게 아니여도 기초 문제도 많아서 스스로의 프로그래밍 실력을 늘릴 수 있습니다.<br>
<br>
어떤 언어로 풀이를 할지, 또 어떤 순서대로 해야할 지 등 고민이 많으실 분들이 많다고 생각합니다.<br>
저 역시 시작할 때, 주위에 정말 많이 물어보고 고민하면서 시작했던 경험이 있습니다.<br>
<br>

## 어떻게 시작해야하나

가장 고민되는 두가지에 대해서 이야기 해볼까합니다.<br>

1. **어떤 언어로 해야하는가**
2. **어떤 순서로 풀어야하는가**

1번 먼저 이야기 해볼까요?<br>
각자 사용하는 언어도 다양하고 목표도 다양하겠죠. 사실 개인의 목표에 따라 많이 다르다고 생각이 듭니다. <br>
일반적으로 수행 속도가 빠른 C++이나 코드의 길이가 짧게 표현할 수 있는 Python을 추천합니다.<br>
저 역시 C++로 시작했다가 주언어가 Python으로 옮겨지면서 바꿀까하다가 Java를 시작할 기회가 생겨서 시작했습니다.<br>
<br>
즉, **본인 목적**에 따라 하시면 됩니다.<br>
일부 코테에서 지원하지 않는 언어도 있으니 잘 고려하시면서요!<br>
특히 기초문제들은 각 언어 익히시는 데에도 좋을거같습니다.<br>
<br>
<br>
그럼 2번째입니다.<br>
다행히 백준은 다양한 방법으로 문제를 분류해줍니다.<br>
사이트 내의 단계별 풀어보기나 알고리즘 분류로 푸는 것도 좋지만, 저는 <span style="color:blue">solved.ac</span>의 문제 레벨 기준으로 풀고 있습니다.<br><br>
각자 다양한 목차를 보시고 원하는 내용으로 하시됩니다만, <br>
저는 solved.ac 기준으로 풀었을 때 유사한 난도를 반복학습 할 수 있어서 좋았습니다.<br>
<br>
개인에 따라 공부하고 싶은 알고리즘 영역이 명확하다면 알고리즘 분류로 확인해주시는 것도 좋겠습니다.<br>
<br>
<br>

## solved.ac 안 볼 수 없지
<br>

![image](https://user-images.githubusercontent.com/45550607/107643394-6c7fda80-6cb9-11eb-9afe-bbd16ca718b9.png){: .align-center}

<br>
백준을 하다보면 자연스럽게 `어디 티어이야?` 라고 듣게 되는 경우가 있습니다.<br>
처음에 들었을 때, 게임도 아니고 무슨 티어..? 했는데 있더라구요 ㅎㅎ
<br>

[solved.ac](https://solved.ac/) 서비스로 백준 문제의 난이도와 유저 개인의 티어도 볼수가 있습니다.<br>
또, 백준의 <span style="color:blue">설정 > 보기 설정</span>을 통해서 백준 내에서도 쉽게 볼 수 있습니다.<br>
저도 이젠 solved를 쓰는게 더 익숙합니다! 또, 레벨 별로 문제 분류가 되어있어서 더 좋습니다.<br>
전 여기의 분류 기준으로 문제를 순서대로 풀고 있습니다 :) <br>
<br>
<br>


# 백준 주의사항

백준의 문제를 푸는 데 여러가지 주의 사항이 있습니다.<br>
사실 익숙해지면 생각도 하지 않을 부분이지만, 처음에는 이것 때문에 오류가 난다고? 할 정도이죠.<br>

1. package : default
2. Class name : Main
3. 출력결과의 공백 신경쓰기

1,2번은 Java에서 신경써주시면 되시고, 한 번 인식하시면 잘 틀리지 않으실 껍니다.<br>
3번은 생각보다 출력 오류로 자주 오류가 났었습니다.<br>
3번을 해결하실 수 있는 방법은 <span style="color:blue">설정 > 보기 설정 > 예제 공백 하이라이트</span>를 보기로 하시면 됩니다.<br>
이젠 열심히 풀어주시면 됩니다.<br>
<br>


# 포스팅 안내

해당 포스팅은 각 풀이할 문제를 찾기 쉽게 정리하고자 합니다.<br>
단, 백준의 문제의 양은 만개가 넘기 때문에 어디까지 정리가 될지는 잘 모르겠습니다 ㅎㅎ<br>
개별 포스터는 풀이하는 데로 업로드는 할 에정이고, 해당 A to Z는 주 1회 업로드 할 예정입니다.<br>
<br>
해당 포스팅의 길이가 길어지는 만큼 제 실력이 늘어나길 바랍니다.<br>
찾으실 때는 **Ctrl + F**로 문제 번호를 검색해서 봐주시면 좋겠습니다!<br>
<br>


# 문제 풀이 리스트

## 1000번 ~

| &nbsp; &nbsp; &nbsp; &nbsp;문제 번호&nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; 문제 이름&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;문제 레벨&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; Python&nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; C++&nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; Java&nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; 풀이링크&nbsp; &nbsp; &nbsp; |
| :---: | :----------------------------------: | :-----: | :---: | :---: | :---: | :-----------------------------------------------: |
| 1000  |                 A+B                  | BronzeⅤ |   O   |   O   |   O   | [풀이](https://eona1301.github.io/beakjoon/1000/) |
| 1001  |                 A-B                  | BronzeⅤ |   O   |   O   |   O   | [풀이](https://eona1301.github.io/beakjoon/1001/) |
| 1003  |            피보나치 함수             | SilverⅢ |       |       |   O   |                                                   |
| 1008  |                 A/B                  | BronzeⅣ |   O   |   O   |   O   | [풀이](https://eona1301.github.io/beakjoon/1008/) |
| 1011  |     Fly me to the Alpha Centauri     | SilverⅠ |       |       |   O   |                                                   |
| 1074  |                  Z                   | SilverⅠ |       |       |   O   | [풀이](https://eona1301.github.io/beakjoon/1074/) |
| 1110  |            더하기 사이클             | BronzeⅠ |   O   |   O   |   O   | [풀이](https://eona1301.github.io/beakjoon/1110/) |
| 1149  |               RGB 거리               | SilverⅠ |       |   O   |       |                                                   |
| 1158  |            요세푸스 문제             | SilverⅤ |       |       |   O   | [풀이](https://eona1301.github.io/beakjoon/1158/) |
| 1181  |              단어 정렬               | SilverⅤ |       |       |   O   |                                                   |
| 1193  |               분수찾기               | BronzeⅡ |       |       |   O   | [풀이](https://eona1301.github.io/beakjoon/1193/) |
| 1194  |          달이 차오른다 가자          |  GoldⅠ  |       |       |   O   |                                                   |
| 1242  |                 소풍                 |  GoldⅡ  |       |       |   O   |                                                   |
| 1244  |           스위치 켜고 끄기           | SilverⅣ |       |       |   O   |                                                   |
| 1271  |            엄청난 부자 2             | BronzeⅤ |       |       |   O   |                                                   |
| 1330  |            두 수 비교하기            | BronzeⅣ |       |   O   |       |                                                   |
| 1463  |             1 로 만들기              | SilverⅢ |       |   O   |       |                                                   |
| 1546  |                 평균                 | BronzeⅠ |       |   O   |       |                                                   |
| 1550  |               16 진수                | BronzeⅤ |       |       |   O   |                                                   |
| 1592  |           영식이와 친구들            | BronzeⅡ |       |       |   O   |                                                   |
| 1600  |          말이 되고픈 원숭이          |  GoldⅤ  |       |       |   O   |                                                   |
| 1712  |               숫자놀이               | SilverⅤ |       |       |   O   |                                                   |
| 1712  |              손익분기점              | BronzeⅣ |       |       |   O   |                                                   |
| 1759  |             암호 만들기              |  GoldⅤ  |       |       |   O   |                                                   |
| 1918  |             후기 표기식              |  GoldⅣ  |       |       |   O   |                                                   |
| 1922  |            네트워크 연결             |  GoldⅣ  |       |       |   O   |                                                   |
| 1987  |                알파벳                |  GoldⅣ  |       |       |   O   |                                                   |
| 1992  |               쿼드트리               | SilverⅠ |       |       |   O   |                                                   |
| 2161  |                카드 1                | BronzeⅡ |       |       |   O   | [풀이](https://eona1301.github.io/beakjoon/2161/) |
| 2206  |          벽 부수고 이동하기          |  GoldⅣ  |       |       |   O   |                                                   |
| 2292  |                 벌집                 | BronzeⅡ |       |       |   O   |                                                   |
| 2309  |             일곱 난쟁이              | BronzeⅡ |       |       |   O   |                                                   |
| 2420  |              사파리월드              | BronzeⅣ |       |       |   O   |                                                   |
| 2438  |               별찍기 1               | BronzeⅢ |       |   O   |       |                                                   |
| 2439  |               별찍기 2               | BronzeⅢ |       |   O   |       |                                                   |
| 2446  |               별찍기 9               | BronzeⅢ |       |   O   |       |                                                   |
| 2475  |                검증수                | BronzeⅤ |       |       |   O   | [풀이](https://eona1301.github.io/beakjoon/2475/) |
| 2493  |                  탑                  |  GoldⅤ  |       |       |   O   |                                                   |
| 2523  |              별찍기 13               | BronzeⅢ |       |   O   |       |                                                   |
| 2557  |             Hello World              | BronzeⅤ |       |   O   |       |                                                   |
| 2558  |               A+B - 2                | BronzeⅤ |       |       |   O   |                                                   |
| 2562  |                최대값                | BronzeⅡ |       |       |   O   |                                                   |
| 2563  |                색종이                | SilverⅤ |       |       |   O   |                                                   |
| 2564  |                경비원                | SilverⅠ |       |       |   O   |                                                   |
| 2577  |             숫자의 개수              | BronzeⅢ |       |       |   O   |                                                   |
| 2578  |                 빙고                 | SilverⅤ |       |       |   O   |                                                   |
| 2580  |                tmehzn                |  GoldⅣ  |       |       |   O   |                                                   |
| 2588  |                 곱셈                 | BronzeⅣ |       |   O   |       |                                                   |
| 2669  | 직사각형 네개의 합집합의 면적 구하기 | BronzeⅡ |       |   O   |       |                                                   |
| 2675  |             문자열 반복              | BronzeⅡ |       |       |   O   |                                                   |
| 2739  |                구구단                | BronzeⅢ |       |   O   |       |                                                   |
| 2741  |                N 찍기                | BronzeⅢ |       |   O   |       |                                                   |
| 2742  |                기찍 N                | BronzeⅢ |       |   O   |       |                                                   |
| 2753  |                 윤년                 | BronzeⅣ |       |   O   |       |                                                   |
| 2775  |          부녀회장이 될테야           | BronzeⅡ |       |       |   O   |                                                   |
| 2798  |                블랙잭                | BronzeⅡ |       |       |   O   |                                                   |
| 2810  |                컵홀더                | BronzeⅡ |       |       |   O   |                                                   |
| 2839  |              설탕 배달               | BronzeⅠ |       |       |   O   |                                                   |
| 2845  |         파티가 끝나고 난 뒤          | BronzeⅤ |       |       |   O   |                                                   |
| 2846  |               오르막길               | BronzeⅡ |       |       |   O   |                                                   |
| 2851  |              슈퍼마리오              | BronzeⅠ |       |       |   O   |                                                   |
| 2869  |        달팽이는 올라가고 싶다        | BronzeⅠ |       |       |   O   |                                                   |
| 2884  |              알람 시계               | BronzeⅢ |       |   O   |       |                                                   |
| 2914  |                저작권                | BronzeⅤ |       |       |   O   |                                                   |
| 2941  |          크로아티아 알파벳           | SilverⅤ |       |       |   O   |                                                   |
| 2961  |      도영이가 만든 맛있는 음식       | SilverⅠ |       |       |   O   |                                                   |
| 3003  |     킹, 퀸, 룩, 비숍, 나이트, 폰     | BronzeⅤ |       |       |   O   |                                                   |
| 3040  |       백설 공주와 일곱 난쟁이        | BronzeⅡ |       |       |   O   |                                                   |
| 3046  |                  R2                  | BronzeⅤ |       |       |   O   |                                                   |
| 3052  |                나머지                | BronzeⅡ |       |   O   |       |                                                   |
| 3109  |                 빵집                 |  GoldⅡ  |       |       |   O   |                                                   |
| 3985  |              롤 케이크               | BronzeⅠ |       |       |   O   |                                                   |
| 4344  |            평균은 넘겠지             | BronzeⅠ |       |       |   O   |                                                   |
| 4673  |              셀프 넘버               | BronzeⅠ |       |       |   O   |                                                   |

## 5000번 ~

| &nbsp; &nbsp; &nbsp; &nbsp;문제 번호&nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; 문제 이름&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;문제 레벨&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; Python&nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; C++&nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; Java&nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; 풀이링크&nbsp; &nbsp; &nbsp; |
| :---: | :--------------: | :-----: | :---: | :---: | :---: | :---: |
| 5339  |      콜센터      | BronzeⅤ |       |       |   O   |       |
| 5543  |     상근날드     | BronzeⅣ |       |   O   |       |       |
| 5554  |  심부름 가는 길  | BronzeⅤ |       |       |   O   |       |
| 7576  |      토마토      | SilverⅠ |       |   O   |       |       |
| 8393  |        합        | BronzeⅤ |       |   O   |       |       |
| 8958  |     OX 퀴즈      | BronzeⅡ |       |   O   |       |       |
| 9498  |    시험 성적     | BronzeⅣ |       |   O   |       |       |
| 9653  |  스타워즈 로고   | BronzeⅤ |       |       |   O   |       |
| 9654  | 나부 함대 데이터 | BronzeⅤ |       |       |   O   |       |
| 9742  |       순열       | SilverⅤ |       |       |   O   |       |


## 10000번 ~

| &nbsp; &nbsp; &nbsp; &nbsp;문제 번호&nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; 문제 이름&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;문제 레벨&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; Python&nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; C++&nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; Java&nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; 풀이링크&nbsp; &nbsp; &nbsp; |
| :---: | :-----------------: | :-----: | :---: | :---: | :---: | :---: |
| 10039 |      평균 점수      | BronzeⅣ |       |   O   |       |       |
| 10158 |        개미         | SilverⅤ |       |       |   O   |       |
| 10163 |       색종이        | BronzeⅠ |       |       |   O   |       |
| 10170 |  NFC West vs North  | BronzeⅤ |       |       |   O   |       |
| 10171 |       고양이        | BronzeⅤ |       |   O   |       |       |
| 10172 |         개          | BronzeⅤ |       |   O   |       |       |
| 10250 |      ACM 호텔       | BronzeⅢ |       |       |   O   |       |
| 10430 |       나머지        | BronzeⅤ |       |   O   |       |       |
| 10718 |    We love kriii    | BronzeⅤ |       |   O   |       |       |
| 10757 |      큰 수 A+B      | BronzeⅤ |       |       |   O   |       |
| 10809 |     알파벳 찾기     | BronzeⅡ |       |       |   O   |       |
| 10817 |        세 수        | BronzeⅢ |       |   O   |       |       |
| 10818 |     최소, 최대      | BronzeⅢ |       |   O   |       |       |
| 10869 |      사칙연산       | BronzeⅤ |       |   O   |       |       |
| 10870 |    피보나치 수 5    | BronzeⅡ |       |       |   O   |       |
| 10871 |   X 보다 작은 수    | BronzeⅢ |       |   O   |       |       |
| 10872 |      팩토리얼       | BronzeⅢ |       |       |   O   |       |
| 10926 |         ??!         | BronzeⅤ |       |       |   O   |       |
| 10950 |       A+B - 3       | BronzeⅢ |       |   O   |       |       |
| 10951 |       A+B - 4       | BronzeⅢ |       |   O   |       |       |
| 10952 |       A+B - 5       | BronzeⅢ |       |   O   |       |       |
| 10996 |    별 찍기 - 21     | BronzeⅡ |       |   O   |       |       |
| 10998 |         A×B         | BronzeⅤ |       |   O   |       |       |
| 11021 |       A+B - 7       | BronzeⅢ |       |   O   |       |       |
| 11022 |       A+B - 8       | BronzeⅢ |       |   O   |       |       |
| 11654 |     아스키 코드     | BronzeⅤ |       |       |   O   |       |
| 11720 |      숫자의 합      | BronzeⅡ |       |       |   O   |       |
| 11729 | 하노이 탑 이동 순서 | SilverⅡ |       |       |   O   |       |
| 11942 | 고려대는 사랑입니다 | BronzeⅤ |       |       |   O   |       |
| 13300 |       방 배정       | BronzeⅡ |       |       |   O   |       |
| 14503 |     로봇 청소기     |  GoldⅤ  |       |       |   O   |       |
| 14645 |  와이버스 부릉부릉  | BronzeⅤ |       |       |   O   |       |
| 14681 |    사분면 고르기    | BronzeⅣ |       |   O   |       |       |




## 15000번 ~

| &nbsp; &nbsp; &nbsp; &nbsp;문제 번호&nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; 문제 이름&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;문제 레벨&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; Python&nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; C++&nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; Java&nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; 풀이링크&nbsp; &nbsp; &nbsp; |
| :---: | :----------------: | :-----: | :---: | :---: | :---: | :------------------------------------------------: |
| 15552 |      빠른 A+B      | BronzeⅡ |       |   O   |       |                                                    |
| 15596 |   정수 N 개의 합   | BronzeⅡ |       |       |   O   |                                                    |
| 15686 |     치킨 배달      |  GoldⅤ  |       |       |   O   |                                                    |
| 16926 |   배열 돌리기 1    | SilverⅣ |       |       |   O   |                                                    |
| 16927 |   배열 돌리기 2    | SilverⅠ |       |       |   O   |                                                    |
| 16935 |   배열 돌리기 3    | SilverⅢ |       |       |   O   |                                                    |
| 16956 |     늑대와 양      | SilverⅣ |       |       |   O   | [풀이](https://eona1301.github.io/beakjoon/16956/) |
| 17135 |    캐슬 디펜스     |  GoldⅣ  |       |       |   O   |                                                    |
| 17478 | 재귀함수가 뭔가요? | SilverⅤ |       |       |   O   |                                                    |
| 20299 |     3 대 측정      | BronzeⅡ |       |       |   O   |                                                    |



🔔 **포스팅 공지** <br><br>
현재 작성한 포스팅은 **Beakjoon**과 관련된 종합 내용입니다.<br>
<br>
A to Z 카테고리는 지금까지 진행할 포스팅을 확인하기 편하게 순서대로 정리한 글입니다.<br>
각각의 포스터에서 조금 더 자세한 설명과 팁 등이 적혀있으니 참조해주세요.<br>
{: .notice--success}