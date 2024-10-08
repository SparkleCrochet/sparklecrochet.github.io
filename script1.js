let currentIndex = 0;
const images = [
    {
        src: 'gt2.jpg',
        price: '$20.00',
        description: 'This is a great crochet item!'
    },
    {
        src: 'gt3.jpg',
        price: '$25.00',
        description: 'This item is even better!'
    },
];

function updateImage() {
    const currentImage = images[currentIndex];
    document.getElementById('current').src = currentImage.src;
    document.getElementById('price').innerText = currentImage.price;
    document.getElementById('description').innerText = currentImage.description;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

function changeImage(src, price, description) {
    currentIndex = images.findIndex(img => img.src === src);
    updateImage();
}
