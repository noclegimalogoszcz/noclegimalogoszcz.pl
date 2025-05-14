document.addEventListener("DOMContentLoaded", function () {
    const today = new Date();
    const dateString = today.toLocaleDateString('pl-PL', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById("current-date").textContent = dateString;

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

    showPage("home");

    const galleryImages = document.querySelectorAll(".gallery img");
    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            const popup = document.createElement("div");
            popup.style.position = "fixed";
            popup.style.top = "0";
            popup.style.left = "0";
            popup.style.width = "100vw";
            popup.style.height = "100vh";
            popup.style.backgroundColor = "rgba(0,0,0,0.8)";
            popup.style.display = "flex";
            popup.style.justifyContent = "center";
            popup.style.alignItems = "center";
            popup.style.zIndex = "9999";
            popup.innerHTML = `<img src="${img.src}" style="max-width:90%; max-height:90%;">`;
            popup.addEventListener("click", () => document.body.removeChild(popup));
            document.body.appendChild(popup);
        });
    });
});