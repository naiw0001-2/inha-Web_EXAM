var friendHtml = "<div class='firend-img'><img src='assets/img/tmp.png'/></div><div class='names'><p>홍길동</p><p>상태메세지</p></div>"

// var html = friendHtml.html();
// 
// var ele = document.createElement('');
// ele.innerHTML = friendHtml;

var ele = document.createElement('div');
ele.className = "all-friend";

ele.innerHTML = friendHtml;

for (var i = 0; i < 100; i++) {
    document.getElementById("friends").appendChild(ele.cloneNode(true));

}