const barrs = document.querySelector(".bars"),
  close = document.querySelector(".close"),
  menu = document.querySelector(".menu");

barrs.addEventListener("click", () => {
  menu.classList.add("active");
});

close.addEventListener("click", () => {
  menu.classList.remove("active");
});
