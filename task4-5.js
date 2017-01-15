/**
 * Created by 少年 on 2017/1/15.
 */
var deadPlayers = JSON.parse(localStorage.deadPlayerArr);
console.log(deadPlayers);
for(var i = 0; i < deadPlayers.length; i++) {

}

//输出水民人数

var peoples = localStorage.peoples;
var p_txt = document.getElementById("peoples");
p_txt.innerHTML = "民 " + peoples + " 人";

//输出杀手人数

var killers = localStorage.killers;
var k_txt = document.getElementById("killers");
k_txt.innerHTML = "手 " + killers + " 人";
console.log(peoples);

//输出过程

var days = Math.floor(deadPlayers.length/2)+1;
var main = document.getElementsByClassName("mainbody")[0]

for(var j = 0; j < days; j++) {
    var div = document.createElement("div");
    div.innerHTML = '<p>' +
        '<span class="day">第' + (j+1) + '天</span>' +
        '<span class="time">0小时07分</span>' +
        '</p>' +
        '<p class="content-txt">' +
        '晚上：' +
        '<span>5<span>' +
        '号玩家被杀手杀死，' +
        '<span>5</span>' +
        '号是水民' +
        '</p>' +
        '<p class="content-txt">' +
        '白天：' +
        '<span>8</span>' +
        '号被全民投票投死，' +
        '<span>8</span>' +
        '号是杀手' +
        '</p>'
    div.setAttribute("class","day-rel");
    main.appendChild(div);
}

console.log(main);