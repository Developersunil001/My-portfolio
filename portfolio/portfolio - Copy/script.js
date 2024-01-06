function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
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

}
function revealTosopan(){
    document.querySelectorAll(".reveal")
    .forEach(function(elem){
        var parent=document.createElement("span");
        var child=document.createElement("span");
        
        parent.classList.add("parent");
        child.classList.add("child");
        
    
        child.innerHTML=elem.innerHTML;
    
        parent.appendChild(child);
         
        elem.innerHTML="";
        elem.appendChild(parent);
    
    
    });
    
}
function valuesetter(){
    gsap.set("#nav a",{ y:"-100%",opacity:0});
    gsap.set("#home span .child",{y:"100%"});
    gsap.set("#home .row img",{opacity:0});


    document.querySelectorAll("#Visual>g")
    .forEach(function(e){
     var char = e.childNodes[1].childNodes[1];

     char.style.strokeDasharray = char.getTotalLength() + 'px';
     char.style.strokeDashoffset = char.getTotalLength() + 'px';
    })
}
function loaderanimation(){
    var tl=gsap.timeline();
    tl
    .from("#fs .child span",{
        x:100,
        // delay:1,
        stagger:.2,
        ease:Power3.easeInout,
        duration:1.4
        // opacity:0
    })
    // .from("#ak",{
    //    x:0,
    //    ease:Expo.easeInout,
    //    delay:-1 
    // })
    .to("#fs .parent .child",{
        y:"-100%",
        duration:.5,
        delay:.5,
        ease:Circ.easeInout
    })
    .to("#fs",{
        height:0,
        ease: Circ.easeInout,
        duration:1
    })
    .to("#green",{
        height:"100vh",
        top:0,
        ease: Circ.easeInout,
        duration:1,
        delay:-1.2
    })
    .to("#green",{
        height:"0vh,",
        top:0,
        ease: Circ.easeInout,
        duration:1,
        delay:-.7,
        onComplete:function(){
            animatehomepage();
        }
    })
}
function Animatesvg(){
       gsap.to("#Visual>g>g>path, #Visual>g>g>polyline",{
        strokeDashoffset:0,
        duration:1,
        stagger:.01,
        ease: Expo.easeInout
       })
}
function animatehomepage(){
   
    var tl= gsap.timeline();
    tl
    .to("#home .parent .child",{
        y:0,
        opacity:1,
        stagger:.05,
        ease:Expo.easeInout
    })
    .to("#nav a",{
        y:0,
        opacity:1,
        stagger:.1,
        duration:1,
        ease:Expo.easeInout
    })
   
    .to("#home .row img ",{
       opacity:1,
       onComplete:function(){
         Animatesvg();
       }

    })
}
function loaderimg(){
    gsap.to(".img img",{
        // opacity:1,
        rotation:"360deg",
        ease:Linear.easeNone,
        repeat:-1,
        duration:2
        // delay:0
    })
} 
function p2cardAnimation(){
    gsap.to(".csection .cards img",{
        scrollTrigger:{
          scroller:"#main",
          trigger:".cards",
          start:"top 50%",
          scrub:1,
          // end:"top 100%",
        //   markers:true
        },
        rotation:"20deg",
        duration:2,
        ease: "slow.easeInout"
    })
    
    gsap.to(".csection .text .par .r1>h5",{
        scrollTrigger:{
          scroller:"#main",
          trigger:".text .par",
          start:"top 60%",
        //   markers:true
        },
        y:0,
        ease:Expo.easeInout,
        duration:1,
        // stagger:.1,
    })
}
function imagesAnimation(){
    document.querySelectorAll(".img1")
    .forEach(function(elem){
        elem.addEventListener("mousemove",function(){
            document.querySelector("#part2").style.backgroundColor="#b4bacf"; 
           var tl=gsap.timeline();
            tl
            .to(".img1 #text2",{
             y:"280%",
             ease:Expo.easeInout,
             duration:1,
             opacity:1
            })
            .to(".img1 #text1",{
                y:"200%",
                ease:Expo.easeInout,
                duration:1,
                delay:-.7,
                opacity:1
            })
         })
    })

document.querySelectorAll(".img1")
.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        document.querySelector("#part2").style.backgroundColor="#f2f2f2"; 
         var tl=gsap.timeline();
         tl
         .to(".img1 #text2",{
             y:"-160%",
             ease:Expo.easeInout,
             duration:1,
             opacity:0
            })
         .to(".img1 #text1",{
            y:"-100%",
            ease:Expo.easeInout,
           duration:1,
           delay:-.7,
           opacity:0
         })
     })
})


document.querySelector("#imgone")
.addEventListener("mousemove",function(){
   document.querySelector("#part2").style.backgroundColor="#bfa088"; 
})
document.querySelector("#imgone")
.addEventListener("mouseleave",function(){
   document.querySelector("#part2").style.backgroundColor="#f2f2f2"; 
})

