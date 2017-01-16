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

//var days = Math.floor(deadPlayers.length/2)+1;
var main = document.getElementsByClassName("mainbody")[0];

for(var j = 0; j < deadPlayers.length; j++) {
    var div = document.createElement("div");
    div.innerHTML = '<p>' +
        '<span class="day">第' + (j+2)/2 + '天</span>' +
        '<span class="time">0小时07分</span>' +
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

//

var content_txt = document.getElementsByClassName("content-txt")
var last_content = content_txt[content_txt.length-1];
if(deadPlayers.length % 2 !== 0) {
    last_content.style.display = "none";
}
