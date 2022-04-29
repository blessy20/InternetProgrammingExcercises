function myFunction() {
    setInterval(Interval, 10);
    
}
function Interval(){
    var element= document.getElementById("circle");
    var opacity=element.style.opacity;
    element.style.opacity= opacity- 0.01;
}

function  clickFunction() {
    var element= document.getElementById("circle");
    element.addEventListener('click', myFunction);
    element.style.opacity=1;

}
document.addEventListener('DOMContentLoaded', clickFunction);

