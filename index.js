const barrs = document.querySelector(".bars"),
  close = document.querySelector(".close"),
  menu = document.querySelector(".menu");

barrs.addEventListener("click", () => {
  menu.classList.add("active");
});

close.addEventListener("click", () => {
  menu.classList.remove("active");
});

function animateContent(selector) {
  selector.forEach((selector) => {
    gsap.to(selector, {
      y: 30,
      duration: 0.1,
      opacity: 1,
      delay: 0.2,
      stagger: 0.2,
      ease: "power2.out",
    });
  });
}

function scrollTriggerAnimation(triggerSelector, boxSelectors) {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: triggerSelector,
      start: "top 50%",
      end: "top 80%",
      scrub: 1,
    },
  });

  boxSelectors.forEach((boxSelectors) => {
    timeline.to(boxSelectors, {
      y: 0,
      duration: 1,
      opacity: 1,
    });
  });
}

function swipeAnimation(triggerSelector, boxSelectors) {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: triggerSelector,
      start: "top 50%",
      end: "top 100%",
      scrub: 1,
    },
  });
  boxSelectors.forEach((boxSelectors) => {
    timeline.to(boxSelectors, {
      x: 0,
      duration: 1,
      opacity: 1,
    });
  });
}

animateContent([
  ".home .content h5, .home .content h1, .home .content p, .home .content .search",
]);

scrollTriggerAnimation(".travel", [".travel .box1"]);

swipeAnimation(".destination", [
  ".destination .heading",
  ".destination .content",
]);
