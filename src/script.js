// Função para alternar visibilidade da senha
function togglePasswordVisibility(inputId, buttonElement) {
    const passwordInput = document.getElementById(inputId);
    const eyeIcon = buttonElement.querySelector('svg');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        // Ícone de olho fechado (quando senha está visível)
        eyeIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
        `;
    } else {
        passwordInput.type = 'password';
        // Ícone de olho aberto (quando senha está oculta)
        eyeIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
        `;
    }
}

// Adicionar event listeners quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    // Botão do campo de senha
    const passwordToggle = document.querySelector('#password').nextElementSibling;
    passwordToggle.addEventListener('click', function() {
        togglePasswordVisibility('password', this);
    });

    // Botão do campo de confirmação de senha
    const confirmPasswordToggle = document.querySelector('#confirm_password').nextElementSibling;
    confirmPasswordToggle.addEventListener('click', function() {
        togglePasswordVisibility('confirm_password', this);
    });
});
