const images = ["img1.jpg", "img2.jpg", "img3.jpg"];

const randomImages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${randomImages}`;

document.body.appendChild(bgImage);
