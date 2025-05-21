
function switchLanguage(lang) {
  fetch(lang + ".json")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("title").textContent = data.title;
      document.getElementById("desc").textContent = data.desc;
    });
}
