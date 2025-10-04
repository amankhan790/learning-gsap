let main = document.querySelector(".main");
let cursor = document.querySelector(".cursor");
let image = document.querySelector(".image")

main.addEventListener("mousemove", (e) => {
  gsap.to(cursor,{
    x:e.x,
    y:e.y,
    duration:1,
  })
});

image.addEventListener("mouseenter",() => {
  cursor.innerHTML = "View more"
  gsap.to(cursor,{
    scale:5,
    backgroundColor: "#ffffff99"
  })
})
image.addEventListener("mouseleave",() => {
  cursor.innerHTML = ""
  gsap.to(cursor,{
    scale:1,
    
    backgroundColor: "#fff"
  })
})