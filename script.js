let products, slider, container;
let current = 0;

function initCollectionSlider() {
    slider = document.querySelector(".collectionsItem");
    container = document.querySelector(".collectionsItemIn");
    products = document.querySelectorAll(".collectionsProduct");
}
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".alert-slide"); const prevBtn = document.querySelector(".prev-btn"); const nextBtn = document.querySelector(".next-btn"); let currentSlide = 0; function showSlide(index) { slides.forEach((slide) => slide.classList.remove("active")); slides[index].classList.add("active") }
    prevBtn.addEventListener("click", function () { currentSlide = (currentSlide - 1 + slides.length) % slides.length; showSlide(currentSlide) }); nextBtn.addEventListener("click", function () { currentSlide = (currentSlide + 1) % slides.length; showSlide(currentSlide) }); setInterval(function () { currentSlide = (currentSlide + 1) % slides.length; showSlide(currentSlide) }, 5000)
}); document.addEventListener("DOMContentLoaded", function () {
    const mainCategories = document.querySelectorAll(".main-category"); const subCategoriesContainer = document.querySelector(".sub-categories-container"); const allSubCategories = document.querySelectorAll(".sub-categories"); function hideAllSubCategories() { allSubCategories.forEach(sub => sub.classList.remove("active")) }
    if (window.innerWidth > 991) {
        if (mainCategories && subCategoriesContainer) {
            mainCategories.forEach(category => {
                category.addEventListener("mouseenter", function () { const type = this.getAttribute("data-category"); hideAllSubCategories(); if (type) { const target = document.querySelector(`.sub-categories[data-category-content="${type}"]`); if (target) { subCategoriesContainer.style.display = "block"; target.classList.add("active") } else { subCategoriesContainer.style.display = "none" } } else { subCategoriesContainer.style.display = "none" } });
                // category.addEventListener("mouseleave", () => { hideAllSubCategories(); subCategoriesContainer.style.display = "none" })
            }); const menuContainer = document.querySelector(".menu-container"); if (menuContainer) { menuContainer.removeEventListener("mouseenter", () => { }); menuContainer.removeEventListener("mouseleave", () => { }) }
        }
    }
    hideAllSubCategories()
}); document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector('.collectionsItem'); const products = document.querySelectorAll('.collectionsProduct'); const container = document.querySelector('.collectionsItemIn'); const total = products.length; let current = 0; function getProductWidth() { return products[0].offsetWidth + 16 }
    function getProductsPerView() { const containerWidth = container.offsetWidth; const itemWidth = getProductWidth(); return Math.max(1, Math.floor(containerWidth / itemWidth)) }
    function slideCurrent() {
        const productWidth = getProductWidth();
        slider.style.transform = `translateX(-${current * productWidth}px)`;
    }
    function slide(direction) {
        const productWidth = getProductWidth();
        const perView = getProductsPerView();
        const maxIndex = Math.max(0, Math.ceil(total - perView));
        if (direction === 'next') {
            current = current >= maxIndex ? 0 : current + 1;
        } else {
            current = current <= 0 ? maxIndex : current - 1;
        }
        slider.style.transform = `translateX(-${current * productWidth}px)`;
    }
    window.addEventListener('resize', slideCurrent); window.addEventListener('load', slideCurrent)
}); let menuHoverInitialized = !1; function initDesktopMenu() {
    if (menuHoverInitialized || window.innerWidth <= 991) return; const mainCategories = document.querySelectorAll(".main-category"); const subCategoriesContainer = document.querySelector(".sub-categories-container"); const allSubCategories = document.querySelectorAll(".sub-categories"); function hideAllSubCategories() { allSubCategories.forEach((sub) => sub.classList.remove("active")) }
    mainCategories.forEach((category) => { category.addEventListener("mouseenter", function () { const type = this.getAttribute("data-category"); hideAllSubCategories(); if (type) { const target = document.querySelector(`.sub-categories[data-category-content="${type}"]`); if (target) { subCategoriesContainer.style.display = "block"; target.classList.add("active") } else { subCategoriesContainer.style.display = "none" } } else { subCategoriesContainer.style.display = "none" } }) }); const menuContainer = document.querySelector(".menu-container"); if (menuContainer) { menuContainer.addEventListener("mouseleave", () => { hideAllSubCategories(); subCategoriesContainer.style.display = "none" }) }
    menuHoverInitialized = !0
}
document.addEventListener("DOMContentLoaded", () => { initDesktopMenu() }); window.addEventListener("resize", () => { if (window.innerWidth > 991 && !menuHoverInitialized) { initDesktopMenu() } }); const imgContainer = document.querySelector(".aspect-ratio-169"); const dots = document.querySelectorAll(".dot"); let currentIndex = 0; const slideCount = document.querySelectorAll(".aspect-ratio-169 img").length; const slideInterval = 5000; let slideTimer; function goToSlide(index) {
    if (index < 0) index = slideCount - 1; if (index >= slideCount) index = 0; currentIndex = index; imgContainer.style.transform = `translateX(-${currentIndex * 33.3333
        }%)`; dots.forEach((dot, i) => { dot.classList.toggle("active", i === currentIndex) }); resetTimer()
}
function nextSlide() { goToSlide(currentIndex + 1) }
function resetTimer() { clearInterval(slideTimer); slideTimer = setInterval(nextSlide, slideInterval) }
dots.forEach((dot) => { dot.addEventListener("click", function () { const index = parseInt(this.getAttribute("data-index")); goToSlide(index) }) }); resetTimer(); imgContainer.parentElement.addEventListener("mouseenter", () => { clearInterval(slideTimer) }); imgContainer.parentElement.addEventListener("mouseleave", resetTimer); function toggleMenu() { const menuOverlay = document.getElementById("menuOverlay"); const backdrop = document.getElementById("backdrop"); menuOverlay.classList.toggle("active"); backdrop.classList.toggle("active") }
function toggleSubMenu() { const subMenu = document.getElementById("subMenu"); subMenu.classList.toggle("active") }
function closeAll() { const menuOverlay = document.getElementById("menuOverlay"); const subMenu = document.getElementById("subMenu"); const backdrop = document.getElementById("backdrop"); menuOverlay.classList.remove("active"); subMenu.classList.remove("active"); backdrop.classList.remove("active") }
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".collectionsItem");
    const container = document.querySelector(".collectionsItemIn");
    const products = document.querySelectorAll(".collectionsProduct");

    let current = 0;

    function getProductWidth() {
        return products[0].getBoundingClientRect().width + 16;
    }

    function getProductsPerView() {
        const containerWidth = container.getBoundingClientRect().width;
        const itemWidth = getProductWidth();
        return Math.max(1, Math.floor(containerWidth / itemWidth));
    }

    function slideToCurrent() {
        const productWidth = getProductWidth();
        slider.style.transform = `translateX(-${current * productWidth}px)`;
    }

    function slide(direction) {
        const perView = getProductsPerView();
        const maxIndex = Math.max(0, Math.ceil(products.length / perView) - 1);

        if (direction === "next") {
            current = current >= maxIndex ? 0 : current + 1;
        } else {
            current = current <= 0 ? maxIndex : current - 1;
        }

        slideToCurrent();
    }

    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    if (nextBtn) nextBtn.addEventListener("click", () => slide("next"));
    if (prevBtn) prevBtn.addEventListener("click", () => slide("prev"));

    window.addEventListener("resize", () => {
        const perView = getProductsPerView();
        const maxIndex = Math.max(0, Math.ceil(products.length / perView) - 1);
        current = Math.min(current, maxIndex);
        slideToCurrent();
    });

    slideToCurrent();
});
window.addEventListener('resize', () => {
    if (!products || products.length === 0) return;
    const perView = getProductsPerView();
    const maxIndex = Math.max(0, Math.ceil(products.length / perView) - 1);
    if (current > maxIndex) current = maxIndex;
    slideToCurrent();
});
function setupSelector(selectorId) { const select = document.getElementById(selectorId); const labelSpan = select.querySelector(".label"); const radios = select.querySelectorAll('input[type="radio"]'); radios.forEach((radio) => { radio.addEventListener("change", () => { const lbl = select.querySelector(`label[for="${radio.id}"]`); labelSpan.textContent = lbl.getAttribute("data-txt") }) }) }
setupSelector("lang-select"); setupSelector("cur-select"); document.addEventListener("DOMContentLoaded", function () { const links = document.querySelectorAll('a[href^="#"]'); links.forEach(link => { link.addEventListener("click", function (e) { const target = document.querySelector(this.getAttribute("href")); if (target) { e.preventDefault(); target.scrollIntoView({ behavior: "smooth" }) } }) }) }); document.addEventListener("DOMContentLoaded", function () { const faders = document.querySelectorAll(".fade-in"); const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }; const appearOnScroll = new IntersectionObserver(function (entries, observer) { entries.forEach(entry => { if (!entry.isIntersecting) return; entry.target.classList.add("visible"); observer.unobserve(entry.target) }) }, appearOptions); faders.forEach(fader => { appearOnScroll.observe(fader) }) }); document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll('img.lazyload'); const lazyLoad = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target; const src = img.getAttribute('data-src'); if (src) { img.setAttribute('src', src) }
                img.classList.remove('lazyload'); observer.unobserve(img)
            }
        })
    }; const observer = new IntersectionObserver(lazyLoad, { rootMargin: '100px', threshold: 0.1 }); lazyImages.forEach(img => { observer.observe(img) })
})
let lastScrollY = window.scrollY;
const header = document.getElementById("main-header");

window.addEventListener("scroll", () => {
    if (!header) return;
    if (window.scrollY > lastScrollY) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }
    lastScrollY = window.scrollY;
});
window.slideImages = (function () {
    const slider = document.querySelector(".collectionsItem");
    const container = document.querySelector(".collectionsItemIn");
    const products = document.querySelectorAll(".collectionsProduct");

    let current = 0;

    function getProductWidth() {
        return products[0]?.getBoundingClientRect().width + 16 || 0;
    }

    function getProductsPerView() {
        const containerWidth = container?.getBoundingClientRect().width || 0;
        const itemWidth = getProductWidth();
        return itemWidth ? Math.max(1, Math.floor(containerWidth / itemWidth)) : 1;
    }

    function slideToCurrent() {
        const productWidth = getProductWidth();
        if (slider) {
            slider.style.transform = `translateX(-${current * productWidth}px)`;
        }
    }

    return function (direction) {
        const perView = getProductsPerView();
        const maxIndex = Math.max(0, Math.ceil(products.length / perView) - 1);
        if (direction === "next") {
            current = current >= maxIndex ? 0 : current + 1;
        } else {
            current = current <= 0 ? maxIndex : current - 1;
        }
        slideToCurrent();
    };
})();
