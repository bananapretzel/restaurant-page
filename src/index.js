import "./styles.css";
import { greeting } from "./greeting.js";
import odinImage from "./Odin.png";
   
const image = document.createElement("img");
image.src = odinImage;
   
document.body.appendChild(image);

console.log(greeting);