import imgOne from "../assets/headline.jpg";
import imgTwo from "../assets/menu-img.jpg";

const displayHomeContent = () => {
  const gridContainer = document.createElement("div");
  const homeImgOne = document.createElement("img");
  const paraOne = document.createElement("p");
  const homeImgTwo = document.createElement("img");
  const paraTwo = document.createElement("p");
  const content  = document.getElementById("content");

  gridContainer.classList.add("grid-container");
  homeImgOne.src = imgOne;
  homeImgTwo.src = imgTwo;
  paraOne.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni beatae minus eius culpa reprehenderit. Incidunt quos, explicabo iure quas cum recusandae quia natus quae id? Recusandae iure inventore provident cumque.";
  paraTwo.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni beatae minus eius culpa reprehenderit. Incidunt quos, explicabo iure quas cum recusandae quia natus quae id? Recusandae iure inventore provident cumque.";

  content.appendChild(gridContainer);
  gridContainer.appendChild(homeImgOne);
  gridContainer.appendChild(paraOne);
  gridContainer.appendChild(paraTwo);
  gridContainer.appendChild(homeImgTwo);
  };
  
  export default displayHomeContent;