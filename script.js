// header
// alert
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".alert-slide");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide) => slide.classList.remove("active"));
        slides[index].classList.add("active");
    }

    prevBtn.addEventListener("click", function () {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    nextBtn.addEventListener("click", function () {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    setInterval(function () {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);
});
// menu-slider
document.addEventListener("DOMContentLoaded", function () {
    const mainCategories = document.querySelectorAll(".main-category");
    const allSubCategories = document.querySelectorAll(".sub-categories");

    const topSellingHeader = document.getElementById("top-selling-header");
    const topSellingContent = document.getElementById(
        "top-selling-content"
    );

    function hideAllSubCategories() {
        allSubCategories.forEach((subCategory) => {
            subCategory.classList.remove("active");
        });

        mainCategories.forEach((category) => {
            category.classList.remove("active");
        });
    }

    mainCategories.forEach((category) => {
        category.addEventListener("mouseenter", function () {
            const categoryType = this.getAttribute("data-category");

            hideAllSubCategories();

            const targetContent = document.querySelector(
                `.sub-categories[data-category-content="${categoryType}"]`
            );
            if (targetContent) {
                targetContent.classList.add("active");
                this.classList.add("active");
            }
        });
    });

    // Toggle top selling products
    topSellingHeader.classList.add("collapsed");
    topSellingContent.style.display = "none";
    topSellingHeader.querySelector("i").className = "fas fa-plus";

    topSellingHeader.addEventListener("click", function () {
        this.classList.toggle("collapsed");
        const icon = this.querySelector("i");

        if (this.classList.contains("collapsed")) {
            icon.className = "fas fa-plus";
            topSellingContent.style.display = "none";
        } else {
            icon.className = "fas fa-minus";
            topSellingContent.style.display = "block";
        }
    });

    hideAllSubCategories();
});

// slider
const imgContainer = document.querySelector(".aspect-ratio-169");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;
const slideCount = document.querySelectorAll(
    ".aspect-ratio-169 img"
).length;
const slideInterval = 5000;
let slideTimer;

function goToSlide(index) {
    if (index < 0) index = slideCount - 1;
    if (index >= slideCount) index = 0;

    currentIndex = index;
    imgContainer.style.transform = `translateX(-${currentIndex * 33.3333
        }%)`;

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
    });

    resetTimer();
}

function nextSlide() {
    goToSlide(currentIndex + 1);
}

function resetTimer() {
    clearInterval(slideTimer);
    slideTimer = setInterval(nextSlide, slideInterval);
}

dots.forEach((dot) => {
    dot.addEventListener("click", function () {
        const index = parseInt(this.getAttribute("data-index"));
        goToSlide(index);
    });
});

resetTimer();

imgContainer.parentElement.addEventListener("mouseenter", () => {
    clearInterval(slideTimer);
});

imgContainer.parentElement.addEventListener("mouseleave", resetTimer);

// mobile js
// mobile menu
function toggleMenu() {
    const menuOverlay = document.getElementById("menuOverlay");
    const backdrop = document.getElementById("backdrop");
    menuOverlay.classList.toggle("active");
    backdrop.classList.toggle("active");
}

function toggleSubMenu() {
    const subMenu = document.getElementById("subMenu");
    subMenu.classList.toggle("active");
}

function closeAll() {
    const menuOverlay = document.getElementById("menuOverlay");
    const subMenu = document.getElementById("subMenu");
    const backdrop = document.getElementById("backdrop");
    menuOverlay.classList.remove("active");
    subMenu.classList.remove("active");
    backdrop.classList.remove("active");
}