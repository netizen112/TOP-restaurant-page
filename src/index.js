import "./style.css";
import { nav } from "./nav.js";
import { createTab1 } from "./tab1.js";
import { createTab2 } from "./tab2.js";
import { createTab3 } from "./tab3.js";


function initializeTabs() {
    // Can add optimizations in the specific (tab1, tab2 tab3) module files:
    // check if the page is already active, and only if not, regenerate it
    tab1 = document.getElementById("tab1");
    tab1.onclick = () => {
        const contentDiv = document.getElementById("content");
        contentDiv.innerHTML = "";
        contentDiv.appendChild(createTab1());
    };

    tab2 = document.getElementById("tab2");
    tab2.onclick = () => {
        const contentDiv = document.getElementById("content");
        contentDiv.innerHTML = "";
        contentDiv.appendChild(createTab2());
    };

    tab3 = document.getElementById("tab3");
    tab3.onclick = () => {
        const contentDiv = document.getElementById("content");
        contentDiv.innerHTML = "";
        contentDiv.appendChild(createTab3());
    };
}

const navDiv = nav();
navDiv.firstChild.childNodes[0].classList.add("activetab");
const body = document.getElementsByTagName("body");
body[0].insertBefore(navDiv, body[0].firstChild);

initializeTabs();

const contentDiv = document.getElementById("content");
contentDiv.appendChild(createTab1());
