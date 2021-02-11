---
title: "[Github Blog] minimal mistakes - 방문자 통계(Analytics)하기"
categories:
  - Github_Blog
tags:
  - minimal mistakes
  - jekyll
  - blog
  - google analytics
toc: true
toc_sticky: true
toc_label: "ANALYTICS"
toc_icon: "blog"
---

📌 **작성자 개발 환경** <br>
**OS** : Windows 10<br>
**Tool** : Visual Studio Code<br>
{: .notice--primary}

블로그를 운영하는 가장 큰 힘이자 원동력이 아무래도 방문자겠죠.<br>
그래서 얼마만큼의 방문자가 접속했는지가 가장 궁금하게 됩니다.<br>
따라서 이를 분석해서 제공해주는 google Analytics를 적용해보고자 합니다.<br>
<br>
<br>

# Google Analytics 등록하기

1) [Google Analytics](https://analytics.google.com/analytics/web/) 에 접속하시면 무료로 시작할 수 있습니다. 당연히도 Google 계정이 필요하니 로그인해주세요.<br>

![image](https://user-images.githubusercontent.com/45550607/102706869-fd00f680-42d8-11eb-95a5-46aa37f79b49.png){: .align-center}
<br>

2) 1단계입니다. 계정 이름은 통계에는 영향이 없어서 자유롭게 지어주시면 됩니다.<br>

![image](https://user-images.githubusercontent.com/45550607/102706872-00947d80-42d9-11eb-9a40-e3cab9d00560.png){: .align-center}
<br>

3) 블로그 주소를 속성 이름으로 등록하시고, 보고 시간대를 정리해주세요.<br>
   물론 현재는 제가 넣은 방법으로 기재한 것입니다! 다른 시간대를 원하면 그렇게 설정해주셔도 됩니다.<br>

![image](https://user-images.githubusercontent.com/45550607/102706874-038f6e00-42d9-11eb-8021-dd99b28b4ffe.png){: .align-center}

<br>
<br>
이전 댓글 기능을 추가했을때 shortname을 추가하신 것 기억나시나요?<br>
역시 여기서도 찾아야할 이름이 필요합니다.<br>
google analytics에서는 `tracking_id` 라고 하는데, 꼭꼭 숨겨져 있어서 찾기 힘들때가 있어서 기재해봅니다.<br>
<br>
<br>
<br>

# tracking ID 찾기

1) Analystics의 가장 하단에 있는 관리 버튼을 찾아주세요.<br>

![image](https://user-images.githubusercontent.com/45550607/102707394-dee9c500-42dd-11eb-9fe3-43dab211376a.png){: .align-center}
<br>

2) 관리자-사용자 관리 화면이 뜨며, 데이터 스트림 버튼을 찾아주세요.<br>

![image](https://user-images.githubusercontent.com/45550607/102707396-e0b38880-42dd-11eb-98ce-f9c8239061f0.png){: .align-center}
<br>

3) 스트림 목록의 현재의 Github Blog 주소를 찾아서 클릭하세요.<br>

![image](https://user-images.githubusercontent.com/45550607/102707397-e3ae7900-42dd-11eb-928f-a246e2e01baf.png){: .align-center}
<br>

4) 우측 상단에 tracking ID를 찾으실 수 있습니다.<br>

![image](https://user-images.githubusercontent.com/45550607/102707399-e610d300-42dd-11eb-8802-5f8201701283.png){: .align-center}
<br>
<br>
<br>

# _config.yml 수정하기

- 수정 파일 : github.io 폴더 > _config.yml
<br>

<script src="https://gist.github.com/eona1301/d74af4c66ef378f3c2286973476b48db.js"></script>

위의 코드를 모두 작성한 후 git push해주세요.<br>
댓글 기능보다는 빠르게 반영이 됩니다.<br>
tracking id만 헷갈리지 않으시다면, 지금까지 한 기능 중에 제일 쉬울꺼에요 :) <br>
<br>
<br>
<br>

# ANALYTICS TEST

![04](https://user-images.githubusercontent.com/45550607/102707509-f7a6aa80-42de-11eb-9fd5-691b59ff143b.PNG){: .align-center}
<br>

이제 다시 접속하시면 방문자 수가 카운딩됩니다.<br>
tracking_id를 연결하실때부터 카운딩이 되기 때문에, 처음보시는 화면은 지금 보여드리는 사진과는 다를껍니다.<br>
<br>
일자마다 그래프가 생성되고 현재 실시간으로 보고있는 인원도 볼 수 있고,<br>
어떤 포스팅을 많이 보는지도 볼 수 있습니다.<br>
포스팅 전에 이미 연결한 후 주위 분들께 미리 보여드려서 카운팅이 이미있는 화면이네요 (ㅋㅋㅋ)<br>
<br>
<br>


🔔 **포스팅 공지** <br><br>
현재 작성한 포스팅은 **깃 블로그 방문자 통계**와 관련된 내용입니다.<br>
minimal-mistakes 테마의 커스터마이징 및 포스팅에 관해서도 진행할 예정이니, 
**Github_Blog 카테고리**를 클릭하셔서 확인해보세요!<br>
{: .notice--success}