let slides = [
    {
        image: "./assets/images/slide1.png",
        text: "Prendre soin de la vie",
        title: "Faites un bilan de santé au moins une fois par an"
    },
    {
        image: "./assets/images/slide2.png",
        text: "Prendre soin de la vie",
        title: "Ne prenez pas de médicaments sans avis médical"
    },
    {
        image: "./assets/images/slide3.png",
        text: "Prendre soin de la vie",
        title: "Surveillez votre tension artérielle et votre glycémie"
    },
]

let img = document.querySelector(".carouselImage");
let text = document.querySelector(".carouselText p");
let title = document.querySelector(".carouselText h2");
let btnPrev = document.getElementById("prev");
let btnNext = document.getElementById("next");
let currentIndex = 0;
let indicator = document.querySelectorAll(".carouselIndicator button");

btnPrev.addEventListener("click", function () {
    if (currentIndex === 0) {
        currentIndex = slides.length - 1;
    }
    else {
        currentIndex--;
    }
    img.src = slides[currentIndex].image;
    text.textContent = slides[currentIndex].text;
    title.textContent = slides[currentIndex].title;

    indicator.forEach(function(btn, i){
        if(i === currentIndex){
            btn.classList.add("active");
        }
        else{
            btn.classList.remove("active");
        }
    })
})

btnNext.addEventListener("click", function () {
    if (currentIndex === slides.length - 1) {
        currentIndex = 0;
    }
    else {
        currentIndex++;
    }
    img.src = slides[currentIndex].image;
    text.textContent = slides[currentIndex].text;
    title.textContent = slides[currentIndex].title;

    indicator.forEach(function(btn, i){
        if(i === currentIndex){
            btn.classList.add("active");
        }
        else{
            btn.classList.remove("active");
        }
    })
})

function nextSlide() {
    if (currentIndex === slides.length - 1) {
        currentIndex = 0;
    }
    else {
        currentIndex++;
    }
    img.src = slides[currentIndex].image;
    text.textContent = slides[currentIndex].text;
    title.textContent = slides[currentIndex].title;

    indicator.forEach(function(btn, i){
        if(i === currentIndex){
            btn.classList.add("active");
        }
        else{
            btn.classList.remove("active");
        }
    })
}
setInterval(nextSlide, 5000); /*pour auto slide */
