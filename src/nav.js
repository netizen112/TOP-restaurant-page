function nav() {
    const navDiv = document.createElement("nav");

    const tablist = document.createElement("ul");

    const tab1 = document.createElement("li");
    tab1.classList.add("tab");
    tab1.id = "tab1";
    tab1.innerText = "Home";
    tablist.appendChild(tab1);

    const tab2 = document.createElement("li");
    tab2.classList.add("tab");
    tab2.id = "tab2";
    tab2.innerText = "Menu";
    tablist.appendChild(tab2);

    const tab3 = document.createElement("li");
    tab3.classList.add("tab");
    tab3.id = "tab3";
    tab3.innerText = "Contact";
    tablist.appendChild(tab3);

    navDiv.appendChild(tablist);

    return navDiv;
}

export { nav };
