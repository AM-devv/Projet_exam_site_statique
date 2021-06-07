document.querySelector(".trigger").onclick = function(){
    document.querySelector(".main-nav").classList.toggle("menu-visible");
    document.querySelector(".mask").style.display = 'block';
    document.querySelector("html").style.overflowY = 'hidden';
}
document.querySelector(".closer").onclick = function(){
    document.querySelector(".main-nav").classList.toggle("menu-visible");
    document.querySelector(".mask").style.display = 'none';
    document.querySelector("html").style.overflowY = 'scroll';
}