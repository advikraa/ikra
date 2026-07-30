// ======================
// Mobile Menu
// ======================

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menu && nav) {
    menu.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

// ======================
// Scroll To Top
// ======================

const topBtn = document.querySelector(".scroll-top");

if (topBtn) {
    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {
            topBtn.classList.add("show");
        } else {
            topBtn.classList.remove("show");
        }

    });
}

// ======================
// Counter Animation
// ======================

const counters = document.querySelectorAll(".counter");

if (counters.length > 0) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const counter = entry.target;

                const target = Number(counter.dataset.target);
                const suffix = counter.dataset.suffix || "";

                let current = 0;
                const step = Math.max(1, Math.ceil(target / 100));

                function updateCounter() {

                    current += step;

                    if (current < target) {

                        counter.textContent = current + suffix;
                        requestAnimationFrame(updateCounter);

                    } else {

                        counter.textContent = target + suffix;

                    }

                }

                updateCounter();
                observer.unobserve(counter);

            }

        });

    });

    counters.forEach(counter => observer.observe(counter));

}



// ======================
// EmailJS Contact Form
// ======================

emailjs.init({
    publicKey: "_U9ZlKq8h-5-IMELy"
});


const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.sendForm(
            "service_4z551gs",
            "template_j7ytvkd",
            this
        )
        .then(() => {

            alert("تم إرسال الرسالة بنجاح ✅");
            contactForm.reset();

        })
        .catch((error) => {

            console.error(error);
            alert("حدث خطأ أثناء الإرسال:\n" + (error.text || JSON.stringify(error)));

        });

    });

}
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});
topBtn.addEventListener("click", e => {
    e.preventDefault();

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

new Swiper(".portfolioSwiper",{
 loop:true,
 autoplay:false,
 allowTouchMove:false,
 slidesPerView:5,
spaceBetween: 5,
 navigation:{nextEl:".portfolio-next",prevEl:".portfolio-prev"},
 breakpoints:{0:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:4}}
});

new Swiper(".partnersSwiper",{
 loop:true,
 autoplay:false,
 allowTouchMove:false,
 slidesPerView:5,
 spaceBetween:40,
 navigation:{nextEl:".partners-next",prevEl:".partners-prev"},
 breakpoints:{0:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:5}}
});
