<h1><img alt="DC 라이브챗" src="https://github.com/Joh1ah/dclivechat/blob/main/images/dclivechat_h.png"/></h1>

디시인사이드를 실시간 채팅창으로 바꿔주는 북마크렛입니다.

<img src="https://nstatic.dcinside.com/dc/w/images/logo_icon.ico" style="width:1em;height:1em"> [라이브챗 갤러리](http://gall.dcinside.com/mini/livechat)

최신 버전: `%version%`

<br>

## 적용법
1. PC 또는 모바일 브라우저에 아무 북마크나 추가하세요.
2. 북마크 URL란에 아래 코드를 복사해 넣으세요.
```javascript
javascript:(()=>{fetch('https://joh1ah.github.io/dclivechat/min.js').then(res=>res.text().then(text=>eval(text))).catch(()=>alert('error'))})();
```
3. 이제 이 북마크를 누르면 DC 라이브챗이 실행됩니다.

![DC 라이브챗 스크린샷](https://github.com/Joh1ah/dclivechat/blob/main/images/screenshot_0.gif)

<br>

## 주요 기능
### 💬 실시간 채팅
* 갤러리 페이지를 일일이 새로고침 하지 않아도 됩니다.
* 글 리젠이 빠른 갤러리 여러 곳을 동시에 볼 수 있습니다.

### 📺 방송과 함께 보기
* 방송 화면을 원하는 만큼 여러개 열어두고 동시에 시청할 수 있습니다.
* 글을 쓸 때 방송 링크가 자동 추가됩니다. (설정에서 on/off 가능)
* 갤러리마다 이전에 보던 방송이 저장됩니다.

### 📱 공앱만큼 편한 기능
* 여러줄 입력 시 첫 줄은 제목, 나머지는 내용이 됩니다.
* 이미지를 드래그 앤 드롭으로 올릴 수 있습니다.
* 내가 쓴 글이나 댓글에 답이 달리면 알림이 표시됩니다.

<br>

## FAQ
### <i>실행이 되지 않아요</i>
* URL란이 제대로 수정되었는지 확인해보세요.<br>만약 수정한 URL이 저장되지 않았다면, 북마크렛 기능을 지원하지 않는 브라우저일 수 있습니다.
* 그래도 해결되지 않을 때에는 [라이브챗 갤러리](http://gall.dcinside.com/mini/livechat)에 제보해주세요.
### <i>방송이 보이지 않아요</i>
* 타 사이트에서의 시청이 금지된 영상은 볼 수 없습니다. (유튜브 멤버십 한정 방송 등)<br>단, 영상 링크는 정상적으로 추가됩니다.
### <i>소스코드를 보고싶어요</i>
* [index.js](https://github.com/Joh1ah/dclivechat/blob/main/src/index.js)와 [style.scss](https://github.com/Joh1ah/dclivechat/blob/main/src/style.scss)를 확인해주세요.
* 빌드된 각 버전은 [최신 릴리스](https://github.com/Joh1ah/dclivechat/releases)에서 찾아볼 수 있습니다.

<br>

## 주의사항
* 이 프로젝트는 실험적 기능을 포함하고 있으며 사용 중 일어나는 모든 문제의 책임은 사용자에게 있습니다.

<br>

## Changelog
%changelog%