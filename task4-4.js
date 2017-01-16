/**
 * Created by 少年 on 2017/1/13.
 */
var deadPlayer = JSON.parse(localStorage.deadPlayerArr);
var rel = document.getElementById("rel");
var btn = document.getElementsByTagName("button")[0];
var text = btn.firstChild.nodeValue;
console.log(text);
console.log(deadPlayer.length);
if((deadPlayer.length) % 2 !== 0) {
    rel.innerHTML = deadPlayer[deadPlayer.length-1]+"号玩家被杀死了";
    btn.innerHTML = "去投票";
    btn.parentNode.setAttribute("href", "task4-5.html")
} else {
    rel.innerHTML = deadPlayer[deadPlayer.length-1]+"号玩家被投死了";
    btn.innerHTML = "第" + ((deadPlayer.length/2)+1) + "天";
    btn.parentNode.setAttribute("href", "task4-2.html");

    //计时器
    btn.addEventListener("click",function () {
        var time = new Date() - new Date(localStorage.time);
        switch (deadPlayer.length / 2) {
            case 1:
                localStorage.time1 = time;
                break;
            case 2:
                localStorage.time2 = time;
                break;
            case 3:
                localStorage.time3 = time;
                break;
            case 4:
                localStorage.time4 = time;
                break;
            case 5:
                localStorage.time5 = time;
                break;
            case 6:
                localStorage.time6 = time;
                break;
            case 7:
                localStorage.time7 = time;
                break;
            case 8:
                localStorage.time8 = time;
                break;
            case 9:
                localStorage.time9 = time;
                break;
            default:
                break;
        }
    })
}

console.log(deadPlayer);
