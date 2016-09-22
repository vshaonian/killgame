var lastone=1;
function changeColor(){
    var lattice=document.getElementsByTagName('div')
    var latticeNum=Math.floor(Math.random()*9)
    var colorNum=Math.floor(Math.random()*3)
    switch(colorNum){
        case 0:
        color="red";
        colorName="红色";
        break;

        case 1:
        color="green";
        colorName="绿色";
        break;

        case 2:
        color="blue";
        colorName="蓝色";
        break;
    }
    lattice[lastone].style.backgroundColor="orange";
    lastone=latticeNum;
    lattice[latticeNum].style.backgroundColor=color
    console.log("格子"+(latticeNum+1)+"变成了"+colorName)
}
setInterval(changeColor,1000)