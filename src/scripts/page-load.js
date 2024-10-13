import headline from "../assets/headline.jpg";
import menu from "../assets//menu-img.jpg";
import food1 from "../assets/food1.jpg";
export function pageLoad() {
    const headlineImg = document.getElementById("headline");
    const menuImg = document.getElementById("menu-img");
    const food1Img = document.getElementById("food-img");
    const aboutUs = document.getElementById("about-us");
    const orderText = document.getElementById("order-text");
    headlineImg.src = headline;
    menuImg.src = menu;
    food1Img.src = food1;
    aboutUs.textContent = "Who are we? Lorem ipsum dolor sit amet consectetur adipisicing elit. Error similique provident nemo consectetur, voluptatibus quae voluptate, ab dolores laborum, eos cum deleniti incidunt voluptatem optio consequuntur? Necessitatibus ex sequi incidunt!";
    orderText.textContent = "Order Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora laboriosam illum eligendi molestias animi, fugiat optio reprehenderit ratione repellendus rem esse, adipisci earum reiciendis laborum soluta temporibus nulla omnis sunt!";

}