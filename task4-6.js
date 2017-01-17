/**
 * Created by 少年 on 2017/1/15.
 */
var deadPlayers = JSON.parse(localStorage.deadPlayerArr);
console.log(deadPlayers);
var cha = JSON.parse(localStorage.ids);
console.log(cha);
var waters = localStorage.waters;
var killers = localStorage.killers;
// for(var i = 0; i < deadPlayers.length; i++) {
//
// }
var rel_inf = document.getElementsByClassName("rel-inf")[0];
var rel_txt = document.getElementsByClassName("rel-txt")[0];

//获取储存在本地的时间
var timeArr = [];
for(var i = 0; i < localStorage.length; i++) {
    if(localStorage.key(i).substring(0,4) === "time") {
        var getValue = localStorage.getItem(localStorage.key(i));
        timeArr.push(Math.floor(parseInt(getValue) / 1000));
    }
}
timeArr.shift();

//修复计时bug
var lastTime = parseInt(localStorage.lastTime);
timeArr.push(Math.floor(lastTime / 1000));
console.log(timeArr);

//把秒转化为标准时间
function time(s) {
    var hours = Math.floor(s / 3600);
    var minutes = Math.floor(s % 3600 / 60);
    var seconds = Math.floor(s % 3600 % 60);

    //return (hours > 0 ? hours + "小时" + (minutes < 10 ? "0" : "") : "") + minutes + "分钟" + (seconds < 10 ? "0" : "") + seconds + "秒";
    return (hours > 0 ? hours + "小时" + (minutes < 10 ? "0" : "") : "") + (minutes > 0 ? minutes + "分钟" +
            (seconds < 10 && seconds > 0 ? "0" : ""): "")  + (seconds > 0 ? seconds + "秒" : "");
}

//总时间
var totalTime = timeArr.reduce(function (a,b) {
    return a + b;
});
var total = document.getElementById("total");
total.innerHTML = "本次游戏共计用时" + time(totalTime);
//输出结果

console.log(parseInt(localStorage.aliveKillers));
if(parseInt(localStorage.aliveKillers) === 0) {
    rel_inf.innerHTML = "水民胜利";
    rel_txt.innerHTML = "本轮游戏共抓出杀手" +
        killers +
        "人，共经历" +
        (deadPlayers.length / 2) +
        "个白天，在杀人游戏中击败了67%的玩家！"
} else {
    rel_inf.innerHTML = "杀手胜利";
    rel_txt.innerHTML = "太棒了!你知道么?在杀人游戏中 只有20%的杀手取得游戏最终的 胜利哦！"
}
//输出水民人数

var p_txt = document.getElementById("peoples");
p_txt.innerHTML = "民 " + waters + " 人";

//输出杀手人数

var k_txt = document.getElementById("killers");
k_txt.innerHTML = "手 " + killers + " 人";

//输出过程

var main = document.getElementsByClassName("mainbody")[0];

for(var j = 0; j < deadPlayers.length; j++) {
    var day = (j + 2) / 2;
    var div = document.createElement("div");
    div.innerHTML = '<p>' +
        '<span class="day">第' + day + '天</span>' +
        '<span class="time">' +
        time(timeArr[day-1]) +
        '</span>' +
        '</p>' +
        '<p class="content-txt">' +
        '晚上：' +
        '<span>' + deadPlayers[j] + '<span>' +
        '号玩家被杀手杀死，' +
        '<span>'+ deadPlayers[j] +'</span>' +
        '号是' + cha[deadPlayers[j]-1] +
        '</p>' +
        '<p class="content-txt">' +
        '白天：' +
        '<span>' + deadPlayers[j+1] + '</span>' +
        '号被全民投票投死，' +
        '<span>'+ deadPlayers[j+1] +'</span>' +
        '号是' +
        cha[deadPlayers[j+1]-1] +
        '</p>'
    div.setAttribute("class","day-rel");
    main.appendChild(div);
    j++;
}

var content_txt = document.getElementsByClassName("content-txt")
var last_content = content_txt[content_txt.length-1];
if(deadPlayers.length % 2 !== 0) {
    last_content.style.display = "none";
}
