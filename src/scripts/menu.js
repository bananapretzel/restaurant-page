import menuImg from "../assets/menu.jpg";

const displayMenuContent = () => {
  const menuImgElement = document.createElement("img");
  const content  = document.getElementById("content");
  menuImgElement.src = menuImg
  content.appendChild(menuImgElement);
    
  };
  
  export default displayMenuContent;