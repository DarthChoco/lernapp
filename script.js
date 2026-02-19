// VARIABLEN-SETUP
let dictionary = [];
let filteredWords = [];
let learnedLetters = new Set(JSON.parse(localStorage.getItem('learnedLetters')) || []);
let lastWord = "";
let currentGame = 'silben';
let currentAnlautWord = "";
let mathMode = 'mengen';
let currentMathAnswer = 0;
let score = parseInt(localStorage.getItem('schlaufix_score')) || 0;

// INITIALISIERUNG
async function init() {
    try {
        const response = await fetch('wortliste.txt');
        const text = await response.text();
        dictionary = text.split('\n').map(w => w.trim()).filter(w => w.length > 0);
        
        createAlphabet();
        updateWordPool();
        updateScoreDisplay(false); // Initialer Punktestand
        showGame('silben');
    } catch (e) {
        console.error("Wortliste konnte nicht geladen werden", e);
        dictionary = ["Ma-ma", "Pa-pa", "O-ma", "E-sel", "Rol-ler"];
        createAlphabet();
        updateWordPool();
        updateScoreDisplay(false);
    }
}

// PUNKTE-SYSTEM & KONFETTI
function updateScoreDisplay(isCorrect) {
    const oldScore = parseInt(localStorage.getItem('schlaufix_score')) || 0;
    const scoreElement = document.getElementById('current-score');
    
    if (scoreElement) {
        scoreElement.innerText = score;
        localStorage.setItem('schlaufix_score', score);

        // Belohnung alle 100 Punkte
        if (isCorrect && Math.floor(score / 100) > Math.floor(oldScore / 100) && score > 0) {
            launchConfetti();
        }
    }
}

function launchConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = ['#FF5722', '#2196F3', '#4CAF50', '#FFC107', '#E91E63'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.opacity = Math.random();
        container.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }
}

// NAVIGATION
function showGame(gameId) {
    currentGame = gameId;
    document.querySelectorAll('.game-screen').forEach(s => s.style.display = 'none');
    document.querySelectorAll('.game-nav .nav-btn').forEach(b => b.classList.remove('active'));
    
    document.getElementById('game-' + gameId).style.display = 'block';
    const activeNavBtn = document.getElementById('nav-' + gameId);
    if (activeNavBtn) activeNavBtn.classList.add('active');
    
    if (gameId === 'anlaut') nextAnlautTask();
}

function showMathGame(mode) {
    showGame('rechnen');
    document.querySelectorAll('.math-btn').forEach(b => b.classList.remove('active'));
    const mathBtn = document.getElementById('nav-' + mode);
    if (mathBtn) mathBtn.classList.add('active');
    
    mathMode = mode;
    generateMathTask();
}

// DEUTSCH-LOGIK
function createAlphabet() {
    const selectionContainer = document.getElementById('alphabet-container');
    const gameKeyboard = document.getElementById('anlaut-keyboard');
    if(!selectionContainer || !gameKeyboard) return;

    selectionContainer.innerHTML = "";
    gameKeyboard.innerHTML = "";
    
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜ".split("");
    
    chars.forEach(char => {
        const lower = char.toLowerCase();
        const selectBtn = document.createElement('button');
        selectBtn.innerText = char;
        selectBtn.className = learnedLetters.has(lower) ? 'letter-btn active' : 'letter-btn';
        selectBtn.onclick = () => {
            if (learnedLetters.has(lower)) learnedLetters.delete(lower);
            else learnedLetters.add(lower);
            localStorage.setItem('learnedLetters', JSON.stringify([...learnedLetters]));
            createAlphabet();
            updateWordPool();
        };
        selectionContainer.appendChild(selectBtn);

        const gameBtn = document.createElement('button');
        gameBtn.innerText = char;
        gameBtn.className = 'key-btn';
        gameBtn.onclick = () => checkAnlaut(lower);
        gameKeyboard.appendChild(gameBtn);
    });
}

function updateWordPool() {
    filteredWords = dictionary.filter(word => {
        const clean = word.replace(/-/g, "").toLowerCase();
        return [...clean].every(c => learnedLetters.has(c));
    });
    if (currentGame === 'silben') renderRandomWord();
}

function renderRandomWord() {
    const container = document.getElementById('wordContainer');
    if (filteredWords.length === 0) {
        container.innerText = "Wähle Buchstaben!";
        lastWord = "";
        return;
    }
    const word = filteredWords[Math.floor(Math.random() * filteredWords.length)];
    lastWord = word;
    container.innerHTML = "";
    
    word.split("-").forEach((syllable, index) => {
        const span = document.createElement('span');
        span.innerText = syllable;
        span.style.color = (index % 2 === 0) ? "blue" : "red";
        container.appendChild(span);
    });
}

