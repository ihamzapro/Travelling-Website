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

function galleryAnimation(triggerSelector, boxSelectors) {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: triggerSelector,
      start: "top 100%",
      end: "bottom 100%",
      scrub: 1,
    },
  });
  boxSelectors.forEach((boxSelectors) => {
    timeline.to(boxSelectors, {
      y: 0,
      opacity: 1,
      duration: 1,
    });
  });
}

animateContent([
  ".home .content h5, .home .content h1, .home .content p, .home .content .search",
]);

scrollTriggerAnimation(".travel", [".travel .box1"]);

scrollTriggerAnimation(".feedback .container", [
  ".feedback .label",
  ".feedback .heading",
  ".feedback .heading",
]);

scrollTriggerAnimation(".article", [".article .label", ".article .heading"]);

swipeAnimation(".destination", [
  ".destination .heading",
  ".destination .content",
]);
swipeAnimation(".article", [
  ".article .latest-article",
  ".article .box1",
  ".article .box2",
  ".article .box3",
]);
galleryAnimation(".destination .gallery", [
  ".destination .gallery .box1",
  ".destination .gallery .box2",
  ".destination .gallery .box3",
  ".destination .gallery .box4",
  ".destination .gallery .box5",
]);
galleryAnimation(".featured .gallery", [
  ".featured .gallery .box1",
  ".featured .gallery .box2",
  ".featured .gallery .box3",
  ".featured .gallery .box4",
]);
galleryAnimation(".feedback .voices", [
  ".feedback .voices .box1",
  ".feedback .voices .box2",
  ".feedback .voices .box3",
  ".feedback .voices .box4",
  ".feedback .voices .box5",
  ".feedback .voices .box6",
]);
