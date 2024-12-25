const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from("#nav",{
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo
    
})
.to(".boundingelem",{
    y: 0,
    duration:2,
    ease: Expo.easeInOut,
    stagger: .2,
    delay: -1
})
.from("#herofooter",{
    y: -10,
    opacity:0,
    duration:2,
    delay:-1,
    ease: Expo.easeInOUt
})
}
// function circlechaptakaro(){
//     var xscale = 1;
//     var yscale = 1;

//     var xprev = 0;
//     var yprev = 0;
//     window.addEventListener("mousemove",function(dets){
//         xscale = gsap.utils.clamp(.8,1.2,dets.clientX - xprev);
//         yscale = gsap.utils.clamp(.8,1.2,dets.clientY - yprev);

//        xprev = dets.clientX;
//        yprev = dets.clientY;

//        circleMouseFollower(xscale, yscale);
       
//     });
   
// }
// circlechaptakaro();
// function circleMouseFollower(xscale,yscale){
//     window.addEventListener("mousemove",function(dets){
        
//         document.querySelector("#minicircles").style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
        
//     })
// }
// circleMouseFollower();
firstPageAnim()

