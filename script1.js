const price = "$20.00";
const description = "This is a great crochet item!";
const images = [
    'gt2.jpg',
    'gt3.jpg',
    'gt4.jpg'
];

let currentIndex = 0;

function updateImage() {
    document.getElementById('current').src = images[currentIndex];
    document.getElementById('price').innerText = price;
    document.getElementById('description').innerText = description;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

function changeImage(src) {
    currentIndex = images.indexOf(src);
    updateImage();
}

// Open contact page or function
document.getElementById('contact-btn').onclick = function() {
    window.open('mailto:your-email@example.com');
};

// Initialize the first image on load
window.onload = updateImage;
