function myFunction() {
    var element= document.getElementById("circle");
    element.style.opacity=1;
}

function  clickFunction() {
    var element= document.getElementById("circle");
    element.style.opacity=0.5;
    element.addEventListener('click', myFunction);

}
document.addEventListener('DOMContentLoaded', clickFunction);

