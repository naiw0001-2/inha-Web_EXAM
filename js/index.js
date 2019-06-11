var ele = document.createElement('div');
ele.className = "all-friend";



for (var i = 0; i < 100; i++) {
    var friendHtml = `<div class='firend-img'><img src='assets/img/tmp.png'/></div><div class='names'><p>홍길동 ${i+1}</p><p>상태메세지</p></div>`;
    ele.innerHTML = friendHtml;
    ele.setAttribute("onclick", "startChat();");
    document.getElementById("friends").appendChild(ele.cloneNode(true));


}

function startChat() {
    var con = confirm("대화하시겠습니까?");
    if (con) location.href = "chatDetail.html";
    else return;
}