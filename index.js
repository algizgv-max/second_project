let btn=document.querySelector(".my_button");

btn.addEventListener("click",button_click);

function button_click(){
    
    document.querySelector("body").classList.toggle("body_style");
    document.querySelector(".feature").classList.toggle("featere_new");
}