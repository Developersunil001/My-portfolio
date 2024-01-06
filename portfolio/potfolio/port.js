function revealtospan(){
    document.querySelectorAll(".reveal")
.forEach(function(elem){
    //creates two spans
    var parent = document.createElement("parent");
    var child = document.createElement("child");
    //parent and child both sets thire respective class
    parent.classList.add("parent")
    child.classList.add("child");
    //span parent gets child and child gets parent elem details
    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);
    //elem replace its value with parent span
    elem.innerHTML = "";
    elem.appendChild(parent);
})
} 
function valuesetter(){
    gsap.set("#nav a",{y:"-100%",opacity:0});
    gsap.set("#home .parent .child",{y:"100%"});
    gsap.set("#home .row img",{opacity:0});
    
    document.querySelectorAll("#Visual>g")
    .forEach(function(e){
     var character = e.childNodes[1].childNodes[1];

     character.style.strokeDasharray = character.getTotalLength() + 'px';
     character.style.strokeDashoffset = character.getTotalLength() + 'px';
    })
}
function laoderAnimation(){
    var tl = gsap.timeline();
tl
.from(" #loader .child span",{
    x: 100,
    delay:1,
    stagger:.2,
    opacity:0,
    duration: 1,
    ease: Power3.easeInOut,
})
.to(" #loader .parent .child",{
    y: "-100%",
     delay:1,
    duration: 1,
    ease: Circ.easeInOut,
})

.to("#loader",{
    height: "0%",
    delay:1,
    duration: 1,
    ease: Circ.easeInOut,
})
.to("#green",{
    height: "100%",
    top:0,
    delay:-.8,
    duration: 1,
    ease: Circ.easeInOut,
})
.to("#green",{
    height: "0",
    duration: 1,
    delay:-.5,
    ease: Circ.easeInOut,
    onComplete: function(){
        animatehomepage();
    }
})
}
function animatesvg(){
    gsap.to("#Visual>g>g>path,#Visual>g>g>polyline",{
        strokeDashoffset:0,
        duration:2,
        ease:Expo.easeInOut,
    })
}
function animatehomepage(){
    var tl = gsap.timeline();
    tl
    .to("#nav a",{
        y:0,
        opacity:1,
        stagger:.1,
        duration:1,
        ease:Expo.easeInOut,  
    })
    .to("#home .parent .child ",{
        y:0,
        opacity:2,
        stagger:.2,
     })
     .to("#home .row img",{
        opacity:1,
        ease:Expo.easeInOut,
        onComplete:function(){
            animatesvg();
          }   
     })
}
function loaderimg(){
    gsap.to("#img img",{
        // opacity:1,
        rotation:"360deg",
        ease:Linear.easeNone,
        repeat:-1,
        duration:2
        // delay:0
    })
} 

revealtospan();
valuesetter();
laoderAnimation();
loaderimg();

