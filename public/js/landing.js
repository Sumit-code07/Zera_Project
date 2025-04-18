let btn=document.querySelector(".btn");
let nav=document.querySelector(".nav");
let close=document.querySelector(".close");
btn.addEventListener("click",function(){
    nav.style.width="387px";
    btn.style.opacity="0";
});
close.addEventListener("click",function(){
    nav.style.width="0";
    btn.style.opacity="1";

})
