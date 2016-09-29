var wrap = document.getElementById("wrap");
var playerStr = localStorage.ids;               
var newPlayer = JSON.parse(playerStr);          
var liNum = document.getElementsByTagName("li");
console.log("读取：" + newPlayer);
console.log('数组长度：' + newPlayer.length);
for (var i = 0; i < newPlayer.length; i++) {//根据玩家人数输出玩家方框，并命名
	li = document.createElement("li");
	li.innerHTML = '<p>' + newPlayer[i] + '</p><span>' + (i+1) + '号</span>';//输出内容
	wrap.appendChild(li);
	liNum[i].setAttribute("id","player"+i);//给li设置id,方便后面使用
	console.log(liNum);
}
function function_name(argument) {
	document.getElementById()
}
function xxx() {
	alert("暂未开放");
}