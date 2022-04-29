function myFunction() {
    var element= document.getElementById("circle");
    element.style.backgroundColor="blue";
}

function  clickFunction() {
    var element1= document.getElementById("circle");
    element1.addEventListener('click', myFunction);

}
document.addEventListener('DOMContentLoaded', clickFunction);

