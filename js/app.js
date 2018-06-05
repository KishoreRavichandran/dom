
function identifyById() {
    console.log(document.getElementById('para1'));
}

function identifyByClass() {
    console.log(document.getElementsByClassName('class1'));
}

function identifyByTag() {
    console.log(document.getElementsByTagName("p"));

}

function changeBackground() {
    var a=document.getElementById("block1");
    a.style.backgroundColor="blue";

}

function increaseFont() {
    var a=document.getElementById("block2");
    a.style.fontSize="25px";
}

function changeFontColor() {
    var obj = document.getElementById('block3'); 
obj.style.color="green";
}

function revertColor() {
    var obj=document.getElementById('block3');
    obj.style.color="black";

}

function hide() {
    var a=document.getElementById("block4");
    a.style.display="none";

}

function changeBackColorForAllBox() {
   
    for(var i=0;i<3;i++)
        {
            document.getElementsByClassName("box1")[i].style.backgroundColor="blue";
        } 

}
function changeBackColor1(){
    document.getElementsByClassName("box2")[0].style.backgroundColor="blue";
    document.getElementsByClassName("box2")[1].style.backgroundColor="blue";
    document.getElementsByClassName("box2")[2].style.backgroundColor="blue";
}
function numbersOnly(evt)
{
var char=evt.keyCode;
if(char < 48 || char > 57)
    return false;

    
return true;    
}


function addAdjacent() {
    document.getElementById("para2").innerHTML+="<br>I got generated on the fly.";
}

function removePara() {
    var e=document.getElementById("para3");
    var child=document.getElementById("para4");
   e.parentNode.removeChild(child);

}

function animatePara() {
    var elem = document.getElementById("animate"); 
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++; 
            elem.style.top = pos + 'px'; 
            elem.style.left = pos + 'px'; 
        }}
}
function func()
{
    var x=document.getElementById('get');
    x.style.background="green";
}
function camel()
{
    var x=document.getElementById('inputBox3');
    x.value=x.value.charAt(0).toUpperCase() + x.value.slice(1);
}
function upper1()
{
    var x=document.getElementById('inputBox2');
    x.value=x.value.toUpperCase();
}
function upper()
{
    var x=document.getElementById('inputBox1');
    x.value=x.value.toUpperCase();
}