const images = ["0.jpeg", "1.jpg", "2.jpeg"];
const backgrounditem = images[Math.floor(Math.random() * images.length)];
const bgi = document.createElement("img");
bgi.src = `img/${backgrounditem}`;
document.body.appendChild(bgi);
