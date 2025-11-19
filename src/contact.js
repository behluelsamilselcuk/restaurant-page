import "./css/global.css";
import "./css/contact.css";

class ContactPage {
    constructor(contentElement) {
        this.content = contentElement;
    }

    clear() {
        this.content.textContent = "";
    }

    render() {
        const contactSec = document.createElement("div");
        const infoDiv = document.createElement("div");
        const phone = document.createElement("p");
        const address = document.createElement("p");
        const maps = document.createElement("div");

        contactSec.classList.add("contact-section");
        infoDiv.classList.add("information");

        phone.classList.add("phone-number");
        address.classList.add("address");
        maps.classList.add("maps");

        phone.innerHTML = "<i class='fa-solid fa-phone'></i> +49 561 701300";;
        address.innerHTML = "<i class='fa-solid fa-location-dot'></i> City-Point Kassel, Königsplatz 61, 34117 Kassel, DE";
        

        infoDiv.appendChild(phone);
        infoDiv.appendChild(address);
        contactSec.appendChild(infoDiv);
        contactSec.appendChild(maps);

        this.content.appendChild(contactSec);
    }
}

export default ContactPage;