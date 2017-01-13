/**
 * Created by 少年 on 2017/1/13.
 */
var deadPlayer = localStorage.deadPlayerArr;
var rel = document.getElementById("rel");
rel.innerHTML = deadPlayer+"号玩家被杀死了";
console.log(deadPlayer);