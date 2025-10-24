document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('validationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmInput = document.getElementById('confirmPassword');
    const successMessage = document.getElementById('successMessage');

    // Real-time validation on blur
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    passwordInput.addEventListener('blur', validatePassword);
    confirmInput.addEventListener('blur', validateConfirmPassword);

    // Form submit validation
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            successMessage.textContent = 'Form submitted successfully!';
            successMessage.style.display = 'block';
            form.reset();
            setTimeout(() => successMessage.style.display = 'none', 3000);
        }
    });

    function validateName() {
        const error = document.getElementById('nameError');
        if (nameInput.value.trim() === '') {
            error.textContent = 'Name is required.';
            return false;
        } else {
            error.textContent = '';
            return true;
        }
    }

    function validateEmail() {
        const error = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            error.textContent = 'Please enter a valid email.';
            return false;
        } else {
            error.textContent = '';
            return true;
        }
    }

    function validatePassword() {
        const error = document.getElementById('passwordError');
        if (passwordInput.value.length < 6) {
            error.textContent = 'Password must be at least 6 characters.';
            return false;
        } else {
            error.textContent = '';
            return true;
        }
    }

    function validateConfirmPassword() {
        const error = document.getElementById('confirmError');
        if (confirmInput.value !== passwordInput.value) {
            error.textContent = 'Passwords do not match.';
            return false;
        } else {
            error.textContent = '';
            return true;
        }
    }

    function validateForm() {
        return validateName() && validateEmail() && validatePassword() && validateConfirmPassword();
    }
});
