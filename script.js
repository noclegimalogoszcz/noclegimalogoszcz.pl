
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const id = this.getAttribute("href").substring(1);
            document.querySelectorAll(".page").forEach(page => page.style.display = "none");
            document.getElementById(id).style.display = "block";
        });
    });
});
