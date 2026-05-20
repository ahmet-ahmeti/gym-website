// SIDEBAR
const sidebar = document.getElementById("sidebar")
const overlay = document.getElementById("overlay")
const toggle = document.getElementById("toggle-button")


toggle.addEventListener("click", () => { // after clicking toggle a the classes on and off
    sidebar.classList.toggle("open")
    overlay.classList.toggle("active")
});

overlay.addEventListener("click", () => {
    sidebar.classList.remove("open")
    overlay.classList.remove("active") // after clicking remove classes
});