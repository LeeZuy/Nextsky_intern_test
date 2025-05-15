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

    const allCategory = document.getElementById("allCategory");
    const allCategoryContent = document.getElementById(
        "allCategoryContent"
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

    // Toggle all category content
    allCategory.classList.add("collapsed");
    allCategoryContent.style.display = "none";
    allCategory.querySelector("i").className = "fas fa-plus";

    allCategory.addEventListener("click", function () {
        this.classList.toggle("collapsed");
        const icon = this.querySelector("i");

        if (this.classList.contains("collapsed")) {
            icon.className = "fas fa-plus";
            allCategoryContent.style.display = "none";
        } else {
            icon.className = "fas fa-minus";
            allCategoryContent.style.display = "block";
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

// Our Collections

// .collectionsItem
//     .collectionsProduct


// let current = 0;
// const slider = document.querySelector('.collectionsItem');
// const products = document.querySelectorAll('.collectionsProduct');
// const productsPerView = 2;
// const total = products.length;

// function slide(direction) {
//     const productWidth = products[0].offsetWidth + 16; // 16 là khoảng cách gap giữa các sản phẩm

//     if (direction === 'next') {
//         current = (current + 1) % total;
//     } else {
//         current = (current - 1 + total) % total;
//     }

// Nếu currentIndex vượt quá chỉ số trượt hợp lệ thì cần điều chỉnh:
// VD: với 4 sản phẩm, mỗi lần hiển thị 2 -> max chỉ số hợp lệ là 2 (0, 1, 2)
//     const maxIndex = total - productsPerView;
//     const adjustedIndex = current > maxIndex ? 0 : current;

//     slider.style.transform = `translateX(-${adjustedIndex * productWidth}px)`;
// }

const slider = document.querySelector('.collectionsItem');
const products = document.querySelectorAll('.collectionsProduct');
const total = products.length;
let current = 0;

function getProductWidth() {
    return products[0].offsetWidth + 16; // 16px là khoảng cách giữa các sản phẩm (gap)
}

function getProductsPerView() {
    const containerWidth = document.querySelector('collectionsItemIn').offsetWidth;
    const itemWidth = getProductWidth();
    return Math.floor(containerWidth / itemWidth);
}

function slide(direction) {
    const productWidth = getProductWidth();
    const perView = getProductsPerView();
    const maxIndex = total - perView;

    if (direction === 'next') {
        current = current >= maxIndex ? 0 : current + 1;
    } else {
        current = current <= 0 ? maxIndex : current - 1;
    }

    slider.style.transform = `translateX(-${current * productWidth}px)`;
}

window.addEventListener('resize', () => {
    const productWidth = getProductWidth();
    slider.style.transform = `translateX(-${current * productWidth}px)`;
});





// footer bot
// lenguage & currency
function setupSelector(selectorId) {
    const select = document.getElementById(selectorId);
    const labelSpan = select.querySelector(".label");
    const radios = select.querySelectorAll('input[type="radio"]');
    radios.forEach((radio) => {
        radio.addEventListener("change", () => {
            const lbl = select.querySelector(`label[for="${radio.id}"]`);
            labelSpan.textContent = lbl.getAttribute("data-txt");
        });
    });
}

setupSelector("lang-select");
setupSelector("cur-select");


// Smooth Scrolling
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});

// Fade-in effect on scroll
document.addEventListener("DOMContentLoaded", function () {
    const faders = document.querySelectorAll(".fade-in");

    const appearOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});

// lazy img

document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll('img.lazyload');

    const lazyLoad = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const srcset = img.getAttribute('data-srcset');
                if (srcset) {
                    img.setAttribute('src', srcset);
                }
                img.classList.remove('lazyload');
                observer.unobserve(img);
            }
        });
    };

    const observer = new IntersectionObserver(lazyLoad, {
        rootMargin: '100px',
        threshold: 0.1
    });

    lazyImages.forEach(img => {
        observer.observe(img);
    });
});
