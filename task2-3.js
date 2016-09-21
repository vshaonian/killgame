var peopleNum;
function setting() {
	peopleNum=parseInt(document.getElementById("people").value);
	console.log("玩家人数"+peopleNum+"人")
	if (isNaN(peopleNum) || peopleNum < 6 || peopleNum > 18)//判断输入值
        alert("请输入6-18之间的数字");
    else {
        allPlayer();
        printf();
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
		alert("不觉得人太多了吗");
	}
}
function reduction() {//减少人数
	if (peopleNum>6) {
	peopleNum=peopleNum-1;
	document.getElementById("people").value=peopleNum
	setting()
	}
	else {
		alert("六个人都凑不齐，玩儿蛋去吧");
	}
}
var x;
function move() {
	var moveblock=document.getElementById("movemove");
	x = moveblock.getBoundingClientRect().left;

	movemove.style.left=x+50;
	console.log(x);
}
window.onload=setting;//启动加载