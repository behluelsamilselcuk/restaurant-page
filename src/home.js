import "./css/global.css"
import "./css/home.css";

class HomePage {
    constructor(contentElement) {
        this.content = contentElement;
    }

    clear() {
        this.content.textContent = "";
    }

    render() {
        const welcomeSec = document.createElement("div");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const spotImg = document.createElement("div");
        const p3 = document.createElement("p");

        welcomeSec.classList.add("welcome");
        spotImg.classList.add("spot-image");
        
        p1.textContent = "Best food spots in town";
        p2.textContent = "Made with passion since 2016";
        p3.textContent = "Visit us!";

        welcomeSec.appendChild(p1);
        welcomeSec.appendChild(p2);
        welcomeSec.appendChild(spotImg);
        welcomeSec.appendChild(p3);

        this.content.appendChild(welcomeSec);
    }
}

export default HomePage;