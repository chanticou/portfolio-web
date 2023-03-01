export function handleKeyEvents() {
  window.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      window.scrollBy({
        left: -100,
        behavior: "smooth",
      });
    } else if (event.key === "ArrowRight") {
      window.scrollBy({
        left: 100,
        behavior: "smooth",
      });
    }
  });
}
