# 🏥 Health Trivia Educational Quiz

A comprehensive web-based quiz application for **World Food Safety Day** education, featuring timed quizzes, riddles, and automated data submission to Google Sheets.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-Educational-orange.svg)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Modules](#-modules)
- [Getting Started](#-getting-started)
- [Installation](#-installation)
- [Usage](#-usage)
- [GitHub Collaboration](#-github-collaboration)
- [Module Development](#-module-development)
- [Google Sheets Setup](#-google-sheets-setup)
- [Testing](#-testing)
- [Browser Support](#-browser-support)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [Authors](#-authors)
- [License](#-license)

---

## 🎯 Overview

This project is built as a **collaborative effort** with **modular architecture** to enable multiple developers to work simultaneously on different features without conflicts.

### Key Statistics
- **Total Questions:** 15 Quiz Questions
- **Total Riddles:** 10 Riddle Challenges
- **Time Limit:** 25 minutes
- **Maximum Score:** 25 points (15 quiz + 10 riddles)
- **Data Storage:** Google Sheets integration

### Purpose
Educational quiz application to raise awareness about World Food Safety Day, food safety practices, and promote healthy eating habits.

---

## ✨ Features

### Core Functionality
- ✅ **User Authentication** - Name, email, phone, registration validation
- ✅ **Timed Quiz** - 25-minute countdown with visual warnings
- ✅ **15 Multiple Choice Questions** - About food safety
- ✅ **10 Riddle Challenges** - Interactive text-based riddles
- ✅ **Real-time Scoring** - Instant score calculation
- ✅ **Progress Tracking** - Visual progress bars
- ✅ **Google Sheets Integration** - Automatic data submission
- ✅ **Responsive Design** - Works on all devices
- ✅ **Time Expiration Handling** - Auto-submit on timeout

### User Experience
- 🎨 Beautiful gradient UI with smooth animations
- 📱 Mobile-first responsive design
- ⏰ Timer with warning states (5 min, 1 min)
- 📊 Real-time progress indicators
- 🎉 Celebration screen on completion
- 🔄 Restart quiz functionality

### Technical Features
- 🧩 Modular architecture (4 independent modules)
- 📦 No external dependencies (pure HTML/CSS/JS)
- 🚀 Fast loading and performance
- 💾 Optional local storage for progress
- 📈 Google Analytics integration
- 🔒 Form validation and data sanitization

---

## 📁 Project Structure

```
health-club-quiz/
├── index.html                  # Main integration file
├── css/
│   └── styles.css             # Module 1: UI & Styling
├── js/
│   ├── data.js                # Module 4: Data Management
│   ├── auth.js                # Module 2: Authentication & Timer
│   └── quiz.js                # Module 3: Quiz & Riddle Logic
├── assets/
│   ├── healthclub.jpg         # Health Club logo
│   └── vit.jpg                # VIT University logo
├── README.md                  # This file
└── .gitignore                 # Git ignore file (optional)
```

---

## 🔧 Modules

### Module 1: UI & Styling (`css/styles.css`)
**Developer:** Person A  
**Lines:** ~700 lines

**Responsibilities:**
- Complete CSS styling and animations
- Responsive design for 10+ device types
- Timer display with warning/danger states
- Progress bars and visual feedback
- Button effects and transitions
- Modal styling

**Key Features:**
- Gradient backgrounds
- Smooth animations (slideIn, pulse, flash, bounce)
- Mobile-optimized touch targets (44px minimum)
- Landscape orientation support
- Tablet and desktop layouts

---

### Module 2: Authentication & Timer (`js/auth.js`)
**Developer:** Person B  
**Lines:** ~250 lines

**Responsibilities:**
- Login form validation (name, email, phone, registration)
- User session management
- 25-minute countdown timer
- Timer visual states (normal, warning, danger)
- Time expiration handling
- User info display management

**Key Functions:**
- `validateForm()` - Validates all form fields
- `startTimer()` - Initiates countdown
- `updateTimerDisplay()` - Updates timer UI
- `handleTimeExpired()` - Handles timeout
- `getCurrentUser()` - Returns user data
- `getTimeSpent()` - Calculates time spent

---

### Module 3: Quiz & Riddle Logic (`js/quiz.js`)
**Developer:** Person A  
**Lines:** ~400 lines

**Responsibilities:**
- Quiz question display and navigation
- Answer selection and validation
- Riddle input and checking
- Score calculation (quiz + riddles)
- Progress bar updates
- Final score display
- Data submission coordination
- Quiz restart functionality

**Key Functions:**
- `showQuestion()` - Displays quiz question
- `selectAnswer()` - Handles answer selection
- `nextQuestion()` - Navigates to next question
- `showRiddle()` - Displays riddle challenge
- `submitRiddle()` - Validates riddle answer
- `finishRiddles()` - Completes quiz
- `submitFinalAnswers()` - Submits to Google Sheets
- `restartQuiz()` - Resets entire quiz

---

### Module 4: Data Management (`js/data.js`)
**Developer:** Person B  
**Lines:** ~200 lines

**Responsibilities:**
- 15 quiz questions with correct answers
- 10 riddles with alternative accepted answers
- Google Sheets API integration
- Data validation before submission
- Statistics calculation
- Local storage helpers (optional)

**Key Functions:**
- `getQuizQuestions()` - Returns quiz data
- `getRiddles()` - Returns riddle data
- `submitToGoogleSheets()` - Sends data to Google Sheets
- `validateQuizData()` - Validates submission data
- `calculateStatistics()` - Calculates percentages and grades
- `getGrade()` - Determines letter grade

**Data Structure:**
```javascript
// Quiz Question Format
{
    question: "Question text here?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correct: 2  // Index of correct answer
}

// Riddle Format
{
    question: "Riddle text here?",
    answer: "main answer",
    alternatives: ["alt1", "alt2", "alt3"]
}
```

---

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE (VS Code, Sublime Text, Atom)
- Git installed on your machine
- Basic knowledge of HTML, CSS, JavaScript

### Quick Start

1. **Download/Clone the repository**
   ```bash
   git clone https://github.com/yourusername/health-club-quiz.git
   cd health-club-quiz
   ```

2. **Create folder structure** (if not exists)
   ```bash
   mkdir css js assets
   ```

3. **Add logo images**
   - Place `healthclub.jpg` in `assets/` folder
   - Place `vit.jpg` in `assets/` folder

4. **Open in browser**
   - Simply double-click `index.html`
   - Or use a local server (recommended):
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Python 2
     python -m SimpleHTTPServer 8000
     
     # Node.js (if you have http-server installed)
     npx http-server
     ```
   - Visit: `http://localhost:8000`

---

## 💻 Installation

### For Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/health-club-quiz.git
   cd health-club-quiz
   ```

2. **Install VS Code extensions** (recommended)
   - Live Server
   - HTML CSS Support
   - JavaScript (ES6) code snippets
   - Prettier - Code formatter

3. **Open with Live Server**
   - Right-click on `index.html`
   - Select "Open with Live Server"

### For Production

1. **Upload to web hosting**
   - Upload all files maintaining folder structure
   - Ensure `assets/` folder contains logos
   - Update Google Script URL in `js/data.js`

2. **Deploy to GitHub Pages**
   ```bash
   git checkout -b gh-pages
   git push origin gh-pages
   ```
   - Enable GitHub Pages in repository settings
   - Access at: `https://yourusername.github.io/health-club-quiz/`

---

## 📖 Usage

### Taking the Quiz

1. **Open the application** in your web browser
2. **Fill in login details:**
   - Full Name
   - Email Address
   - Phone Number (10 digits)
   - Registration Number
   - Select your group
3. **Click "Start Quiz"** - Timer starts automatically
4. **Answer 15 quiz questions:**
   - Click on your chosen answer
   - Click "Next Question" to proceed
   - Last question shows "Proceed to Riddles"
5. **Complete 10 riddles:**
   - Type your answer in the text box
   - Click "Submit Answer"
   - Click "Next Riddle" to continue
6. **View final score:**
   - See your quiz score, riddle score, and total
   - Option to retake the quiz

### Timer Rules

- **Total time:** 25 minutes
- **Yellow warning:** Last 5 minutes
- **Red danger:** Last 1 minute
- **Auto-submit:** Answers submitted automatically when time expires

---

## 🤝 GitHub Collaboration

### Workflow for 2 Developers

#### Initial Setup (One person - Repository Owner)

```bash
# Create repository on GitHub first
# Then initialize locally

git init
git add README.md
git commit -m "Initial commit: Add README"
git branch -M main
git remote add origin https://github.com/yourusername/health-club-quiz.git
git push -u origin main

# Create project structure
mkdir css js assets
touch css/styles.css js/auth.js js/quiz.js js/data.js
git add .
git commit -m "Add project folder structure"
git push origin main
```

#### Person A Workflow (Modules 1 & 3)

```bash
# Clone repository
git clone https://github.com/yourusername/health-club-quiz.git
cd health-club-quiz

# Work on Module 1 (CSS)
git checkout -b module-1-ui-styling
# Create/edit css/styles.css
git add css/styles.css
git commit -m "Add Module 1: Complete UI styling and responsive design"
git push origin module-1-ui-styling
# Create Pull Request on GitHub

# After Module 1 is merged, work on Module 3
git checkout main
git pull origin main
git checkout -b module-3-quiz-logic
# Create/edit js/quiz.js
git add js/quiz.js
git commit -m "Add Module 3: Quiz and riddle logic implementation"
git push origin module-3-quiz-logic
# Create Pull Request on GitHub
```

#### Person B Workflow (Modules 2 & 4)

```bash
# Clone repository
git clone https://github.com/yourusername/health-club-quiz.git
cd health-club-quiz

# Work on Module 4 FIRST (provides data to other modules)
git checkout -b module-4-data-management
# Create/edit js/data.js
git add js/data.js
git commit -m "Add Module 4: Quiz data and Google Sheets integration"
git push origin module-4-data-management
# Create Pull Request on GitHub

# After Module 4 is merged, work on Module 2
git checkout main
git pull origin main
git checkout -b module-2-auth-timer
# Create/edit js/auth.js
git add js/auth.js
git commit -m "Add Module 2: Authentication and timer functionality"
git push origin module-2-auth-timer
# Create Pull Request on GitHub
```

#### Integration (Both coordinate)

```bash
# One person handles index.html
git checkout -b main-integration
# Edit index.html
git add index.html
git commit -m "Add main HTML integration file"
git push origin main-integration
# Create Pull Request

# After all modules merged:
git checkout main
git pull origin main
# Test complete application
```

### Best Practices

1. **Always pull before starting work**
   ```bash
   git pull origin main
   ```

2. **Create descriptive branch names**
   ```bash
   git checkout -b feature/add-timer-animation
   ```

3. **Write clear commit messages**
   ```bash
   git commit -m "Fix: Timer not stopping when quiz completes"
   ```

4. **Test before pushing**
   - Run the application locally
   - Check browser console for errors
   - Test on mobile devices

5. **Use Pull Requests for code review**
   - Don't merge your own PRs
   - Review each other's code
   - Discuss changes in PR comments

---

## 🔨 Module Development

### Module 1: CSS Development

**Setup:**
```bash
git checkout -b module-1-ui-styling
```

**Tasks:**
- [ ] Create base styles and reset
- [ ] Design responsive layouts
- [ ] Add timer display styling
- [ ] Create animations (slideIn, pulse, flash, bounce)
- [ ] Style all form elements
- [ ] Add mobile responsiveness (10+ devices)
- [ ] Test on different screen sizes

**Testing:**
- Use browser DevTools responsive mode
- Test on actual mobile devices
- Check all breakpoints

---

### Module 2: Authentication Development

**Setup:**
```bash
git checkout -b module-2-auth-timer
```

**Tasks:**
- [ ] Implement form validation
- [ ] Add email/phone regex validation
- [ ] Create timer countdown logic
- [ ] Handle timer expiration
- [ ] Manage user session
- [ ] Display user info in header

**Testing:**
- Test form validation with invalid inputs
- Test timer countdown to zero
- Verify timer warning states

---

### Module 3: Quiz Logic Development

**Setup:**
```bash
git checkout -b module-3-quiz-logic
```

**Tasks:**
- [ ] Display quiz questions
- [ ] Handle answer selection
- [ ] Implement riddle checking
- [ ] Calculate scores
- [ ] Update progress bars
- [ ] Submit data to Google Sheets
- [ ] Add restart functionality

**Testing:**
- Complete full quiz flow
- Test riddle alternative answers
- Verify score calculation
- Check data submission

---

### Module 4: Data Management Development

**Setup:**
```bash
git checkout -b module-4-data-management
```

**Tasks:**
- [ ] Create 15 quiz questions
- [ ] Create 10 riddles with alternatives
- [ ] Set up Google Sheets integration
- [ ] Add data validation
- [ ] Implement statistics calculation
- [ ] Add error handling for API calls

**Testing:**
- Verify all questions display correctly
- Test Google Sheets submission
- Check fallback submission method
- Validate data structure

---

## 📊 Google Sheets Setup

### Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create new spreadsheet named "Health Club Quiz Responses"
3. Add column headers:
   ```
   Timestamp | Name | Email | Phone | Registration | Belongs | 
   Quiz Score | Riddle Score | Total Score | Time Spent | 
   Quiz Answers | Riddle Answers
   ```

### Step 2: Create Apps Script

1. In your Google Sheet: **Extensions → Apps Script**
2. Delete existing code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.email,
      data.phone,
      data.registration,
      data.belongs,
      data.quizScore,
      data.riddleScore,
      data.totalScore,
      data.timeSpent,
      data.quizAnswers,
      data.riddleAnswers
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'row': sheet.getLastRow()
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'error': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Quiz API is running");
}
```

### Step 3: Deploy Web App

1. Click **Deploy → New deployment**
2. Select type: **Web app**
3. Settings:
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**
5. Copy the **Web app URL**

### Step 4: Update Code

1. Open `js/data.js`
2. Find line: `const GOOGLE_SCRIPT_URL = '...'`
3. Replace with your Web app URL
4. Save and test

### Step 5: Test Submission

1. Complete the quiz
2. Check Google Sheet for new row
3. Verify all data is captured correctly

---

## 🧪 Testing

### Manual Testing Checklist

#### Login Page
- [ ] Name validation (required)
- [ ] Email validation (format)
- [ ] Phone validation (10 digits)
- [ ] Registration validation (required)
- [ ] Group selection (required)
- [ ] Error messages display correctly
- [ ] Form submits successfully

#### Quiz Page
- [ ] Timer starts at 25:00
- [ ] Timer counts down correctly
- [ ] Questions display properly
- [ ] Answer selection works
- [ ] Progress bar updates
- [ ] "Next Question" navigates correctly
- [ ] Last question shows "Proceed to Riddles"

#### Riddle Page
- [ ] Riddles display correctly
- [ ] Text input accepts answers
- [ ] Alternative answers accepted
- [ ] Progress bar updates
- [ ] "Submit Answer" validates input
- [ ] "Next Riddle" navigates correctly
- [ ] Last riddle shows "Complete Challenge"

#### Final Page
- [ ] Score displays correctly
- [ ] Quiz score matches answers
- [ ] Riddle score matches answers
- [ ] Total score is sum of both
- [ ] Data submitted to Google Sheets
- [ ] "Take Quiz Again" resets everything

#### Timer Features
- [ ] Timer displays in header
- [ ] Warning state at 5 minutes (yellow)
- [ ] Danger state at 1 minute (red)
- [ ] Auto-submit on time expiration
- [ ] Modal appears when time expires

#### Responsive Design
- [ ] Works on mobile (iPhone, Android)
- [ ] Works on tablet (iPad, Android tablet)
- [ ] Works on desktop (various screen sizes)
- [ ] Landscape orientation works
- [ ] Touch targets are 44px minimum

### Browser Testing

Test on:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Chrome Mobile
- ✅ Safari iOS

### Performance Testing

```bash
# Check load time
# Open DevTools → Network tab → Refresh

# Target metrics:
- Page load: < 2 seconds
- First contentful paint: < 1 second
- Time to interactive: < 3 seconds
```

---

## 🌐 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Supported |
| Firefox | 88+ | ✅ Supported |
| Safari | 14+ | ✅ Supported |
| Edge | 90+ | ✅ Supported |
| Opera | 76+ | ✅ Supported |
| Chrome Mobile | Latest | ✅ Supported |
| Safari iOS | 14+ | ✅ Supported |
| Samsung Internet | Latest | ✅ Supported |

### Feature Compatibility

- ✅ CSS Grid & Flexbox
- ✅ ES6+ JavaScript
- ✅ Fetch API
- ✅ Local Storage
- ✅ CSS Animations
- ✅ Media Queries

---

## 🐛 Troubleshooting

### Common Issues

#### Issue: Modules not loading
**Solution:**
```javascript
// Check file paths in index.html
<script src="js/data.js"></script>  // Correct
<script src="data.js"></script>      // Wrong

// Verify files exist in correct folders
ls css/  # Should show styles.css
ls js/   # Should show auth.js, quiz.js, data.js
```

#### Issue: Timer not starting
**Solution:**
```javascript
// Check Module 2 is loaded
console.log(typeof startTimer);  // Should be 'function'

// Verify timer is initialized
// Open DevTools → Console → Check for errors
```

#### Issue: Questions not displaying
**Solution:**
```javascript
// Ensure Module 4 loads before Module 3
// Check script order in index.html:
<script src="js/data.js"></script>     // Load first
<script src="js/auth.js"></script>
<script src="js/quiz.js"></script>

// Verify data is available
console.log(getQuizQuestions());  // Should return array
```

#### Issue: Google Sheets not receiving data
**Solution:**
```javascript
// 1. Verify Google Script URL
console.log(GOOGLE_SCRIPT_URL);

// 2. Check Apps Script deployment
// - Redeploy as new version
// - Ensure "Anyone" has access

// 3. Check browser console for errors
// - Look for CORS errors
// - Check network tab for failed requests

// 4. Test with fallback method
// The code automatically tries fallback if primary fails
```

#### Issue: Responsive design not working
**Solution:**
```html
<!-- Ensure viewport meta tag is present -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Clear browser cache -->
<!-- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac) -->
```

#### Issue: Images not loading
**Solution:**
```bash
# Check file paths
assets/healthclub.jpg  # Correct path
healthclub.jpg         # Wrong path

# Verify images exist
ls assets/  # Should show both .jpg files

# Check image references in HTML
<img src="assets/vit.jpg" alt="VIT Logo">  # Correct
```

### Debug Mode

Enable debug mode to see detailed logs:

```javascript
// Add to top of auth.js, quiz.js, or data.js
const DEBUG = true;

// Add debug logs
if (DEBUG) console.log('User data:', currentUser);
```

### Getting Help

1. **Check browser console** (F12 → Console tab)
2. **Review error messages** carefully
3. **Test each module independently**
4. **Ask in GitHub Issues**
5. **Contact developers** (see Authors section)

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Commit with clear message**
   ```bash
   git commit -m "Add: Amazing new feature description"
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Commit Message Convention

```
Type: Brief description

Types:
- Add: New feature
- Fix: Bug fix
- Update: Modify existing feature
- Remove: Delete code/feature
- Docs: Documentation changes
- Style: Code formatting
- Refactor: Code restructuring
- Test: Add tests

Examples:
Add: Timer warning animation at 5 minutes
Fix: Quiz score calculation incorrect
Update: Improve mobile responsiveness
Docs: Add troubleshooting section to README
```

### Code Style

- Use **2 spaces** for indentation
- Use **camelCase** for variables and functions
- Add **comments** for complex logic
- Follow **existing code structure**
- Keep **functions small** and focused

---

## 👨‍💻 Authors

### Project Team

**Vishva S A**  
- Registration: 23MIS0420
- Role: Project Lead & Developer
- Email: vishva.sa2023@vitstudent.ac.in
- Location: Gudiyattam 632-602

**Person A** (Module 1 & 3)
- Module 1: UI & Styling
- Module 3: Quiz & Riddle Logic

**Person B** (Module 2 & 4)
- Module 2: Authentication & Timer
- Module 4: Data Management

### Organization

**VIT University - Health Club**  
Software Development Team  
Gudiyattam Campus

---

## 📄 License

This project is created for **educational purposes** as part of VIT Health Club activities.

**Copyright © 2025** - Software Development, VIT University

### Usage Rights

- ✅ Use for educational purposes
- ✅ Modify for learning
- ✅ Share with attribution
- ❌ Commercial use without permission
- ❌ Remove copyright notice

---

## 🙏 Acknowledgments

- **World Food Safety Day** initiative by FAO and WHO
- **VIT University** Health Club for support
- **Food Safety Information** from WHO/FAO resources
- **Contributors** who helped improve this project

---

## 📞 Contact & Support

### For Questions or Issues

**Email:** vishva.sa2023@vitstudent.ac.in  
**Location:** Gudiyattam 632-602, Tamil Nadu, India  
**Institution:** VIT University

### GitHub Issues

Report bugs or request features:  
[Create an Issue](https://github.com/yourusername/health-club-quiz/issues)

### Social Media

Follow VIT Health Club for updates on health and wellness initiatives.

---

## 🎓 Educational Resources

Learn more about food safety:
- [WHO Food Safety](https://www.who.int/health-topics/food-safety)
- [FAO Food Safety](http://www.fao.org/food-safety/en/)
- [World Food Safety Day](https://www.who.int/campaigns/world-food-safety-day)

---

## 📈 Version History

### Version 1.0.0 (Current)
- ✅ Initial release
- ✅ 15 quiz questions
- ✅ 10 riddles
- ✅ 25-minute timer
- ✅ Google Sheets integration
- ✅ Full responsive design
- ✅ Modular architecture

### Future Enhancements
- [ ] Add more quiz categories
- [ ] Implement leaderboard
- [ ] Add difficulty levels
- [ ] Email notifications
- [ ] Certificate generation
- [ ] Multi-language support

---

## 🔐 Privacy & Data

### Data Collection

We collect:
- Name, Email, Phone, Registration Number
- Quiz and riddle answers
- Time spent on quiz
- Timestamp of completion

### Data Usage

Data is used for:
- Educational assessment
- Health awareness tracking
- Program improvement

### Data Storage

- Stored securely in Google Sheets
- Access restricted to authorized personnel
- Not shared with third parties

---

**Made with ❤️ by VIT Health Club Software Development Team**

**Last Updated:** January 2025

---

## 🚀 Quick Links

- [Live Demo](#) (Add your deployed URL)
- [GitHub Repository](https://github.com/yourusername/health-club-quiz)
- [Report Bug](https://github.com/yourusername/health-club-quiz/issues)
- [Request Feature](https://github.com/yourusername/health-club-quiz/issues)

---

**⭐ If you find this project helpful, please give it a star on GitHub!**