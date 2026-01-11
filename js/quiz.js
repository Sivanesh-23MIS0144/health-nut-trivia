/* ========================================
   MODULE 3: QUIZ & RIDDLE LOGIC
   Developer: Person A
   Purpose: Quiz questions, riddle challenges, scoring system
   File: js/quiz.js
   ======================================== */

// Quiz State
let currentQuizQuestion = 0;
let currentRiddle = 0;
let quizScore = 0;
let riddleScore = 0;
let quizAnswers = [];
let riddleAnswers = [];
let isSubmitting = false; // Prevent multiple submissions

/* ========================================
   QUIZ FUNCTIONS
   ======================================== */

/**
 * Displays current quiz question
 */
function showQuestion() {
    const quizData = getQuizQuestions(); // From Module 4
    
    if (currentQuizQuestion >= quizData.length) {
        finishQuiz();
        return;
    }

    const question = quizData[currentQuizQuestion];
    const container = document.getElementById('questionContainer');
    
    if (!container) {
        console.error('Question container not found');
        return;
    }
    
    container.innerHTML = `
        <div class="question">
            <h3>Question ${currentQuizQuestion + 1} of ${quizData.length}</h3>
            <p>${question.question}</p>
            <div class="options">
                ${question.options.map((option, index) => 
                    `<div class="option" onclick="selectAnswer(${index})">${option}</div>`
                ).join('')}
            </div>
        </div>
    `;

    updateQuizProgress();
    
    const nextBtn = document.getElementById('nextBtn');
    const finishQuizBtn = document.getElementById('finishQuizBtn');
    
    if (nextBtn) nextBtn.style.display = 'block';
    if (finishQuizBtn) {
        finishQuizBtn.style.display = currentQuizQuestion === quizData.length - 1 ? 'block' : 'none';
    }
}

/**
 * Handles answer selection
 * @param {number} selectedIndex - Index of selected answer
 */
function selectAnswer(selectedIndex) {
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    if (options[selectedIndex]) {
        options[selectedIndex].classList.add('selected');
    }
    
    const quizData = getQuizQuestions();
    
    // Store answer (always move to next regardless of correctness)
    quizAnswers[currentQuizQuestion] = selectedIndex;
    
    // Check if correct for scoring
    if (selectedIndex === quizData[currentQuizQuestion].correct) {
        quizScore++;
    }
}

/**
 * Moves to next question
 */
function nextQuestion() {
    // If no answer selected, store -1 (unanswered)
    if (quizAnswers[currentQuizQuestion] === undefined) {
        quizAnswers[currentQuizQuestion] = -1;
    }
    
    currentQuizQuestion++;
    showQuestion();
}

/**
 * Updates quiz progress bar
 */
function updateQuizProgress() {
    const quizData = getQuizQuestions();
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        const progress = ((currentQuizQuestion + 1) / quizData.length) * 100;
        progressBar.style.width = progress + '%';
    }
}

/**
 * Finishes quiz and moves to riddles
 */
function finishQuiz() {
    const quizPage = document.getElementById('quizPage');
    const riddlePage = document.getElementById('riddlePage');

    if (quizPage) quizPage.classList.remove('active');
    if (riddlePage) riddlePage.classList.add('active');
    
    // Update user info (from Module 2)
    if (typeof updateUserStatus === 'function') {
        updateUserStatus('Riddles in Progress');
    }
    
    showRiddle();
}

/* ========================================
   RIDDLE FUNCTIONS
   ======================================== */

/**
 * Displays current riddle
 */
