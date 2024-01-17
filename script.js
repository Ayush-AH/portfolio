function loco(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}
loco()
var cur = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    gsap.to(cur,{
        x:dets.x,
        y:dets.y
    })
})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        // markers:true,
        start:"top top",
        end:"top -200%",
        pin:true,
        scrub:1
    }
})
tl
.to("#page1 h1",{
    x:"-70%",
    fontWeight:"200",
    ease:Power1,
    duration:1
})
.to("#video-container",{
    top:"0%",
    ease:Power1,

})
.to("#video-container video",{
    transform: "scale(1)",
    ease:Power1

})

var flag = 1
document.querySelector("#open").addEventListener("click",function(){
    if(flag == 1){
    gsap.to("#navigation",{
        top:"0%",
        opacity:1,
        duration:1
    })
    flag = 0
    console.log(flag)
    }else{
        gsap.to("#navigation",{
             top:"-100%",
             opacity:0,
              duration:1
        }) 
    flag = 1
    console.log(flag)

    }
})


var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        // markers:true,
        start:"top 30%",
        end:"top 0%",
        scrub:true
    }
})
tl2
.to("#logo",{
    x:"-100%"
})
.to("#abo",{
    x:"0%"
})

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        // markers:true,
        start:"top 40%",
        end:"top 0%",
        scrub:1
    }
})
tl3
.to("#main",{
    backgroundColor:"white"
},"a")
.to("#navbar h4,#navbar i",{
    color:"black"
},"a")
.to("#abo",{
    x:"-100%"
},"a")
.from("#lf",{
    y:"30%",
    opacity:0
},"a")
.to("#pro",{
    x:"0%"
})

.from("#rt",{
    y:"50%",
    opacity:0,
    duration:1
})


var tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page4",
        scroller:"#main",
        // markers:true,
        start:"top 50%",
        end:"top 0%",
        scrub:1
    }
})
tl4
.to("#main",{
    backgroundColor:"black"
},"a")
.to("#navbar h4,#navbar i",{
    color:"white"
},"a")