document.addEventListener("DOMContentLoaded", function () {
    // Ustawianie daty
    const today = new Date();
    const dateString = today.toLocaleDateString('pl-PL', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById("current-date").textContent = dateString;

    // Nawigacja po sekcjach
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").replace("#", "");
            showPage(targetId);
        });
    });

    function showPage(id) {
        const pages = document.querySelectorAll(".page");
        pages.forEach(page => page.style.display = "none");

        const activePage = document.getElementById(id);
        if (activePage) activePage.style.display = "block";
    }

    showPage("strona-glowna");

    // Galeria – kliknięcie powiększa zdjęcie
    const galleryImages = document.querySelectorAll(".gallery img");
    galleryImages.forEach(img => {
        img.addEventListener("click", function () {
            const overlay = document.createElement("div");
            overlay.classList.add("overlay");

            const fullImg = document.createElement("img");
            fullImg.src = this.src;
            fullImg.alt = this.alt;
            fullImg.classList.add("zoomed");

            overlay.appendChild(fullImg);
            document.body.appendChild(overlay);

            overlay.addEventListener("click", function () {
                overlay.remove();
            });
        });
    });

    // Toggle języka PL/UA
    const toggle = document.getElementById("lang-toggle");
    if (toggle) {
        toggle.addEventListener("click", () => {
            const currentLang = document.documentElement.lang;
            if (currentLang === "pl") {
                document.documentElement.lang = "uk";
                location.href = "index-uk.html";
            } else {
                document.documentElement.lang = "pl";
                location.href = "index.html";
            }
        });
    }
});