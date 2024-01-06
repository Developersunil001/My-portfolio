// var tl=gsap.timeline({
//     repeat:-1
// });
// tl 
gsap.to("#three",{
    opacity:0,
    display:"none",
    duration:.5,
    ease:Circ.easeInout
})
gsap.to("#two",{
     delay:1,
    // opacity:0,
    display:"none",
    duration: 5,
    repeat:-1,
    ease:Circ.easeInout
    // stagger:1
})
gsap.to("#one",{
    display:"none",
    delay:3,
    repeat:-1,
    duration: 5,
    // stagger:1
    ease:Circ.easeInout,
    onComplete:function(){
        gsap.to("#three",{
            opacity:0,
            display:"initial",
            duration:.5,
            ease:Circ.easeInout
        })
    }
})

gsap.to(".card",{
    opacity:0,
    duration:5,
    repeat:-1,
    stagger:1
})
//  var a=[1, 1,3,4,5,6,7];
//   var b=[...a];
//   b.pop();