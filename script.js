document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mainMenu = document.getElementById('main-menu');

    // Verifica se os elementos foram encontrados
    if (hamburgerBtn && mainMenu) {
        hamburgerBtn.addEventListener('click', function() {
            mainMenu.classList.toggle('show-menu');

            const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true' || false;
            hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
        });

        const menuLinks = mainMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (mainMenu.classList.contains('show-menu')) {
                    mainMenu.classList.remove('show-menu');
                    hamburgerBtn.setAttribute('aria-expanded', 'false');
                }
            });
        });
    } else {
        console.error("Erro: Elementos 'hamburger-btn' ou 'main-menu' não encontrados no DOM.");
    }
});