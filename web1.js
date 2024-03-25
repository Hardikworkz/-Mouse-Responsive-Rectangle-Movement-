window.addEventListener("mousemove",function(details){
    var rect = document.querySelector("#main")
        
    var range = gsap.utils.mapRange(0,window.innerWidth , 100 + rect.getBoundingClientRect().width/2,window.innerWidth - (200 + rect.getBoundingClientRect().width/2),details.clientX

);
gsap.to("#main",{
    left:range,
    ease:Power3,
});
});