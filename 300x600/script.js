document.addEventListener("DOMContentLoaded", function () {
    const screens = document.querySelectorAll("#changing_content .single-screen");
    if (screens.length !== 3) return;
    let current = 0;
    const interval = setInterval(() => {
        screens[current].style.display = "none";
        current++;
        screens[current].style.display = "block";

        if (current === 2) {
            clearInterval(interval);
            return;
        }
    }, 5000);
});
