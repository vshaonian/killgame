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
    } else {
        var aliveKillers = parseInt(localStorage.killers);
        localStorage.aliveKillers = aliveKillers;
        var aliveWaters = parseInt(localStorage.waters);
        localStorage.aliveWaters = aliveWaters;
    }

    localStorage.deadPlayerNum = 0;
    
	//杀人
	function kill() {
		var temp = document.getElementById("fix");
		for(var i = 0; i < liNum.length; i++) {
            liNum[i].onclick = function (event) {

                var deadNum = parseInt(event.target.parentNode.lastChild.firstChild.nodeValue);

                if (deadArr.indexOf(deadNum) >= 0) {
                    alert("该玩家已死")
                } else if (event.target.firstChild.nodeValue === "杀手") {
                    alert("杀手不能杀死杀手！")
                } else {
                	temp.style.borderColor = "#fff";
                	temp = this;
                	temp.style.borderColor = "red";
                	localStorage.deadPlayerNum = deadNum;
                	console.log(deadNum);
                	console.log(deadNum+"玩家死了");
                }
            }
        }
    }

    //投票
    function vote() {
        var temp = document.getElementById("fix");
        for(var i = 0; i < liNum.length; i++) {
            liNum[i].onclick = function (event) {

                var deadNum = parseInt(event.target.parentNode.lastChild.firstChild.nodeValue);

                if (deadArr.indexOf(deadNum) >= 0) {
                    alert("该玩家已死")
                } else {
                    temp.style.borderColor = "#fff";
                    temp = this;
                    temp.style.borderColor = "red";
                    localStorage.deadPlayerNum = deadNum;
                    console.log(deadNum+"玩家死了");
                }
            }
        }
    }

    //判断是杀人还是投票
    if(once === "投死") {
	    vote();
    } else {
	    kill();
    }

    var btn = document.getElementsByTagName("button")[0];
    btn.addEventListener("click",function () {
        if(JSON.parse(localStorage.deadPlayerNum) === 0) {
            alert("请选择一名玩家");
        } else {
            //点击按钮将死亡玩家存入数组
            deadArr.push(JSON.parse(localStorage.deadPlayerNum));
            localStorage.deadPlayerArr = JSON.stringify(deadArr);
            console.log(deadArr);
            //
            console.log(parseInt(localStorage.deadPlayerNum));
            console.log(newPlayer[parseInt(localStorage.deadPlayerNum) - 1]);

            //输赢判断

            switch (newPlayer[parseInt(localStorage.deadPlayerNum) - 1]) {
                case "杀手":
                    aliveKillers = parseInt(localStorage.aliveKillers);
                    aliveKillers--;
                    localStorage.aliveKillers = aliveKillers;
                    break;
                case "水民":
                    aliveWaters = parseInt(localStorage.aliveWaters);
                    aliveWaters--;
                    localStorage.aliveWaters = aliveWaters;
                    break;
            }
            if(aliveWaters === 0 || aliveKillers === 0) {
                //修复计时BUG
                var lastTime = new Date() - new Date(localStorage.time);
                localStorage.lastTime = lastTime;
                btn.parentNode.setAttribute("href", "task4-6.html");
            } else {
                btn.parentNode.setAttribute("href", "task4-4.html")
            }
        }
    });
}
