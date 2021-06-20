const home_btn = document.getElementById("Home_btn");
const Skills_btn = document.getElementById("Skills_btn");
const Projects_btn = document.getElementById("Projects_btn");

const home = document.getElementById("Home");
const skills = document.getElementById("Skills");
const projects = document.getElementById("Projects");

home_btn.addEventListener("click", () => {
    home.scrollIntoView(true);
    // now account for fixed header
    const scrolledY = window.scrollY;

    if (scrolledY) {
        window.scroll(0, scrolledY - 140);
    }
    menu.classList.remove("is-active");
    navbarbutton.classList.remove("is-active");
});

Skills_btn.addEventListener("click", () => {
    skills.scrollIntoView(true, { "behavior": "smooth" });
    menu.classList.remove("is-active");
    navbarbutton.classList.remove("is-active");
});
Projects_btn.addEventListener("click", () => {
    Projects.scrollIntoView(true, { "behavior": "smooth" });
    menu.classList.remove("is-active");
    navbarbutton.classList.remove("is-active");
});


//
const githubButton = document.getElementById("temtemcountergithub");
const githubimg = document.getElementById("githubimg");



githubButton.addEventListener("mouseleave", (event) => {
    githubimg.style.filter = "none";
});


githubButton.addEventListener("mouseover", (event) => {
    setTimeout(() => {
        githubimg.style.filter = "brightness(100) invert(1)";
    }, 0)
});



const navbarbutton = document.getElementById("burger");
const menu = document.getElementById("menubar");

navbarbutton.addEventListener("click", () => {
    menu.classList.toggle("is-active");
    navbarbutton.classList.toggle("is-active");
});