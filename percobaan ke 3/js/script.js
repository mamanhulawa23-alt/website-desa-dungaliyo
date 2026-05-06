// Tanggal otomatis
const tanggal = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
});
document.getElementById("tanggal").innerText = tanggal;
// SIMPLE SLIDER
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide() {
    slides.forEach(sl => sl.classList.remove("active"));
    slides[slideIndex].classList.add("active");
    slideIndex = (slideIndex + 1) % slides.length;
}

setInterval(showSlide, 3500);
// Lightbox gallery
function openImage(src) {
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox").style.display = "flex";
}

function closeImage() {
    document.getElementById("lightbox").style.display = "none";
}

function openImage(src) {
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox").style.display = "flex";
}

function closeImage() {
    document.getElementById("lightbox").style.display = "none";
}

