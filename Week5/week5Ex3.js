function myFunction() {
    var element= document.getElementById("circle");
    element.style.opacity=0.5;
}

function  clickFunction() {
    var element= document.getElementById("circle");
    element.addEventListener('click', myFunction);

}
document.addEventListener('DOMContentLoaded', clickFunction);

