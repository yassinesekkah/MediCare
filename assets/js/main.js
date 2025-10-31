const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.carousel-indicators button');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
  indicators.forEach((btn, i) => btn.classList.toggle('active', i === index));
}

// Next / Prev
document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

// Indicators click
indicators.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    currentIndex = i;
    showSlide(currentIndex);
  });
});

// Auto-slide 
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 5000);


const nextBtn = document.getElementById('nextBtn');
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');

nextBtn.addEventListener('click', () => {
    // Optionally: validate step 1 fields
    const prenom = document.getElementById('prenom').value.trim();
    const nom = document.getElementById('nom').value.trim();
    if (!prenom || !nom) {
        alert("Veuillez remplir Prénom et Nom !");
        return;
    }

    // Hide step 1
    step1.classList.add('d-none');
    // Show step 2
    step2.classList.remove('d-none');
});
