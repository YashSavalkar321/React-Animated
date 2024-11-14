var crs=document.querySelector(".cursor");
var crsblur=document.querySelector(".cursor-blur");
document.addEventListener("mousemove", function(e) {
    crs.style.left = e.x -12+ 'px';
    crs.style.top = e.y -12 + 'px';
    crsblur.style.left = e.x -200 + 'px';
    crsblur.style.top = e.y -200+ 'px';
})


var h4all=document.querySelectorAll(".nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crs.style.scale=3
        crs.style.border = "1px solid white"
        crs.backgroundColor="transparent"
    })

    elem.addEventListener("mouseleave", function(){
        crs.style.scale=1
        crs.style.border = "0px solid #8EAE32"
        crs.backgroundColor="#8EAE32"
    })
})


gsap.to(".nav",{
    backgroundColor:"#000",
    duration:1,
    height:"110px",
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to(".main",{

    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})