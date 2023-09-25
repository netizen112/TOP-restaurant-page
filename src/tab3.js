function createTab3() {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add('menu');


    let activeElem = document.querySelector('.activetab');
    if (activeElem) {
        activeElem.classList.remove('activetab');
    }
    const tab3 = document.getElementById("tab3");
    tab3.classList.add("activetab");

    const p = document.createElement("p");
    p.innerText = `
Restaurant Name
123 Main Street
Anytown, CA 12345
(123) 456-7890

Hours of Operation
Sunday-Thursday: 11am-10pm
Friday-Saturday: 11am-11pm

Contact Us

We are happy to answer any questions you may have about our restaurant, menu, or reservations. 
Please feel free to contact by calling us at (123) 456-7890.`;
    mainDiv.appendChild(p);

    return mainDiv;
}

export { createTab3 };