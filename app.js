// Navbar section   
const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

// Hero Section
const images = [
    'https://media.assettype.com/outlooktraveller%2Fimport%2Fpublic%2Fuploads%2Ffilemanager%2Fimages%2FHumayuns-tomb-delhi.jpg',
    'https://www.akdmc.com/media/6675/14.jpg',
    'https://holxo-web-s3.s3.amazonaws.com/media/blogs/coverimages/post_cvimg_1582271004_711555__Red_Fort.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/dd/Temple_No.-_3%2C_Nalanda_Archaeological_Site.jpg'
];

let currentIndex = 0;
const heroSection = document.querySelector('.hero-section');

function changeBackgroundImage() {
    heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 2500);
changeBackgroundImage();

// gallery section
const gallery = document.getElementById('image-gallery');
const scrollLeftBtn = document.getElementById('scroll-left');
const scrollRightBtn = document.getElementById('scroll-right');

const scrollAmount = 320; // Adjusted to match image width + margin

scrollLeftBtn.addEventListener('click', () => {
    gallery.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});

scrollRightBtn.addEventListener('click', () => {
    gallery.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});



