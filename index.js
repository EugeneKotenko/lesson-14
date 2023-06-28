const totalImages = 9;

const randomImageIndex = Math.floor(Math.random() * totalImages) + 1;

const imagePath = `images/${randomImageIndex}.jpg`;

const imageElement = document.createElement("img");

imageElement.src = imagePath;

const imageContainer = document.getElementById("image-container");
imageContainer.appendChild(imageElement);