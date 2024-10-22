import menuImg from "../assets/menu.jpg";

const displayMenuContent = () => {
  const menuImgElement = document.createElement("img");
  const content  = document.getElementById("content");
  const menuText = document.createElement("pre");
  menuImgElement.src = menuImg
  
  menuText.innerHTML = `
  <b>Starters</b>
    Dragonfruit Bruschetta – $8.50
    Truffle-Infused Cauliflower Bites – $12.00
    Rainbow Kale Nachos – $9.75
    Lava Rock Guacamole – $7.25
    Crispy Lotus Root Chips – $6.50

  <b>Main Courses</b>
    Honey-Glazed Salmon with Mango Salsa – $22.00
    Coconut Curry Risotto – $18.50
    Fire-Grilled Tofu Steaks – $16.75
    Saffron-Butter Lobster Roll – $24.00
    Spicy Mushroom & Quinoa Burger – $14.00

  <b>Sides</b>
    Rosemary Sweet Potato Fries – $5.50
    Charred Asparagus with Lemon Zest – $6.00
    Maple Glazed Brussels Sprouts – $5.75
    Crispy Polenta Wedges – $5.25

  <b>Desserts</b>
    Salted Caramel Macaron Tower – $9.00
    Blackberry Basil Sorbet – $6.75
    Hazelnut Chocolate Lava Cake – $8.25
    Matcha Panna Cotta – $7.50

  <b>Beverages</b>
    Sparkling Lavender Lemonade – $4.75
    Iced Rose Petal Tea – $5.00
    Cucumber Mint Cooler – $4.25
    Dragonberry Mojito (Non-Alcoholic) – $6.50`;

  content.appendChild(menuImgElement);
  content.appendChild(menuText);
    
  };
  
  export default displayMenuContent;