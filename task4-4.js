/**
 * Created by 少年 on 2017/1/13.
 */
var deadPlayer = JSON.parse(localStorage.deadPlayerArr);
var rel = document.getElementById("rel");
rel.innerHTML = deadPlayer[deadPlayer.length-1]+"号玩家被杀死了";
console.log(deadPlayer);