document.querySelector("#imgtwo")
.addEventListener("mousemove",function(){
   document.querySelector("#part2").style.backgroundColor="#f9e7e6"; 

})
document.querySelector("#imgtwo")
.addEventListener("mouseleave",function(){
   document.querySelector("#part2").style.backgroundColor="#f2f2f2"; 
})

document.querySelectorAll(".img2")
.forEach(function(elem){
     elem.addEventListener("mousemove",function(){
        document.querySelector("#part2").style.backgroundColor="#ff667d46"; 
        var tl=gsap.timeline();
        tl
        .to(".img2 #text2",{
         y:"180%",
         ease:Expo.easeInout,
         duration:1,
         opacity:1
        })
        .to(".img2 #text1",{
            y:"100%",
            ease:Expo.easeInout,
            duration:1,
            delay:-.7,
            opacity:1
        })
       
     })
})
document.querySelectorAll(".img2")
.forEach(function(elem){{
    elem.addEventListener("mouseleave",function(){
        document.querySelector("#part2").style.backgroundColor="#f2f2f2"; 
         var tl=gsap.timeline();
         tl
         .to(".img2 #text2",{
             y:"-180%",
             ease:Expo.easeInout,
             duration:1,
             opacity:0
            })
         .to(".img2 #text1",{
            y:"-100%",
            ease:Expo.easeInout,
           duration:1,
           delay:-.7,
           opacity:0
         })
     
     })
    }})

    document.querySelector("#imgthree")
.addEventListener("mousemove",function(){
   document.querySelector("#part2").style.backgroundColor="#ffa372"; 

})
document.querySelector("#imgthree")
.addEventListener("mouseleave",function(){
   document.querySelector("#part2").style.backgroundColor="#f2f2f2"; 
})

}
function whitediv(){
   document.querySelectorAll(".sp")
   .forEach(function(elem){
       elem.addEventListener("mouseenter",function(){
             gsap.to(".white",{
                width:"100%",
                opacity:1,
                ease:Expo.easeInout,
                duration:.3
             })
       })
   })
   document.querySelectorAll(".sp")
   .forEach(function(elem){
       elem.addEventListener("mouseleave",function(){
             gsap.to(".white",{
                width:"50%",
                opacity:0,
                ease:Expo.easeInout,
                duration:.3
             })
       })
   })

   document.querySelector(".sp4")
        .addEventListener("mouseenter",function(){
             gsap.to(".white1",{
                width:"100%",
                opacity:1,
                ease:Expo.easeInout,
                duration:.3
             })
       })
   
   document.querySelector(".sp4")
       .addEventListener("mouseleave",function(){
             gsap.to(".sp4 .white1",{
                width:"30%",
                opacity:0,
                ease:Expo.easeInout,
                duration:.3
             })
       })
       document.querySelector(".sp5")
       .addEventListener("mouseenter",function(){
            gsap.to(".white2",{
               width:"100%",
               opacity:1,
               ease:Expo.easeInout,
               duration:.3
            })
      })
  
  document.querySelector(".sp5")
      .addEventListener("mouseleave",function(){
            gsap.to(".sp5 .white2",{
               width:"30%",
               opacity:0,
               ease:Expo.easeInout,
               duration:.3
            })
      })
   
}
function fwAnimation(){
    gsap.to("#part2 .fw h1",{
        scrollTrigger:{
            scroller:"#main",
            trigger:".fw",
            start:"top 50%",
            // markers:true
        },
        y:0,
        ease:Expo.easeInout,
        duration:1,
        stagger:.3
    })
    gsap.to(" .htext h1",{
        scrollTrigger:{
            scroller:"#main",
            trigger:".htext",
            start:"top 50%",
            // markers:true
        },
        y:0,
        ease:Expo.easeInout,
        duration:1,
        stagger:.2
    })
}

function rowh1Animation(){
    gsap.to("#part3 .mtext .text .row h1",{
        scrollTrigger:{
            scroller:"#main",
            trigger:".mtext .text .row",
            start:"top 30%"
            // markers:true
        },
        y:0,
        ease:Expo.easeInout,
        duration:1
        // stagger:1
    })
    gsap.to(" #part3 .mtext .text .icondiv",{
        scrollTrigger:{
            scroller:"#main",
            trigger:".mtext .text .row",
            start:"top 30%"
            // markers:true
        },
        x:0,
        opacity:1,
        ease:Expo.easeInout,
        duration:1
        // stagger:1
    })
    
}
 









loco();
revealTosopan();
valuesetter();
loaderanimation();
loaderimg();
p2cardAnimation();
imagesAnimation();
whitediv();
fwAnimation();
rowh1Animation();












































