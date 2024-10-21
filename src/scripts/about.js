import foodImg from "../assets/food1.jpg";

function displayAboutContent() {
  

    const aboutDiv = document.createElement("div");
    const aboutUsImg = document.createElement("img");
    const aboutTitle = document.createElement("h2");
    const content  = document.getElementById("content");
    console.log("hello");
    const aboutParagraph = document.createElement("p");
    aboutUsImg.src = foodImg;
    aboutTitle.textContent = "Who are we?";
    aboutParagraph.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex sunt eos perferendis magnam eum adipisci voluptatem nulla repudiandae rerum, accusantium eligendi est libero, quia reiciendis, culpa illo harum. Blanditiis, explicabo. Cupiditate, iusto nulla tenetur perspiciatis quisquam veritatis maxime nihil, asperiores ad fugiat tempore culpa veniam id, debitis quidem aspernatur delectus eligendi earum corrupti voluptate accusamus! Quia maxime minima vero exercitationem!";
    content.appendChild(aboutUsImg);
    content.appendChild(aboutTitle);
    content.appendChild(aboutParagraph);
  };
  
  export default displayAboutContent;