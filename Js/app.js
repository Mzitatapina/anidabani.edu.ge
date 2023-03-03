let menuBox = document.getElementById("menuBox");
let menuIcon = document.getElementById("menuIcon");
let menuExit = document.getElementById("menuExit");


menuIcon.onclick = function (){
    menuBox.classList.toggle("open-menu");
    
}

menuExit.onclick = function(){
    menuBox.classList.remove("open-menu");
}
