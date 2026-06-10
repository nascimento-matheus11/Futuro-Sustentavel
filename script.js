function switchTab(tabId) {
    // 1. Ocultar todos os conteúdos das abas
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // 2. Remover a classe 'active' de todos os botões de navegação
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // 3. Mostrar o conteúdo da aba selecionada
    const activeContent = document.getElementById(tabId);
    if (activeContent) {
        activeContent.classList.add('active');
    }

    // 4. Adicionar a classe 'active' ao botão que foi clicado
    event.currentTarget.classList.add('active');
}