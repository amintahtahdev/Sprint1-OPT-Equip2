// Espera que tot el contingut del DOM estigui carregat abans d'executar el codi
document.addEventListener("DOMContentLoaded", () => {

    // ========================================
    // Carrega la capçalera des d'un fitxer extern
    // ========================================
    fetch("/components/header.html")                // Demana el fitxer header.html
        .then(response => response.text())         // Converteix la resposta a text
        .then(data => {
            document.querySelector("header").innerHTML = data;  // Inserta el contingut dins l'etiqueta <header>
        });

    // ========================================
    // Carrega el peu de pàgina des d'un fitxer extern
    // ========================================
    fetch("/components/footer.html")                // Demana el fitxer footer.html
        .then(response => response.text())         // Converteix la resposta a text
        .then(data => {
            document.querySelector("footer").innerHTML = data;  // Inserta el contingut dins l'etiqueta <footer>
        });

});
