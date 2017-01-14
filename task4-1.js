var wrap = document.getElementById("wrap");
var playerStr = localStorage.ids;
var newPlayer = JSON.parse(playerStr);
var liNum = document.getElementsByTagName("li");
//var deadArr = JSON.parse(localStorage.deadPlayerArr);
console.log("读取"+newPlayer);
console.log('数组长度：' + newPlayer.length);
for (var i = 0; i < newPlayer.length; i++) {//根据玩家人数输出玩家方框，并命名
	li = document.createElement("li");
	li.innerHTML = '<p>' + newPlayer[i] + '</p><span>' + (i+1) + '号</span>';//输出内容
	wrap.appendChild(li);
	liNum[i].setAttribute("id","player"+i);//给li设置id,方便后面使用

}


//判断是否是第一次进入该页面
var once = document.getElementsByTagName("button")[0].firstChild.nodeValue;
if(once !== "开始游戏") {
	other();
} else {
	deadArr = [];
	localStorage.deadPlayerArr = JSON.stringify(deadArr);
}


//杀人投票
function other() {

    //判断是杀人还是投票


	//从本地取出死亡玩家数组
    var deadArr = JSON.parse(localStorage.deadPlayerArr);

    //确定已死玩家
    console.log("已死玩家"+deadArr);

    //已死玩家变半透明
	if (deadArr.length !== 0) {
        for (var j = 0; j < deadArr.length; j++) {
        	var domId = "player" + (deadArr[j] - 1);
            var deadDom = document.getElementById(domId);
            deadDom.style.opacity = "0.5";
            deadDom.style.borderColor = "#000";
        }
    }


	//杀人
	function kill() {
		var temp = document.getElementById("fix");
		for(var i = 0; i < liNum.length; i++) {
            liNum[i].onclick = function (event) {
                console.log(deadArr);
                console.log(typeof(deadArr[0]));
                var deadNum = event.target.parentNode.lastChild.firstChild.nodeValue;
                // alert(deadNum.substring(0,1));
                // alert(deadNum.substring(0,1) in deadArr);
                //alert(event.target.parentNode.lastChild.firstChild.nodeValue.substring(0,1));
                // if (deadArr.indexOf(event.target.parentNode.lastChild.firstChild.nodeValue) >= 0) {
                //     alert("该玩家已死")
                // } else

                // for(var k = 0; k < deadArr.length; k++) {
                //     if (deadArr[k] === deadNum.substring(0,1)) {
                //         alert("此玩家已死")
                //     }
                // }
                    if (event.target.firstChild.nodeValue === "杀手") {
                    alert("杀手不能杀死杀手！")
                } else {
                	temp.style.borderColor = "#fff";
                	temp = this;
                	temp.style.borderColor = "red";
                	//var deadNum = event.target.parentNode.lastChild.firstChild.nodeValue;
                	localStorage.deadPlayerNum = deadNum.substring(0,1);
                	console.log(deadNum+"玩家死了");
                }
            }
        }
        var btn = document.getElementsByTagName("button")[0];
        //点击按钮将死亡玩家存入数组
        btn.addEventListener("click",function () {
        	deadArr.push(JSON.parse(localStorage.deadPlayerNum));
        	localStorage.deadPlayerArr = JSON.stringify(deadArr);
        	console.log(deadArr);
        })
    }
    kill();

    //投票
    function vote() {
    	console.log("开始投票")
    }
}
