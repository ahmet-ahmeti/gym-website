// SIDEBAR
const sidebar = document.getElementById("sidebar")
const overlay = document.getElementById("overlay")
const toggle = document.getElementById("toggle-button")


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("open")
    overlay.classList.toggle("active")
});

overlay.addEventListener("click", () => {
    sidebar.classList.remove("open")
    overlay.classList.remove("active")
})

// CAROUSEL

const SLIDE_W = 300;
const slides = document.querySelectorAll('.slide');
const total = slides.length / 2;
const LOOP_W = SLIDE_W * total;
const track = document.getElementById('track');

let pos = LOOP_W + 1;

function step() {
    pos += 1;

    if (pos >= LOOP_W)pos -= LOOP_W;

    track.style.transform = `translateX(${-pos}px)`;
    requestAnimationFrame(step);
}
requestAnimationFrame(step);

