var ele = document.createElement('div');
ele.className = "chat";

var ele_right = document.createElement('div');
ele_right.className = "chat";

var sound = document.getElementById("alarm");

var contentids = 0;
var timeids = 0;

function writeMsg() {
    var msg = document.getElementById("userInput").value;

    if (msg == "" || msg.trim().length == 0) {
        alert("빈 칸은 입력할 수 없습니다.");
        return;
    }
    var chatHtml = "";
    if ((contentids % 2) == 0) {
        chatHtml = "<div class='chat-div content' id='content" + contentids + "'>";
        chatHtml += msg + "</div><div class='chat-div time' id='time" + timeids + "'><p>" + getNowTime() + "</p></div>";
        ele.innerHTML = chatHtml;
        document.getElementById("chatlist").appendChild(ele.cloneNode(true));
    } else {
        chatHtml = "<div class='chat-div content content-right' id='content" + contentids + "'>";
        chatHtml += msg + "</div><div class='chat-div time time-right' id='time" + timeids + "'><p>" + getNowTime() + "</p></div>";
        ele_right.innerHTML = chatHtml;
        document.getElementById("chatlist").appendChild(ele_right.cloneNode(true));
    }


    document.getElementById("userInput").value = "";

    var height = document.getElementById("content" + contentids).clientHeight;

    document.getElementById("time" + timeids).setAttribute("style", "height:" + height + "px");
    playSound();
    contentids++;
    timeids++;
}


function getNowTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var ampm = "오전";

    if (hour > 12) {
        hour -= 12;
        ampm = "오후"
    }

    if (min < 10) min = "0" + min;
    var nowTime = ampm + " " + hour + ":" + min;

    return nowTime;
}

//audio (kakaotalk sound) play
function playSound() {
    sound.play();
}