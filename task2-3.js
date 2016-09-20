var peopleNum;
function setting() {
	peopleNum=parseInt(document.getElementById("people").value);
	console.log("玩家人数"+peopleNum+"人")
	if (isNaN(peopleNum) || peopleNum < 6 || peopleNum > 18)
        alert("请输入6-18之间的数字");
    else {
        allPlayer();
        printf();
    }
}
var killerNum
function allPlayer() {
	if (peopleNum<=8) {
		killerNum=1;
	} 
	else {
		killerNum=Math.floor(peopleNum/4);
	}
	console.log("杀手人数"+killerNum)
}
var player=document.getElementById("player")
function printf() {
	var killerArr=new Array(killerNum)
	for (var i = 0; i < killerArr.length; i++) {
		console.log(killerArr.length)
		
		span=document.createElement("span")
		span.innerHTML="杀手1人"
		player.appendChild(span)
	}
}
function clear() {
	while(player.hasChildNodes())
	{
		player.removeChild(player.firstChild)
	}
}