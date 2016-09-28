var wrap = document.getElementById("wrap");
var playerStr = localStorage.ids;               
var newPlayer = JSON.parse(playerStr);          
console.log("读取：" + newPlayer);
console.log('数组长度：' + newPlayer.length);
for (var i = 0; i < newPlayer.length; i++) {
	li = document.createElement("li");
	li.innerHTML = '<p>' + newPlayer[i] + '</p><span>' + (i+1) + '号</span>';
	wrap.appendChild(li);
}