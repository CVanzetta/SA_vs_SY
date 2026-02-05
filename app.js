// État de l'application
let currentQuestionIndex = 0;
let scoreA = 0;
let scoreB = 0;
let userChoices = [];

// Éléments DOM
const elements = {
    appTitle: document.getElementById('app-title'),
    questionText: document.getElementById('question-text'),
    cardA: document.getElementById('card-a'),
    cardB: document.getElementById('card-b'),
    cardATitle: document.getElementById('card-a-title'),
    cardADescription: document.getElementById('card-a-description'),
    cardBTitle: document.getElementById('card-b-title'),
    cardBDescription: document.getElementById('card-b-description'),
    scoreADisplay: document.getElementById('score-a'),
    scoreBDisplay: document.getElementById('score-b'),
    progress: document.getElementById('progress'),
    progressText: document.getElementById('progress-text'),
    resultsScreen: document.getElementById('results-screen'),
    btnRestart: document.getElementById('btn-restart')
};

// Initialisation de l'application
function init() {
    elements.appTitle.textContent = APP_CONFIG.title;
    loadQuestion(currentQuestionIndex);
    setupEventListeners();
}

// Configuration des événements
function setupEventListeners() {
    elements.cardA.addEventListener('click', () => handleChoice('a'));
    elements.cardB.addEventListener('click', () => handleChoice('b'));
    elements.btnRestart.addEventListener('click', restart);
}

// Charger une question
function loadQuestion(index) {
    if (index >= APP_CONFIG.questions.length) {
        showResults();
        return;
    }

    const question = APP_CONFIG.questions[index];
    
    // Mettre à jour le texte de la question
    elements.questionText.textContent = question.text;
    
    // Mettre à jour la carte A
    elements.cardATitle.textContent = question.optionA.title;
    elements.cardADescription.textContent = question.optionA.description;
    
    // Mettre à jour la carte B
    elements.cardBTitle.textContent = question.optionB.title;
    elements.cardBDescription.textContent = question.optionB.description;
    
    // Mettre à jour la progression
    updateProgress();
    
    // Réinitialiser les animations
    elements.cardA.classList.remove('selected', 'not-selected');
    elements.cardB.classList.remove('selected', 'not-selected');
}

// Gérer le choix de l'utilisateur
function handleChoice(choice) {
    const question = APP_CONFIG.questions[currentQuestionIndex];
    const weight = question.weight || 1;
    
    // Enregistrer le choix
    userChoices.push({
        questionId: question.id,
        choice: choice,
        weight: weight
    });
    
    // Mettre à jour le score
    if (choice === 'a') {
        scoreA += weight;
        elements.cardA.classList.add('selected');
        elements.cardB.classList.add('not-selected');
    } else {
        scoreB += weight;
        elements.cardB.classList.add('selected');
        elements.cardA.classList.add('not-selected');
    }
    
    // Mettre à jour l'affichage des scores
    updateScoreDisplay();
    
    // Passer à la question suivante après une courte animation
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    }, 600);
}

// Mettre à jour l'affichage du score
function updateScoreDisplay() {
    elements.scoreADisplay.textContent = scoreA;
    elements.scoreBDisplay.textContent = scoreB;
}

// Mettre à jour la barre de progression
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / APP_CONFIG.questions.length) * 100;
    elements.progress.style.width = progress + '%';
    elements.progressText.textContent = `Question ${currentQuestionIndex + 1}/${APP_CONFIG.questions.length}`;
}

// Afficher les résultats
function showResults() {
    // Cacher la zone de questions
    document.querySelector('.main-content').style.display = 'none';
    
    // Afficher l'écran des résultats
    elements.resultsScreen.style.display = 'flex';
    
    // Calculer le total des points possibles
    const totalPoints = APP_CONFIG.questions.reduce((sum, q) => sum + (q.weight || 1), 0);
    
    // Calculer les pourcentages
    const percentA = (scoreA / totalPoints) * 100;
    const percentB = (scoreB / totalPoints) * 100;
    
    // Déterminer le gagnant
    let winnerText;
    if (scoreA > scoreB) {
        winnerText = APP_CONFIG.results.winnerA;
    } else if (scoreB > scoreA) {
        winnerText = APP_CONFIG.results.winnerB;
    } else {
        winnerText = APP_CONFIG.results.tie;
    }
    
    // Afficher le gagnant
    document.getElementById('winner-announcement').textContent = winnerText;
    
    // Afficher les scores détaillés
    document.getElementById('result-score-a').textContent = `${scoreA}/${totalPoints} points (${percentA.toFixed(1)}%)`;
    document.getElementById('result-score-b').textContent = `${scoreB}/${totalPoints} points (${percentB.toFixed(1)}%)`;
    
    // Animer les barres de progression
    setTimeout(() => {
        document.getElementById('result-bar-a').style.width = percentA + '%';
        document.getElementById('result-bar-b').style.width = percentB + '%';
    }, 100);
}

// Recommencer le quiz
function restart() {
    currentQuestionIndex = 0;
    scoreA = 0;
    scoreB = 0;
    userChoices = [];
    
    // Réinitialiser l'affichage
    updateScoreDisplay();
    elements.resultsScreen.style.display = 'none';
    document.querySelector('.main-content').style.display = 'block';
    
    // Charger la première question
    loadQuestion(0);
}

// Lancer l'application au chargement de la page
document.addEventListener('DOMContentLoaded', init);