function showRiddle() {
    const riddleData = getRiddles(); // From Module 4
    
    if (currentRiddle >= riddleData.length) {
        finishRiddles();
        return;
    }

    const riddle = riddleData[currentRiddle];
    const container = document.getElementById('riddleContainer');
    
    if (!container) {
        console.error('Riddle container not found');
        return;
    }
    
    container.innerHTML = `
        <div class="riddle">
            <h3>Riddle ${currentRiddle + 1} of ${riddleData.length}</h3>
            <p class="riddle-text">${riddle.question}</p>
            <input type="text" id="riddleAnswer" placeholder="Type your answer here..." />
            <div class="riddle-error" id="riddleError"></div>
        </div>
    `;

    updateRiddleProgress();
    
    const submitRiddleBtn = document.getElementById('submitRiddleBtn');
    const nextRiddleBtn = document.getElementById('nextRiddleBtn');
    const finishRiddleBtn = document.getElementById('finishRiddleBtn');
    
    if (submitRiddleBtn) submitRiddleBtn.style.display = 'block';
    if (nextRiddleBtn) nextRiddleBtn.style.display = 'none';
    if (finishRiddleBtn) finishRiddleBtn.style.display = 'none';
}

/**
 * Submits riddle answer
 */
function submitRiddle() {
    const riddleAnswerInput = document.getElementById('riddleAnswer');
    if (!riddleAnswerInput) {
        console.error('Riddle answer input not found');
        return;
    }

    const answer = riddleAnswerInput.value.trim().toLowerCase();
    const riddleData = getRiddles();
    const riddle = riddleData[currentRiddle];
    
    // Always allow moving to next riddle
    riddleAnswers[currentRiddle] = answer;
    
    // Check if answer is correct for scoring
    const isCorrect = answer === riddle.answer.toLowerCase() || 
                     riddle.alternatives.some(alt => alt.toLowerCase() === answer);
    
    if (isCorrect) {
        riddleScore++;
    }
    
    // Show next/finish button
    const submitRiddleBtn = document.getElementById('submitRiddleBtn');
    const nextRiddleBtn = document.getElementById('nextRiddleBtn');
    const finishRiddleBtn = document.getElementById('finishRiddleBtn');
    
    if (submitRiddleBtn) submitRiddleBtn.style.display = 'none';
    if (nextRiddleBtn) nextRiddleBtn.style.display = currentRiddle < riddleData.length - 1 ? 'block' : 'none';
    if (finishRiddleBtn) finishRiddleBtn.style.display = currentRiddle === riddleData.length - 1 ? 'block' : 'none';
}

/**
 * Moves to next riddle
 */
function nextRiddle() {
    currentRiddle++;
    showRiddle();
}

/**
 * Updates riddle progress bar
 */
function updateRiddleProgress() {
    const riddleData = getRiddles();
    const riddleProgressBar = document.getElementById('riddleProgressBar');
    if (riddleProgressBar) {
        const progress = ((currentRiddle + 1) / riddleData.length) * 100;
        riddleProgressBar.style.width = progress + '%';
    }
}

/**
 * Finishes riddles and shows final page
 */
function finishRiddles() {
    // Stop timer (from Module 2)
    if (typeof timerInterval !== 'undefined' && timerInterval) {
        clearInterval(timerInterval);
    }
    
    const timerDisplay = document.getElementById('timerDisplay');
    if (timerDisplay) {
        timerDisplay.classList.remove('show');
    }
    
    const riddlePage = document.getElementById('riddlePage');
    const finalPage = document.getElementById('finalPage');

    if (riddlePage) riddlePage.classList.remove('active');
    if (finalPage) finalPage.classList.add('active');
    
    // Update user info (from Module 2)
    if (typeof updateUserStatus === 'function') {
        updateUserStatus('Challenge Complete!');
    }
    
    showFinalScore();
    submitFinalAnswers();
}

/**
 * Displays final score
 */
function showFinalScore() {
    const finalQuizScore = document.getElementById('finalQuizScore');
    const finalRiddleScore = document.getElementById('finalRiddleScore');
    const totalScore = document.getElementById('totalScore');

    if (finalQuizScore) finalQuizScore.textContent = quizScore;
    if (finalRiddleScore) finalRiddleScore.textContent = riddleScore;
    if (totalScore) totalScore.textContent = quizScore + riddleScore;
}

