var peopleNum;
function setting() {
	peopleNum=parseInt(document.getElementById("people").value);
	console.log("玩家人数"+peopleNum+"人")
	if (isNaN(peopleNum) || peopleNum < 6 || peopleNum > 18)//判断输入值
        alert("请输入6-18之间的数字");
    else {
        allPlayer();
        printf();
        move();
    }
}
var killerNum
function allPlayer() {
	peopleNum=parseInt(document.getElementById("people").value);
	if (peopleNum<=8) {
		killerNum=1;
	} 
	else {
		killerNum=Math.floor(peopleNum/4);//获取杀手人数
	}
	console.log("杀手人数"+killerNum)
}
var player=document.getElementById("player")
function printf() {
	var peopleNum=parseInt(document.getElementById("people").value);
	clear()//每次循环前清空上次输出内容
	var killerArr=new Array(killerNum)
	for (var i = 0; i < killerArr.length; i++) {//输出杀手人数
		console.log(killerArr.length)
		
		span=document.createElement("span")
		span.innerHTML='<div class="kkk"></div>杀手1人';
		player.appendChild(span)
	}
	for (var i = killerNum; i < peopleNum; i++) {//输出水民人数
		span=document.createElement("span")
		span.innerHTML='<div class="www"></div>水民1人';
		player.appendChild(span)
	}
}
function clear() {//清空输出内容
	clears=document.getElementById("player");
	clears.innerHTML="";
}
function add() {//增加人数
	if (peopleNum<18) {
	peopleNum=peopleNum+1;
	document.getElementById("people").value=peopleNum
	setting()
	}
	else{
		alert("本游戏最多18人参与哦");
	}
}
function reduction() {//减少人数
	if (peopleNum>6) {
	peopleNum=peopleNum-1;
	document.getElementById("people").value=peopleNum
	setting()
	}
	else {
		alert("本游戏最少需要六个人哦");
	}
}
function move() {//改变滑块位置
	console.log(peopleNum);
	document.getElementById("moveback").value=peopleNum;
}
function nonono() {
	alert("程序猿没钱吃饭了，后面的暂时搁置。如果想尽快看到后面的内容，可以给我发红包哦")
}
window.onload=setting;//启动加载