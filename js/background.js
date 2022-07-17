const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const choseImage = images[Math.floor(Math.random()*images.length)];

//console.log(choseImage);
const bgImage = document.createElement("img");

//console.log(bgImage);

bgImage.src = `img/${choseImage}`;
//console.log(bgImage);

document.body.appendChild(bgImage);
