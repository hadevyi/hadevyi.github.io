---
title: "[Github Blog] minimal mistakes - 댓글 기능 추가하기"
categories:
  - Github_Blog
tags:
  - minimal mistakes
  - jekyll
  - blog
  - disqus
toc: true
toc_sticky: true
toc_label: "COMMENT"
toc_icon: "blog"
---

📌 **작성자 개발 환경** <br>
**OS** : Windows 10<br>
**Tool** : Visual Studio Code<br>
{: .notice--primary}

블로그를 만드는 가장 중요한 건, 정리한 내용을 다른 이들과 공유하며,<br>
모르는 분들은 도와주고, 틀린건 다시 배워가며 업데이트하는 맛이겠죠!<br>
<br>
따라서 댓글 기능을 구현하는 건 매우 중요하다고 생각합니다.<br>
저도 오류는 많았지만, 충분히 할 수 있었습니다! 걱정말고 진행해봅시다!<br>
<br>
<br>

# DISQUS 가입하기

댓글로 사용할 수 있는 기능은 disqus를 포함해 discourse, facebook, staticman, staticman_v2, utterances, custem 등이 있습니다.<br>
전 무엇보다 한 번에 댓글을 모아볼 수 있고 세팅과 예제가 많았던 disqus로 시작하였습니다.<br>
<br>

[DISQUS](https://disqus.com/) 에 접속하셔서 회원가입을 완료해주세요. (특별히 어렵지 않아 생략하였습니다.)<br>
- 무료 계정, URL은 Github Blog URL 작성하기
<br>
<br>
이후 중요한게 shortname을 찾는 것인데,<br>
이 부분에서 생각치도 못하게 헤매는 경우가 많아서(저도😂)
이를 조금 더 상세히 도와드리도록 하겠습니다.<br>
<br>
<br>

# shortname 찾기

1) DISQUS 메인 화면에서 HOME으로 이동합니다.<br>
![image](https://user-images.githubusercontent.com/45550607/102243641-be68e600-3f3e-11eb-968c-8f4466afa56b.png){: .align-center}
<br>

2) 여기서 Admin으로 이동합니다.<br>
![image](https://user-images.githubusercontent.com/45550607/102243644-c032a980-3f3e-11eb-9eed-b3fc03d3259d.png){: .align-center}
<br>

3) 좌측 상단 부에 내용을 클릭하면, DISQUS에 연결된 모든 사이트가 나옵니다. 깃허브 블로그 링크를 클릭합니다.<br>
![image](https://user-images.githubusercontent.com/45550607/102243659-c32d9a00-3f3e-11eb-84be-345bdade2ea7.png){: .align-center}
<br>

4) 원하는 내용을 클릭했을 때의 url가 shartname.disqus.com/admin으로 나옵니다.<br>
   따라서 .disqus 앞의 내용을 shortname으로 찾아주시면 됩니다.<br>
![image](https://user-images.githubusercontent.com/45550607/102243681-c759b780-3f3e-11eb-84ce-37d3d757a7d2.png){: .align-center}
<br>
<br>
<br>

# _config.yml 수정하기

- 수정 파일 : github.io 폴더 > _config.yml
<br>

<script src="https://gist.github.com/eona1301/97484af7daac622ce9c905f6d521a2de.js"></script>

<script src="https://gist.github.com/eona1301/126daa1811b8e0e9599221aba9b6708a.js"></script>

위의 코드를 모두 작성한 후 git push 해주세요!<br>
여기서 중요한 점은 로컬 서버에서는 comment 처리부분이 보여지지 않습니다.<br>
또, git push를 해주셔도 반영되는데에 딜레이가 걸리기 때문에 코드 수정 후 5~10분 정도 기다려주세요.<br>
<br>
<br>

# COMMENT TEST

모든 작업을 마친 후 반영이 된다면,<br>

![image](https://user-images.githubusercontent.com/45550607/102245006-5e733f00-3f40-11eb-9afe-6837da200d17.png){: .align-center}

이와 같은 모습으로 볼 수가 있습니다.<br>
<br>

![image](https://user-images.githubusercontent.com/45550607/102245300-b8740480-3f40-11eb-9bdf-098dc3118562.png){: .align-center}

Test용 댓글을 달아보았습니다.<br>
다시 한번, DISQUS에서 admin으로 확인해보면,<br>
<br>

![image](https://user-images.githubusercontent.com/45550607/102245479-f6712880-3f40-11eb-8b76-a2103d707425.png){: .align-center}

이렇게 모아서 볼 수 있어 좋았습니다 :)<br>
댓글 기능은 로컬에서 확인할 수 없고,<br>
git push를 통해서 반영되는 것만 확인할 수 있기에 여유롭게 작업해주시면 좋을 것같습니다!<br>
<br>
<br>
<br>

🔔 **포스팅 공지** <br><br>
현재 작성한 포스팅은 **깃 블로그 댓글 기능**과 관련된 내용입니다.<br>
minimal-mistakes 테마의 커스터마이징 및 포스팅에 관해서도 진행할 예정이니, 
**Github_Blog 카테고리**를 클릭하셔서 확인해보세요!<br>
{: .notice--success}