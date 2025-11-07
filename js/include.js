document.addEventListener("DOMContentLoaded", () => {
    // Carrega la capçalera
    fetch("/components/header.html")
        .then(response => response.text())
        .then(data => {
        document.querySelector("header").innerHTML = data;
        });

    // Carrega el peu de pàgina
    fetch("/components/footer.html")
        .then(response => response.text())
        .then(data => {
        document.querySelector("footer").innerHTML = data;
        });
});