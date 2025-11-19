import "./css/global.css";
import "./css/menu.css";

class MenuPage {
    constructor(contentElement) {
        this.content = contentElement;
        this.spots = [
            {
                spot: "The Asian Spot",
                class: "asian-image",
                description: "Fresh Asian dishes with aromatic spices and fast wok-style creations.",
            },
            {
                spot: "French Lovers",
                class: "french-fries-image",
                description: "Crispy fries in various cuts with creative toppings.",
            },
            {
                spot: "Burger Boss",
                class: "burger-image",
                description: "Juicy burgers made with quality ingredients and homemade sauces.",
            },
            {
                spot: "Dolce Pizza",
                class: "pizza-image",
                description: "Stone-baked pizza with fresh dough and carefully selected toppings.",
            },
        ];
    }

    clear() {
        this.content.textContent = "";
    }

    render() {
        const menuSec = document.createElement("div");

        menuSec.classList.add("menu-section");
        
        for (let i = 0; i < 4; i++) {
            const spot = document.createElement("div");
            const imgSpot = document.createElement("div");
            const h2Spot = document.createElement("h2");
            const pSpot = document.createElement("p");  

            spot.classList.add("food-spot");
            imgSpot.classList.add(this.spots[i].class);
            imgSpot.classList.add("image");
            h2Spot.textContent = this.spots[i].spot;
            pSpot.textContent = this.spots[i].description;

            spot.appendChild(imgSpot);
            spot.appendChild(h2Spot);
            spot.appendChild(pSpot);

            menuSec.appendChild(spot);
        }

        this.content.appendChild(menuSec);
    }
}

export default MenuPage;