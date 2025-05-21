document.getElementById("currentDate").textContent = new Date().toLocaleDateString("pl-PL", {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

function changeLang(lang) {
    alert('Wersja językowa "' + lang + '" będzie dostępna wkrótce.');
}