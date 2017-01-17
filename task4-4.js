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
        var name = "time" + (deadPlayer.length / 2);
        localStorage.setItem(name,time);
    })
}

console.log(deadPlayer);
