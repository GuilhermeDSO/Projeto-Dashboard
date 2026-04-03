const toggleBtn = document.getElementById("themeToggle");
const html = document.documentElement;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    html.setAttribute("data-bs-theme", savedTheme);
    toggleBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";
}

toggleBtn.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-bs-theme");

    if (currentTheme === "dark") {
        html.setAttribute("data-bs-theme", "light");
        toggleBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    } else {
        html.setAttribute("data-bs-theme", "dark");
        toggleBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    }
});