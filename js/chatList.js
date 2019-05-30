var friendHtml = "<a href='./chatDetail.html'><div class='profileImg'><img src='./assets/img/tmp.png'></div><div class='names'><p>홍길동<span>02:00</span></p><p>가나다라마바사아자차카</p></div></a>"

var ele = document.createElement('div');
ele.className = "chat";

ele.innerHTML = friendHtml;

for (var i = 0; i < 100; i++) {
    document.getElementById("chat-list").appendChild(ele.cloneNode(true));

}