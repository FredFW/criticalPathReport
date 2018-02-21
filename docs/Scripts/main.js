var winHeight = window.innerHeight || (document.documentElement || document.body).clientHeight;
var pos = 0;
var heading = document.getElementById("heading");
var coverContent = document.getElementById("coverContent");
var overlay = document.getElementById("overlay");
var bottomBar = document.getElementById("bottomBar");
var brand = document.getElementById("brand");
var status = "top"

var topFun = function() {
    overlay.style.opacity = (((pos - winHeight) / winHeight) + 1).toString();
    coverContent.style.opacity = "1";

    if (heading.classList){
        heading.classList.remove("picture");
        bottomBar.classList.remove("fixed-top");
        bottomBar.classList.add("bottom");
        brand.classList.add("hide");
    }
    else{
        heading.className = heading.className.replace(/\bpicture\b/g, "");
        bottomBar.className = bottomBar.className.replace(/\bfixed-top\b/g, "");
        bottomBar.className += " bottom";
        brand.className += " hide";
    }

    status = "top";
}

var bottomFun = function() {
    overlay.style.opacity = "0";
    coverContent.style.opacity = "0";

    if (heading.classList){
        heading.classList.add("picture");
        bottomBar.classList.add("fixed-top");
        bottomBar.classList.remove("bottom");
        brand.classList.remove("hide");
    }
    else{
        heading.className += " picture";
        bottomBar.className += " fixed-top";
        bottomBar.className = bottomBar.className.replace(/\bbottom\b/g, "");
        brand.className = brand.className.replace(/\bhide\b/g, "");
    }

    status = "bottom";
}


// window.onload = function() {
//     brand.style.display = "none";
//     alert(brand.style.display);
// }

window.orientationchange = function() {
    winHeight = window.innerHeight || (document.documentElement || document.body).clientHeight;
}

window.onresize = function() {
    winHeight = window.innerHeight || (document.documentElement || document.body).clientHeight;
}

window.onscroll = function() {
    pos = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    
    if (pos > winHeight){
        if (status !== "bottom"){
            bottomFun();
        }
    }
    else if (pos < winHeight){
        if (status !== "top"){
            topFun();
        }
}

$(document).ready(function(){
    $(".nav-link").click(function(){
        $(".collapse").collapse('hide');
    });
    $(".navbar-brand").click(function(){
        $(".collapse").collapse('hide');
    });
});