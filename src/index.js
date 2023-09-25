import './style.css';
import Resto from './mainimg.jpg';

function content() {
    const mainDiv = document.createElement('div');

    const title = document.createElement("h1");
    title.innerText = "Restaurant";
    title.setAttribute("style", "text-align:center");

    mainDiv.appendChild(title);

    const myIcon = new Image();
    myIcon.src = Resto;
    myIcon.classList.add('mainImg');

    mainDiv.appendChild(myIcon);

    const p = document.createElement("p");
    p.innerText =
        "We are a family-owned and operated restaurant that has been serving the community for over 20 years. We offer a wide variety of delicious and affordable dishes, made with fresh, high-quality ingredients. Whether you're in the mood for a classic American burger, a hearty pasta dish, or a fresh seafood meal, we have something for everyone.";

    mainDiv.appendChild(p);

    return mainDiv;
}

const contentDiv = document.getElementById('content');
contentDiv.appendChild(content());
