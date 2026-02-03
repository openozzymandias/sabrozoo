document.addEventListener("DOMContentLoaded", () => {
  // Animación del perrito en el hero con GSAP
  gsap.from("#hero-dog", {
    duration: 2,
    y: -50,
    opacity: 0,
    ease: "bounce.out",
  });
});