var showHide = document.getElementById("show-hide");

function showHideFunction(){
    var hobbiesID = document.getElementById("hobbies");
    var spanText = document.getElementById("text");
    if(hobbiesID.style.visibility === "hidden"){
        hobbiesID.style.visibility = "visible";
        spanText.innerHTML = "Hide"
        showHide.classList.remove("fa-eye");
        showHide.classList.add("fa-eye-slash");
    }else{
        hobbiesID.style.visibility = "hidden"
        spanText.innerHTML = "Show"
        showHide.classList.remove("fa-eye-slash");
        showHide.classList.add("fa-eye");
    }
}

function lightDark(){
    var lightDarkIcon = document.getElementById("light-dark");
    if(lightDarkIcon.classList.contains("fa-moon")){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        showHide.style.border = "1px solid white"
        lightDarkIcon.classList.remove("fa-moon");
        lightDarkIcon.classList.add("fa-sun");
    }else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        showHide.style.border = "1px solid black"
        lightDarkIcon.classList.remove("fa-sun");
        lightDarkIcon.classList.add("fa-moon");
    }
}