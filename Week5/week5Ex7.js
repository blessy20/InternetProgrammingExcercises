function clickFunction(){
    var element= document.getElementById("circle");
    var leftPostion=element.offsetLeft;
    element.style.left= leftPostion - 10 + 'px';
}

function  LoadFunction() {
    document.addEventListener('keyDown', clickFunction);

}
document.addEventListener('DOMContentLoaded', LoadFunction);

