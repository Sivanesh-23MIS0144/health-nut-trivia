/* ========================================
   MODULE 4: DATA MANAGEMENT
   Developer: Person B
   Purpose: Questions data, Google Sheets submission, storage
   File: js/data.js
   ======================================== */

// Google Sheets Configuration
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwk274pJi3YjkTVxzwqCYYKSFDgLnqLctVP83SRAPQLAHImq0nO67wge5WIxKJRAueR/exec';

/* ========================================
   QUIZ QUESTIONS DATA
   ======================================== */

const quizQuestions = [
    {
        question: "What is the main goal of World Food Safety Day?",
        options: [
            "Celebrate culinary diversity", 
            "Encourage food imports", 
            "Raise awareness about food safety and encourage actions to prevent foodborne risks", 
            "Promote fast food chains"
        ],
        correct: 2
    },
    {
        question: "Why is food safety considered a shared responsibility?",
        options: [
            "Only producers are responsible", 
            "It involves everyone from producers to consumers", 
            "Governments handle all aspects", 
            "Only consumers are responsible"
        ],
        correct: 1
    },
    {
        question: "Which of the following is a key call to action for World Food Safety Day?",
        options: [
            "Cook less to save energy", 
            "Avoid scientific methods", 
            "Ignore food labels", 
            "Team up for food safety"
        ],
        correct: 3
    },
    {
        question: "What is the theme for World Food Safety Day 2025?",
        options: [
            "Food standards save lives", 
            "Food safety: science in action", 
            "Prepare for the unexpected", 
            "Safer food, better health"
        ],
        correct: 1
    },
    {
        question: "Which organizations jointly facilitate World Food Safety Day?",
        options: [
            "FAO and WHO", 
            "FAO and UNICEF", 
            "UNESCO and WHO", 
            "UNICEF and WTO"
        ],
        correct: 0
    },
    {
        question: "Approximately how many people fall ill due to unsafe food each year?",
        options: [
            "800 million", 
            "600 million", 
            "200 million", 
            "400 million"
        ],
        correct: 1
    },
    {
        question: "Which of the following is NOT a key message of World Food Safety Day?",
        options: [
            "Grow it safe", 
            "Cook it fast", 
            "Keep it safe", 
            "Ensure it's safe"
        ],
        correct: 1
    },
    {
        question: "What is the slogan for World Food Safety Day?",
        options: [
            "Eat clean, stay healthy", 
            "Food safety is everyone's business", 
            "Safe food for all", 
            "Global food, global safety"
        ],
        correct: 1
    },
    {
        question: "What does \"World Food Safety Day\" emphasize?",
        options: [
            "Scientific approaches to food safety", 
            "Fast food consumption", 
            "Organic farming only", 
            "Traditional cooking methods"
        ],
        correct: 0
    },
    {
        question: "Which group is most vulnerable to foodborne illnesses?",
        options: [
            "Children under 5 and the elderly", 
            "Teenagers", 
            "Middle-aged adults", 
            "Athletes"
        ],
        correct: 0
    },
    {
        question: "What is a common cause of food contamination?",
        options: [
            "Using clean utensils", 
            "Cross-contamination", 
            "Washing hands before cooking", 
            "Proper refrigeration"
        ],
        correct: 1
    },
    {
        question: "Which practice helps in preventing foodborne diseases?",
        options: [
            "Washing hands before handling food", 
            "Eating raw meat", 
            "Leaving food at room temperature", 
            "Using expired ingredients"
        ],
        correct: 0
    },
    {
        question: "What temperature should refrigerators be maintained at?",
        options: [
            "10°C or below", 
            "4°C or below", 
            "15°C or below", 
            "Room temperature"
        ],
        correct: 1
    },
    {
        question: "How long can cooked food be safely left at room temperature?",
        options: [
            "4 hours", 
            "6 hours", 
            "2 hours", 
            "8 hours"
        ],
        correct: 2
    },
    {
        question: "Which of the following is a sign of food spoilage?",
        options: [
            "Pleasant aroma", 
            "Bright colors", 
            "Unusual smell or appearance", 
            "Firm texture"
        ],
        correct: 2
    }
];

/* ========================================
   RIDDLE QUESTIONS DATA
   ======================================== */

const riddles = [
    {
        question: "I protect your food from harmful bacteria, but I'm not a medicine. I'm cold and keep things fresh. What am I?",
        answer: "refrigerator",
        alternatives: ["fridge", "freezer", "icebox"]
    },
    {
        question: "I clean your hands before you cook, I'm bubbly and white. Without me, germs might make you sick. What am I?",
        answer: "soap",
        alternatives: ["handwash", "detergent", "cleanser"]
    },
    {
        question: "I'm a number that tells you if food is safe to eat. I'm usually found on packages. What am I?",
        answer: "expiry date",
        alternatives: ["expiration date", "best before date", "use by date", "date"]
    },
    {
        question: "I'm hot enough to kill germs in your food. I make raw things safe to eat. What am I?",
        answer: "cooking",
        alternatives: ["heat", "boiling", "fire", "temperature"]
    },
    {
        question: "I separate raw meat from other foods. I prevent cross-contamination. What am I?",
        answer: "cutting board",
        alternatives: ["chopping board", "separate board", "board"]
    },
    {
        question: "I'm measured in degrees and tell you if food is cooked safely. What am I?",
        answer: "temperature",
        alternatives: ["heat", "thermometer", "cooking temperature"]
    },
    {
        question: "I'm a tiny organism that can make you sick if I'm in your food. You can't see me without a microscope. What am I?",
        answer: "bacteria",
        alternatives: ["germs", "microbe", "virus", "pathogen"]
    },
    {
        question: "I'm the practice of keeping raw and cooked foods apart. I prevent contamination. What am I?",
        answer: "separation",
        alternatives: ["cross contamination prevention", "food separation", "keeping apart"]
    },
    {
        question: "I'm the first thing you should do before handling food. I involve water and soap. What am I?",
        answer: "washing hands",
        alternatives: ["hand washing", "clean hands", "wash hands", "handwashing"]
    },
    {
        question: "I'm a global event that happens every June 7th to raise awareness about food safety. What am I?",
        answer: "world food safety day",
        alternatives: ["food safety day", "world food day", "food safety awareness day"]
    }
];

