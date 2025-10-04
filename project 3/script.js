function breakTheText() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;

  var splitedText = h1Text.split("");
  var halfValue = splitedText.length / 2;

  var clutter = "";
  splitedText.forEach((e, idx) => {
    if (idx < halfValue) {
      clutter += `<span class="a">${e}</span>`;
    } else {
      clutter += `<span class="b">${e}</span>`;
      console.log(e);
    }
  });
  h1.innerHTML = clutter;
}
breakTheText();

gsap.from("h1 .a", {
  y: 70,
  opacity: 0,
  duration: 0.5,
  delay: 0.3,
  stagger: 0.15,
});
gsap.from("h1 .b", {
  y: 70,
  opacity: 0,
  duration: 0.5,
  delay: 0.3,
  stagger: -0.15,
});