/* ========================================
   DATA SUBMISSION
   ======================================== */

/**
 * Submits final answers to Google Sheets
 */
async function submitFinalAnswers() {
    if (isSubmitting) {
        console.log('Already submitting, skipping...');
        return;
    }
    
    isSubmitting = true;
    
    try {
        const userData = typeof getCurrentUser === 'function' ? getCurrentUser() : {};
        const timeSpent = typeof getTimeSpent === 'function' ? getTimeSpent() : 0;
        
        const data = {
            timestamp: new Date().toISOString(),
            name: userData.name || '',
            email: userData.email || '',
            phone: userData.phone || '',
            registration: userData.registration || '',
            belongs: userData.belongs || '',
            quizScore: quizScore,
            riddleScore: riddleScore,
            totalScore: quizScore + riddleScore,
            timeSpent: timeSpent,
            quizAnswers: JSON.stringify(quizAnswers),
            riddleAnswers: JSON.stringify(riddleAnswers)
        };

        // Submit data (from Module 4)
        if (typeof submitToGoogleSheets === 'function') {
            await submitToGoogleSheets(data);
        }
        
    } catch (error) {
        console.error('Error submitting data:', error);
    } finally {
        isSubmitting = false;
    }
}

/* ========================================
   QUIZ RESTART
   ======================================== */

/**
 * Restarts the entire quiz
 */
function restartQuiz() {
    // Reset all quiz variables
    currentQuizQuestion = 0;
    currentRiddle = 0;
    quizScore = 0;
    riddleScore = 0;
    quizAnswers = [];
    riddleAnswers = [];
    isSubmitting = false;
    
    // Reset authentication state (from Module 2)
    if (typeof resetAuthState === 'function') {
        resetAuthState();
    }
    
    // Show login page
    const finalPage = document.getElementById('finalPage');
    const loginPage = document.getElementById('loginPage');
    
    if (finalPage) finalPage.classList.remove('active');
    if (loginPage) loginPage.classList.add('active');
}

/* ========================================
   EVENT LISTENERS INITIALIZATION
   ======================================== */

/**
 * Initialize quiz module
 */
function initializeQuiz() {
    // Quiz navigation buttons
    const nextBtn = document.getElementById('nextBtn');
    const finishQuizBtn = document.getElementById('finishQuizBtn');
    const submitRiddleBtn = document.getElementById('submitRiddleBtn');
    const nextRiddleBtn = document.getElementById('nextRiddleBtn');
    const finishRiddleBtn = document.getElementById('finishRiddleBtn');

    if (nextBtn) nextBtn.addEventListener('click', nextQuestion);
    if (finishQuizBtn) finishQuizBtn.addEventListener('click', finishQuiz);
    if (submitRiddleBtn) submitRiddleBtn.addEventListener('click', submitRiddle);
    if (nextRiddleBtn) nextRiddleBtn.addEventListener('click', nextRiddle);
    if (finishRiddleBtn) finishRiddleBtn.addEventListener('click', finishRiddles);

    // Handle Enter key for riddle input
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const riddlePage = document.getElementById('riddlePage');
            if (riddlePage && riddlePage.classList.contains('active')) {
                const submitBtn = document.getElementById('submitRiddleBtn');
                const nextBtn = document.getElementById('nextRiddleBtn');
                const finishBtn = document.getElementById('finishRiddleBtn');
                
                if (submitBtn && submitBtn.style.display !== 'none') {
                    submitRiddle();
                } else if (nextBtn && nextBtn.style.display !== 'none') {
                    nextRiddle();
                } else if (finishBtn && finishBtn.style.display !== 'none') {
                    finishRiddles();
                }
            }
        }
    });
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeQuiz);
} else {
    initializeQuiz();
}

// Make restartQuiz available globally
window.restartQuiz = restartQuiz;