/* ========================================
   DATA ACCESSOR FUNCTIONS
   ======================================== */

/**
 * Returns quiz questions data
 * @returns {Array} Array of quiz question objects
 */
function getQuizQuestions() {
    return quizQuestions;
}

/**
 * Returns riddle data
 * @returns {Array} Array of riddle objects
 */
function getRiddles() {
    return riddles;
}

/* ========================================
   GOOGLE SHEETS SUBMISSION
   ======================================== */

/**
 * Submits data to Google Sheets
 * @param {Object} data - Data object to submit
 */
async function submitToGoogleSheets(data) {
    try {
        console.log('Submitting data:', data);

        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'no-cors' // Required for Google Apps Script
        });

        console.log('Data submitted successfully');
        
    } catch (error) {
        console.error('Error submitting to Google Sheets:', error);
        
        // Try fallback submission method
        try {
            const fallbackData = new FormData();
            fallbackData.append('data', JSON.stringify(data));

            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                body: fallbackData,
                mode: 'no-cors'
            });

            console.log('Fallback submission successful');
        } catch (fallbackError) {
            console.error('Fallback submission also failed:', fallbackError);
            throw fallbackError;
        }
    }
}

/* ========================================
   LOCAL STORAGE HELPERS (Optional)
   ======================================== */

/**
 * Saves quiz progress to local storage
 * @param {Object} progressData - Progress data to save
 */
function saveProgressLocally(progressData) {
    try {
        localStorage.setItem('quizProgress', JSON.stringify(progressData));
        console.log('Progress saved locally');
    } catch (error) {
        console.error('Error saving progress locally:', error);
    }
}

/**
 * Loads quiz progress from local storage
 * @returns {Object|null} Progress data or null if not found
 */
function loadProgressLocally() {
    try {
        const data = localStorage.getItem('quizProgress');
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Error loading progress locally:', error);
        return null;
    }
}

/**
 * Clears local storage progress
 */
function clearProgressLocally() {
    try {
        localStorage.removeItem('quizProgress');
        console.log('Local progress cleared');
    } catch (error) {
        console.error('Error clearing local progress:', error);
    }
}

/* ========================================
   DATA VALIDATION
   ======================================== */

/**
 * Validates quiz data before submission
 * @param {Object} data - Data to validate
 * @returns {boolean} True if valid
 */
function validateQuizData(data) {
    const requiredFields = [
        'timestamp', 
        'name', 
        'email', 
        'phone', 
        'registration', 
        'belongs',
        'quizScore',
        'riddleScore',
        'totalScore'
    ];

    for (const field of requiredFields) {
        if (data[field] === undefined || data[field] === null || data[field] === '') {
            console.error(`Missing required field: ${field}`);
            return false;
        }
    }

    return true;
}

/* ========================================
   STATISTICS & ANALYTICS
   ======================================== */

/**
 * Calculates statistics from quiz data
 * @param {number} quizScore - Quiz score
 * @param {number} riddleScore - Riddle score
 * @returns {Object} Statistics object
 */
function calculateStatistics(quizScore, riddleScore) {
    const totalQuestions = quizQuestions.length;
    const totalRiddles = riddles.length;
    const totalPossible = totalQuestions + totalRiddles;
    const totalScore = quizScore + riddleScore;
    
    return {
        quizPercentage: Math.round((quizScore / totalQuestions) * 100),
        riddlePercentage: Math.round((riddleScore / totalRiddles) * 100),
        overallPercentage: Math.round((totalScore / totalPossible) * 100),
        grade: getGrade(totalScore, totalPossible)
    };
}

/**
 * Determines grade based on score
 * @param {number} score - Total score
 * @param {number} total - Total possible score
 * @returns {string} Grade letter
 */
function getGrade(score, total) {
    const percentage = (score / total) * 100;
    
    if (percentage >= 90) return 'A';
    if (percentage >= 80) return 'B';
    if (percentage >= 70) return 'C';
    if (percentage >= 60) return 'D';
    return 'F';
}

/* ========================================
   EXPORT FUNCTIONS
   ======================================== */

// Make functions available globally for other modules
window.getQuizQuestions = getQuizQuestions;

window.getRiddles = getRiddles;
window.submitToGoogleSheets = submitToGoogleSheets;
window.calculateStatistics = calculateStatistics;
window.validateQuizData = validateQuizData;
window.saveProgressLocally = saveProgressLocally;
window.loadProgressLocally = loadProgressLocally;
window.clearProgressLocally = clearProgressLocally;