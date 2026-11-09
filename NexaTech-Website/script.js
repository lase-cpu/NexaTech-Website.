
// ========================================
// NEXATECH SOLUTIONS - MAIN JAVASCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("NexaTech Solutions website loaded successfully!");

    // 1. AUTOMATIC COPYRIGHT YEAR
    const copyrightYear = document.getElementById("copyrightYear");

    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }

    // 2. MOBILE NAVIGATION
    const menuButton = document.getElementById("menuButton");
    const navigation = document.querySelector("nav");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", function () {
            navigation.classList.toggle("active");
        });
    }

    // 3. CONTACT FORM
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            alert("FORM SUBMISSION DETECTED!");

        });

    }

    // 4. BACK TO TOP BUTTON
    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        backToTop.style.display = "none";

        window.addEventListener("scroll", function () {

            if (window.scrollY > 300) {
                backToTop.style.display = "block";
            } else {
                backToTop.style.display = "none";
            }

        });

        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

    // 5. SMOOTH SCROLLING
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

});
