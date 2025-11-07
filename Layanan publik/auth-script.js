document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('login-password') || document.getElementById('register-password');
    const toggleIcon = document.getElementById('toggle-password');

    if (passwordInput && toggleIcon) {
        
        toggleIcon.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            if (type === 'password') {
                toggleIcon.classList.remove('fa-eye-slash');
                toggleIcon.classList.add('fa-eye');
            } else {
                toggleIcon.classList.remove('fa-eye');
                toggleIcon.classList.add('fa-eye-slash');
            }
        });
    }

    const loginFormPage = document.getElementById('login-form-page');

    if (loginFormPage) {
        loginFormPage.addEventListener('submit', function(e) {

            e.preventDefault();

            localStorage.setItem('userLoggedIn', 'true');
 
            window.location.href = 'index.html';
        });
    }

}); 