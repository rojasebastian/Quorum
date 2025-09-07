const video = document.getElementById("bg-video-p");

document.addEventListener("mousemove", (e) => {
  let x = (e.clientX / window.innerWidth - 0.5) * 80;  // -5% a +5%
  let y = (e.clientY / window.innerHeight - 0.5) * 80; // -5% a +5%

  video.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1.05)`;
});
