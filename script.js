// Ustawianie aktualnej daty na stronie głównej
document.addEventListener("DOMContentLoaded", function () {
    const today = new Date();
    const dateString = today.toLocaleDateString('pl-PL', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById("current-date").textContent = dateString;

    // Obsługa przekierowania tagów na stronę główną
    if (window.location.hash === "#tagi") {
        showPage("strona-glowna");
    }

    // Obsługa nawigacji
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

    // Domyślnie pokazujemy stronę główną
    showPage("strona-glowna");
});