function nextAnlautTask() {
    if (filteredWords.length === 0) {
        document.getElementById('anlautWord').innerText = "Wähle Buchstaben!";
        return;
    }
    const word = filteredWords[Math.floor(Math.random() * filteredWords.length)];
    currentAnlautWord = word.replace(/-/g, "");
    lastWord = word;
    document.getElementById('anlautWord').innerText = "_ " + currentAnlautWord.substring(1);
    document.getElementById('anlautFeedback').innerText = "";
    speakCurrentWord();
}

function checkAnlaut(char) {
    const correct = currentAnlautWord[0].toLowerCase();
    const feedback = document.getElementById('anlautFeedback');
    if (char === correct) {
        score += 1;
        feedback.innerText = "Super! +1 ⭐";
        feedback.style.color = "green";
        document.getElementById('anlautWord').innerText = currentAnlautWord;
        updateScoreDisplay(true);
        setTimeout(nextAnlautTask, 1500);
    } else {
        score = Math.max(0, score - 1);
        feedback.innerText = "Noch mal! -1 ❌";
        feedback.style.color = "red";
        updateScoreDisplay(false);
    }
}

// MATHE-LOGIK
function generateMathTask() {
    const display = document.getElementById('math-display');
    const options = document.getElementById('math-options');
    const range = parseInt(document.getElementById('math-range').value);
    
    display.innerHTML = ""; options.innerHTML = ""; document.getElementById('math-feedback').innerText = "";

    if (mathMode === 'mengen') {
        currentMathAnswer = Math.floor(Math.random() * Math.min(range, 20)) + 1;
        const grid = document.createElement('div');
        grid.className = 'dot-container';
        for(let i=0; i < currentMathAnswer; i++) grid.innerHTML += '<div class="dot"></div>';
        display.appendChild(grid);
        createMathNumbers(1, Math.min(range, 20));

    } else if (mathMode === 'vergleich') {
        let n1 = Math.floor(Math.random() * (range + 1));
        let n2 = Math.floor(Math.random() * (range + 1));
        while(n1 === n2) n2 = Math.floor(Math.random() * (range + 1));
        display.innerHTML = `<span class="math-big-num">${n1}</span> <span id="math-quest">?</span> <span class="math-big-num">${n2}</span>`;
        currentMathAnswer = n1 > n2 ? ">" : "<";
        ["<", ">"].forEach(s => {
            const b = document.createElement('button'); b.innerText = s; b.className = 'key-btn';
            b.onclick = () => checkMathAnswer(s); options.appendChild(b);
        });

    } else if (mathMode === 'rechnen') {
        const isMinus = Math.random() > 0.5;
        let a, b, op;
        if (isMinus) {
            a = Math.floor(Math.random() * range) + 1;
            b = Math.floor(Math.random() * (a + 1));
            currentMathAnswer = a - b; op = "-";
        } else {
            a = Math.floor(Math.random() * range);
            b = Math.floor(Math.random() * (range - a + 1));
            currentMathAnswer = a + b; op = "+";
        }
        display.innerHTML = `<span class="math-big-num">${a} ${op} ${b} = </span> <span id="math-quest" class="math-big-num">?</span>`;
        createMathNumbers(0, range);
    }
}

function createMathNumbers(min, max) {
    const container = document.getElementById('math-options');
    container.innerHTML = "";
    const count = (max - min) + 1;
    const columns = Math.min(10, Math.max(5, Math.ceil(count / Math.ceil(count / 10))));
    container.style.maxWidth = (columns * 60) + "px";

    for (let i = min; i <= max; i++) {
        const b = document.createElement('button');
        b.innerText = i; b.className = 'key-btn';
        b.onclick = () => checkMathAnswer(i);
        container.appendChild(b);
    }
}

function checkMathAnswer(val) {
    const feedback = document.getElementById('math-feedback');
    const questionMark = document.getElementById('math-quest');

    if (val === currentMathAnswer) {
        score += 1;
        if (questionMark) {
            questionMark.innerText = val;
            questionMark.classList.add('answer-highlight');
        }
        feedback.innerText = "Richtig! +1 ⭐";
        feedback.style.color = "green";
        updateScoreDisplay(true);
        setTimeout(generateMathTask, 2000);
    } else {
        score = Math.max(0, score - 1);
        feedback.innerText = "Noch mal! -1 ❌";
        feedback.style.color = "red";
        updateScoreDisplay(false);
    }
}

function speakCurrentWord() {
    if (!lastWord) return;
    const utterance = new SpeechSynthesisUtterance(lastWord.replace(/-/g, ""));
    utterance.lang = 'de-DE';
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
}

init();