import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import HomePage from "./home.js";
import MenuPage from "./menu.js";
import ContactPage from "./contact.js";

const btns = document.querySelectorAll("button");

const init = () => {
    const content = document.querySelector("#content");
    const home = new HomePage(content);

    home.clear()
    home.render()
}

document.addEventListener("DOMContentLoaded", init);

const loadMenu = () => {
    const content = document.querySelector("#content");
    const menu = new MenuPage(content);

    menu.clear();
    menu.render();
}

const loadContact = () => {
    const content = document.querySelector("#content");
    const contact = new ContactPage(content);

    contact.clear();
    contact.render();
}

btns.forEach(btn => {
    btn.addEventListener("click", (event) => {
        const clickedBtn = event.target;

        if (clickedBtn.textContent === "Home") {
            init();
        }
        else if (clickedBtn.textContent === "Menu") {
            loadMenu();
        }
        else if (clickedBtn.textContent === "Contact") {
            loadContact();
        }
    })
});