
import displayAboutContent from "./about.js";
import displayMenuContent from "./menu.js";
import displayHomeContent from "./home.js";
import "../styles.css";

displayHomeContent();

const content  = document.getElementById("content");
const aboutBtn = document.getElementById("about");
const menuBtn = document.getElementById("menu");
const homeBtn = document.getElementById("home");


aboutBtn.addEventListener("click", () => {
    content.innerHTML = "";
    displayAboutContent();
});

menuBtn.addEventListener("click", () => {
    content.innerHTML = "";
    displayMenuContent();
});

homeBtn.addEventListener("click", () => {
    content.innerHTML = "";
    displayHomeContent();
});