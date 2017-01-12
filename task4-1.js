var wrap = document.getElementById("wrap");
var playerStr = localStorage.ids;
var newPlayer = JSON.parse(playerStr);
var liNum = document.getElementsByTagName("li");
console.log("读取"+newPlayer);
console.log('数组长度：' + newPlayer.length);
for (var i = 0; i < newPlayer.length; i++) {//根据玩家人数输出玩家方框，并命名
	li = document.createElement("li");
	li.innerHTML = '<p>' + newPlayer[i] + '</p><span>' + (i+1) + '号</span>';//输出内容
	wrap.appendChild(li);
	liNum[i].setAttribute("id","player"+i);//给li设置id,方便后面使用

}console.log(liNum);

//判断是否是第一次进入该页面
var once = document.getElementsByTagName("button")[0].firstChild.nodeValue;
if(once !== "开始游戏") {
	other();
}


//杀人投票
function other() {
	function kill() {
		for(var i = 0; i < liNum.length; i++) {
            liNum[i].onclick = function (event) {
                if (event.target.firstChild.nodeValue === "杀手") {
                    alert("杀手不能杀死杀手！")
                } else {
                    console.log(event.target.parentNode);
                    var dead = this;
                    //this.style.borderColor = "red";
					console.log(dead);
                    console.log(event.target.firstChild);
                    return dead;
                }
                dead.style.borderColor = "red";
            }
        }
        //deadArr[0].style.borderColor = "red";
    }
    kill();
}

// window.onload = function () {
// 	first++;
// 	localStorage.once = first;
// }

// function getId() {
// 	var tempDiv=document.getElementById('wrap');
//     var teBut=tempDiv.getElementsByTagName('li');
//      for(var i=0;i<teBut.length;i++){
//          teBut[i].onclick=function(){
//          	teBut[killed].style.borderColor = "#fff";
// 	        killed = this.id;
// 	        console.log(liNum.killed);
// 	        console.log('存储'+killed);
// 	        console.log(this);
// 	        this.style.borderColor = "red";
// 	    }
//     }
// }
// console.log(document.getElementById('killed'));
// window.onload = getId;
