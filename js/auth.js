/* ========================================
   MODULE 2: AUTHENTICATION & TIMER
   Developer: Person B
   Purpose: Login validation, timer functionality, user session
   File: js/auth.js
   ======================================== */

// Configuration Constants
const TOTAL_TIME_MINUTES = 25;

// Session State
let timerInterval = null;
let timeRemaining = TOTAL_TIME_MINUTES * 60; // in seconds
let quizStartTime = null;
let currentUser = {};

/* ========================================
   TIMER FUNCTIONS
   ======================================== */

/**
 * Starts the quiz timer
 */
function startTimer() {
    quizStartTime = Date.now();
    updateTimerDisplay();
    
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        
        if (timeRemaining <= 0) {
            handleTimeExpired();
        }
    }, 1000);
}

/**
 * Updates the timer display with current time
 */
function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    const timerDisplay = document.getElementById('timerDisplay');
    const timerText = document.getElementById('timerText');
    
    if (timerDisplay && timerText) {
        timerText.textContent = `⏰ ${timeString}`;
        
        // Show timer and add warning/danger classes
        if (timeRemaining > 0) {
            timerDisplay.classList.add('show');
            
            if (timeRemaining <= 60) { // Last minute
                timerDisplay.classList.add('danger');
                timerDisplay.classList.remove('warning');
            } else if (timeRemaining <= 300) { // Last 5 minutes
                timerDisplay.classList.add('warning');
                timerDisplay.classList.remove('danger');
            } else {
                timerDisplay.classList.remove('warning', 'danger');
            }
        }
    }
}

/**
 * Handles timer expiration
 */
function handleTimeExpired() {
    clearInterval(timerInterval);
    const timeExpiredModal = document.getElementById('timeExpiredModal');
    if (timeExpiredModal) {
        timeExpiredModal.style.display = 'flex';
    }
    
    // Auto-submit current answers and finish
    // This function is from Module 3
    if (typeof submitFinalAnswers === 'function') {
        submitFinalAnswers();
    }
}

/**
 * Global function for time expired modal OK button
 */
window.handleTimeExpiredOK = function() {
    const timeExpiredModal = document.getElementById('timeExpiredModal');
    if (timeExpiredModal) {
        timeExpiredModal.style.display = 'none';
    }
    // This function is from Module 3
    if (typeof finishRiddles === 'function') {
        finishRiddles();
    }
};

/* ========================================
   LOGIN VALIDATION FUNCTIONS
   ======================================== */

/**
 * Validates the entire login form
 * @returns {boolean} True if form is valid
 */
function validateForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const registration = document.getElementById('registration');
    const belongs = document.getElementById('belongs');

    if (!name || !email || !phone || !registration || !belongs) {
        console.error('Form elements not found');
        return false;
    }

    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const registrationValue = registration.value.trim();
    const belongsValue = belongs.value;

    clearErrors();

    let isValid = true;

    if (!nameValue) {
        showError('nameError', 'Name is required');
        isValid = false;
    }

    if (!emailValue || !isValidEmail(emailValue)) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
    }

    if (!phoneValue || !isValidPhone(phoneValue)) {
        showError('phoneError', 'Please enter a valid 10-digit phone number');
        isValid = false;
    }

    if (!registrationValue) {
        showError('registrationError', 'Registration number is required');
        isValid = false;
    }

    if (!belongsValue) {
        showError('belongsError', 'Please select your group');
        isValid = false;
    }

    return isValid;
}

/**
 * Validates email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email
 */
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Validates phone number (10 digits)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if valid phone
 */
function isValidPhone(phone) {
    return /^\d{10}$/.test(phone.replace(/\D/g, ''));
}

/**
 * Displays error message for a form field
 * @param {string} elementId - ID of error element
 * @param {string} message - Error message to display
 */
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

/**
 * Clears all error messages
 */
function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => element.textContent = '');
}

/* ========================================
   USER SESSION MANAGEMENT
   ======================================== */

/**
 * Starts the quiz after successful login
 */
function startQuiz() {
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const phoneElement = document.getElementById('phone');
    const registrationElement = document.getElementById('registration');
    const belongsElement = document.getElementById('belongs');

    if (!nameElement || !emailElement || !phoneElement || !registrationElement || !belongsElement) {
        alert('Form elements not found. Please refresh the page.');
        return;
    }

    // Store user data
    currentUser = {
        name: nameElement.value.trim(),
        email: emailElement.value.trim(),
        phone: phoneElement.value.trim(),
        registration: registrationElement.value.trim(),
        belongs: belongsElement.value
    };

    // Display user info in corners
    updateUserInfoDisplay();

    // Switch pages
    const loginPage = document.getElementById('loginPage');
    const quizPage = document.getElementById('quizPage');

    if (loginPage) loginPage.classList.remove('active');
    if (quizPage) quizPage.classList.add('active');
    
    // Start the timer
    startTimer();
    
    // Show first question (from Module 3)
    if (typeof showQuestion === 'function') {
        showQuestion();
    }
}

/**
 * Updates user information display in header corners
 */
function updateUserInfoDisplay() {
    const userInfoLeft = document.getElementById('userInfoLeft');
    const userInfoRight = document.getElementById('userInfoRight');
    const topLeftLogin = document.getElementById('topLeftLogin');
    const topRightLogin = document.getElementById('topRightLogin');

    if (userInfoLeft) {
        userInfoLeft.innerHTML = `<strong>${currentUser.name}</strong><br>${currentUser.registration}`;
    }
    if (userInfoRight) {
        userInfoRight.innerHTML = `<strong>${currentUser.belongs}</strong><br>Quiz in Progress`;
    }
    if (topLeftLogin) {
        topLeftLogin.classList.add('show');
    }
    if (topRightLogin) {
        topRightLogin.classList.add('show');
    }
}

/**
 * Updates user status in header (called from Module 3)
 * @param {string} status - Status message to display
 */
function updateUserStatus(status) {
    const userInfoRight = document.getElementById('userInfoRight');
    if (userInfoRight && currentUser.belongs) {
        userInfoRight.innerHTML = `<strong>${currentUser.belongs}</strong><br>${status}`;
    }
}

/**
 * Hides user information display
 */
function hideUserInfoDisplay() {
    const topLeftLogin = document.getElementById('topLeftLogin');
    const topRightLogin = document.getElementById('topRightLogin');
    const timerDisplay = document.getElementById('timerDisplay');
    
    if (topLeftLogin) topLeftLogin.classList.remove('show');
    if (topRightLogin) topRightLogin.classList.remove('show');
    if (timerDisplay) timerDisplay.classList.remove('show');
}

/**
 * Gets current user data
 * @returns {object} Current user object
 */
function getCurrentUser() {
    return currentUser;
}

/**
 * Gets time spent on quiz in seconds
 * @returns {number} Time spent in seconds
 */
function getTimeSpent() {
    if (!quizStartTime) return 0;
    const endTime = Date.now();
    return Math.round((endTime - quizStartTime) / 1000);
}

/**
 * Resets authentication state
 */
function resetAuthState() {
    currentUser = {};
    timeRemaining = TOTAL_TIME_MINUTES * 60;
    quizStartTime = null;
    
    // Clear timer
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    
    // Hide user info
    hideUserInfoDisplay();
    
    // Reset form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.reset();
    }
    clearErrors();
}

/* ========================================
   EVENT LISTENERS INITIALIZATION
   ======================================== */

/**
 * Initialize authentication module
 */
function initializeAuth() {
    // Login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm()) {
                startQuiz();
            }
        });
    }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAuth);
} else {
    initializeAuth();
}