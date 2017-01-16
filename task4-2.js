var days = JSON.parse(localStorage.deadPlayerArr).length / 2;
var day = document.getElementsByClassName("day")[0];
var day_main = document.getElementsByClassName("dayMain")[0];
var day_icon = document.getElementsByClassName("dayIcon")[0];
var bigNum = ["一","二","三","四","五","六","七","八","九","十"];
//设置侧边图片位置
    day_icon.style.top = (8.4 * days + 20) + "rem";

for(var i = 0; i < days; i++) {
    var div = document.createElement("div");
    div.setAttribute("class", "dayHead");
    div.innerHTML = "<span>第" + bigNum[i+1] + "天</span>" +
        "<img class='change' src='task4/change.png'>";
    day.insertBefore(div,day_main);
}
console.log(days);

var btn = document.getElementById("next");
btn.addEventListener("click",function () {
    location = "task4-3.html";
})

