// document.addEventListener("DOMContentLoaded", function () {
//     const screens = document.querySelectorAll("#changing_content .single-screen");
//     let current = 0;

//     screens.forEach((screen, index) => {
//         screen.style.display = index === 0 ? "block" : "none";
//     });

//     setInterval(() => {
//         screens[current].style.display = "none";
//         current = (current + 1) % screens.length;
//         screens[current].style.display = "block";
//     }, 5000);
// });