const paths = document.querySelectorAll("path");

paths.forEach(async (path, index) => {
  setTimeout(() => {
    path.id = "draw-svg";
  }, 400 * index);
});
