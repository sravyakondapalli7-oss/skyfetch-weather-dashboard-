window.addEventListener("scroll", function() {

  let elements = document.querySelectorAll("section");

  elements.forEach(el => {
    let pos = el.getBoundingClientRect().top;

    if (pos < window.innerHeight) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });

});
