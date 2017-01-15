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
var killerNum;
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
var player=document.getElementById("player");
function printf() {
	var peopleNum=parseInt(document.getElementById("people").value);
	clear()//每次循环前清空上次输出内容
	var killerArr=new Array(killerNum);
	for (var i = 0; i < killerArr.length; i++) {//输出杀手人数
		
		span=document.createElement("span");
		span.innerHTML='<div class="kkk"></div>杀手1人';
		player.appendChild(span)
	}
	for (var i = killerNum; i < peopleNum; i++) {//输出水民人数
		span=document.createElement("span");
		span.innerHTML='<div class="www"></div>水民1人';
		player.appendChild(span)
	}
	//根据输入的数字组成一个数组
		var playerA = new Array;
		for ( var i = 0; i < killerNum; i++) {
			playerA[i] = "杀手";
		}
		for ( i = killerNum; i < peopleNum; i++) {
			playerA[i] = "水民";
		}
		//数组进行洗牌，并输出一个新数组
	var newPlayer = shuffle(playerA);
	console.log(newPlayer);
	//数组转化成字符串并存储与本地
	var playerStr = JSON.stringify(newPlayer);
	localStorage.killers = killerNum;
	localStorage.peoples = peopleNum;
	localStorage.waters = (peopleNum - killerNum);
	localStorage.ids = playerStr;
	console.log("数组变成字符串存储" + playerStr);
}
function clear() {//清空输出内容
	clears=document.getElementById("player");
	clears.innerHTML="";
}
//洗牌算法一
// function shuffle(array) {
// 	var myArray = array.concat();
// 	for (var x = myArray.length; x--; ) {
// 		var y = Math.floor(Math.random() * (x + 1));
// 		var temp = myArray[x];
// 		myArray[x] = myArray[y];
// 		myArray[y] = temp;
// 	}
// 	return myArray;
// }
//洗牌算法二
function shuffle(array) {
	for (var i = array.length-1; i >=0; i--) {

        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = array[randomIndex]; 

        array[randomIndex] = array[i]; 
        array[i] = itemAtIndex;
    }
    return array;
}
function add() {//增加人数
	if (peopleNum<18) {
	peopleNum=peopleNum+1;
	document.getElementById("people").value=peopleNum;
	setting()
	}
	else{
		alert("本游戏最多18人参与哦");
	}
}
function reduction() {//减少人数
	if (peopleNum>6) {
	peopleNum=peopleNum-1;
	document.getElementById("people").value=peopleNum;
	setting()
	}
	else {
		alert("本游戏最少需要六个人哦");
	}
}
function move() {//改变滑块位置
	document.getElementById("moveback").value=peopleNum;
}
function reset() {//根据滑块位置动态改变输入框人数
	var moveNum=document.getElementById("moveback").value;
	console.log(moveNum);
	document.getElementById("people").value=moveNum;
} 
function dont() {
	alert("即将上线，敬请期待，么么哒")
}
window.onload=setting;//启动加载
