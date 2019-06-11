var ele = document.createElement('div');
ele.className = "chat";



for (var i = 0; i < 100; i++) {
    var friendHtml = `<a href='./chatDetail.html'><div class='profileImg'><img src='./assets/img/tmp.png'></div><div class='names'><div class='foo'><p>홍길동 ${i+1}<span>마지막시간</span></p><p>마지막 대화 내용</p></div></div></a>`
    ele.innerHTML = friendHtml;
    document.getElementById("chat-list").appendChild(ele.cloneNode(true));

}