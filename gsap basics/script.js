// gsap.to("#box",{
//   x: 1000,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   backgroundColor: "yellow",
//   borderRadius: "50%",
// })

// gsap.from("#box2",{
//   x: 1000,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
// })

// gsap.from("h1", {
//   opacity: 0,
//   duration: 1,
//   y: 40,
//   delay:1,
//   stagger: 1,
// })

// gsap.to("#box",{
//   x: 1000,
//   duration: 1,
//   delay: 1,
//   rotate: 360,
//   repeat: 1,
//   yoyo: true,
// })

//      timeline
// var tl = gsap.timeline()
// tl.to("#box", {
//   x: 1000,
//   duration: 1.5,
//   delay: 1,
//   rotate: 360,
// });
// tl.to("#box2", {
//   x: 1000,
//   duration: 1.5,
//   rotate: 360,
// });
// tl.to("#box3", {
//   x: 1000,
//   duration: 1.5,
//   rotate: 360,
// });

var tl = gsap.timeline()

tl.from("h1", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5
})
tl.from("h2", {
  y: -20,
  opacity: 0,
  duration: 1,
  stagger: 0.3
})
tl.from("h3", {
  y: -20,
  opacity: 0,
  duration: 1,
  scale: 1,
})