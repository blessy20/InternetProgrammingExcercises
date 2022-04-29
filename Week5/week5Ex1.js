
function myFunction() {
    alert("button was pressed");
}

function  clickFunction() {
    var element= document.getElementById("circle");
    element.addEventListener('click', myFunction);

}
document.addEventListener('DOMContentLoaded', clickFunction);

