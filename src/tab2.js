function createTab2() {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add('menu');


    const activeElem = document.querySelector('.activetab');
    if (activeElem) {
        activeElem.classList.remove('activetab');
    }
    const tab2 = document.getElementById("tab2");
    tab2.classList.add("activetab");

    const p = document.createElement("p");
    p.innerText = `
Appetizers

    Calamari Fritti
    Bruschetta

Salads

    Caesar Salad
    Arugula Salad

Main Courses

    Spaghetti and Meatballs
    Seared Salmon
    Filet Mignon

Side Dishes

    Roasted Potatoes
    Mashed Potatoes
    Broccoli

Desserts

    Tiramisu
    Cannoli
    Chocolate Lava Cake
`;
    mainDiv.appendChild(p);

    return mainDiv;
}

export { createTab2 };
