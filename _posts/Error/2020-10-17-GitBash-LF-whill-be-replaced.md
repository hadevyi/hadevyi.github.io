---
title: "[Error] Gitbush - LF will be replaced by CRLF in ..."
categories:
  - Error
tags:
  - gitbash
  - error
---

📌<br>
**OS** : Windows 10<br>
**Tool** : Git Bash
{: .notice--primary}

<br>

![waring](https://user-images.githubusercontent.com/45550607/102007684-81e69000-3d6e-11eb-9135-e4928aa4ff3f.PNG)

<br>
warning: LF will be replaced by CRLF in {file name}.<br>
The file will have its original line endings in your working directory.<br>
<br>
Github 업로드를 위해서, add를 하는 중 발견한 오류입니다.<br>
자주 등장하는 건 아닌데 본 이후엔 파일 등록도 안되서 해결하고자 합니다.<br>
<br>

| LF (Line Feed) | CR (Carriage Return) | CRLF(CR + LF) |
| :------------: | :------------------: | :-----------: |
|       \n       |          \r          |     \r\n      |
| Mac 버전 9까지 |         Unix         |    windows    |

<br>

[새줄문자 WIKI](https://ko.wikipedia.org/wiki/%EC%83%88%EC%A4%84_%EB%AC%B8%EC%9E%90)를 참고해서 핵심구절만 정리해보았습니다.<br>
즉 줄의 끝을 구별하는 것이 OS마다 달라서 github에 올리는 형식을 조절해주어야 하는 것입니다.<br>
<br>
```
git config --global core.autocrlf true
```
<br>
를 통해서 쉽게 해결하였습니다.<br>
매번 발생하는건 아니지만, 간간히 확인되니 이렇게 해결하시면 되겠습니다!<br>