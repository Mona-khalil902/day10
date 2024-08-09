/* var sharebutton =document.getElementById("sharebutton");

sharebutton .onclick =function(){
    document .getElementById("allicons") .style.visibility = "visible"
} */
var sharebutton = document.getElementById("sharebutton");
var allicons = document.getElementById("allicons");
var iconsshow = false;

    sharebutton.onclick = function() {
        if (iconsshow) {
            allicons.style.visibility = "hidden";
            iconsshow = false;
        } else {
            allicons.style.visibility = "visible";
            iconsshow = true;
        }
    }