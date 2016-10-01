var wrap = document.getElementById("wrap");
var playerStr = localStorage.ids;               
var newPlayer = JSON.parse(playerStr); 
console.log(newPlayer instanceof Array);       
var liNum = document.getElementsByTagName("li");
var killed = 0;
var killedArr=[];
var checked;
console.log("读取"+newPlayer);
console.log('数组长度：' + newPlayer.length);
for (var i = 0; i < newPlayer.length; i++) {//根据玩家人数输出玩家方框，并命名
	li = document.createElement("li");
	li.innerHTML = '<p>' + newPlayer[i] + '</p><span>' + (i+1) + '号</span>';//输出内容
	wrap.appendChild(li);
	liNum[i].setAttribute("id","player"+i);//给li设置id,方便后面使用
	
}console.log(liNum);
if (localStorage.aaa) {} else {localStorage.aaa == 3 }
function getId() {
	var tempDiv=document.getElementById('wrap');
   var teBut=tempDiv.getElementsByTagName('li');
     for(var i=0;i<teBut.length;i++){
         teBut[i].onclick=function(){
	        killed = this.id;
	        console.log('存储'+killed);
	        this.style.borderColor = "red";
	        //checked[i].style.borderColor = 'red';
	    }  
    }    
}
//console.log(document.getElementById('killed'));
//window.onload = getId;
function xxx() {
	alert("暂未开放");
}