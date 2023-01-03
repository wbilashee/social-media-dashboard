const html = document.documentElement;
const toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
    html.classList.toggle("dark");
    toggleBtn.classList.toggle("on");
});