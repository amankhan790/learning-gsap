// gsap.from("#page1 .box", {
//   scale: 0,
//   duration: 1,
//   delay: 1,
// })
// gsap.from("#page2 .box", {
//   scale: 0,
//   duration: 1,
//   delay: 1,
//   rotate: 360,
//   scrollTrigger: {
//     trigger:"#page2 .box",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//     end: "top 30%",
//     scrub: 2,
//     pin: true
//   }
// })

gsap.to("#page2 h2", {
  transfrom: "translateX (-100%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -100%",
    scrub: 2,
    pin: true,

  }
})