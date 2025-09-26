const hamburgerBtn = document.getElementById('hamburger-btn');
const mainMenu = document.getElementById('main-menu');

hamburgerBtn.addEventListener('click', () => {
    // Alterna a classe 'hidden'
    mainMenu.classList.toggle('hidden');
    
    // Configuração de acessibilidade (opcional, mas recomendado)
    const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true' || false;
    hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
});