// État de l'application
let currentQuestionIndex = 0;
let scoreSydney = 0;
let scoreSabrina = 0;
let userChoices = [];

// Mapping pour savoir quelle option correspond à qui dans chaque question
const questionMapping = [
    { a: 'sydney', b: 'sabrina' },    // Q1: Sydney à gauche
    { a: 'sabrina', b: 'sydney' },    // Q2: Sabrina à gauche
    { a: 'sydney', b: 'sabrina' },    // Q3: Sydney à gauche
    { a: 'sabrina', b: 'sydney' },    // Q4: Sabrina à gauche
    { a: 'sydney', b: 'sabrina' },    // Q5: Sydney à gauche
    { a: 'sabrina', b: 'sydney' },    // Q6: Sabrina à gauche
    { a: 'sydney', b: 'sabrina' },    // Q7: Sydney à gauche
    { a: 'sabrina', b: 'sydney' },    // Q8: Sabrina à gauche
    { a: 'sydney', b: 'sabrina' },    // Q9: Sydney à gauche
    { a: 'sabrina', b: 'sydney' },    // Q10: Sabrina à gauche
    { a: 'sabrina', b: 'sydney' },    // Q11: Sabrina à gauche
    { a: 'sydney', b: 'sabrina' },    // Q12: Sydney à gauche
    { a: 'sabrina', b: 'sydney' },    // Q13: Sabrina à gauche
    { a: 'sabrina', b: 'sydney' },    // Q14: Sabrina à gauche
    { a: 'sydney', b: 'sabrina' },    // Q15: Sydney à gauche
    { a: 'sabrina', b: 'sydney' },    // Q16: Sabrina à gauche
    { a: 'sabrina', b: 'sydney' },    // Q17: Sabrina à gauche
    { a: 'sydney', b: 'sabrina' },    // Q18: Sydney à gauche
    { a: 'sydney', b: 'sabrina' }     // Q19: Sydney à gauche
];

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
    const mapping = questionMapping[currentQuestionIndex];
    
    // Déterminer qui gagne des points (Sydney ou Sabrina)
    const selectedPerson = mapping[choice];
    
    // Enregistrer le choix
    userChoices.push({
        questionId: question.id,
        choice: choice,
        selectedPerson: selectedPerson,
        weight: weight
    });
    
    // Mettre à jour le score selon la vraie personne
    if (selectedPerson === 'sydney') {
        scoreSydney += weight;
    } else {
        scoreSabrina += weight;
    }
    
    // Animation visuelle
    if (choice === 'a') {
        elements.cardA.classList.add('selected');
        elements.cardB.classList.add('not-selected');
    } else {
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
    elements.scoreADisplay.textContent = scoreSydney;
    elements.scoreBDisplay.textContent = scoreSabrina;
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
    const percentSydney = (scoreSydney / totalPoints) * 100;
    const percentSabrina = (scoreSabrina / totalPoints) * 100;
    
    // Déterminer le gagnant
    let winnerText;
    if (scoreSydney > scoreSabrina) {
        winnerText = APP_CONFIG.results.winnerA;
    } else if (scoreSabrina > scoreSydney) {
        winnerText = APP_CONFIG.results.winnerB;
    } else {
        winnerText = APP_CONFIG.results.tie;
    }
    
    // Afficher le gagnant
    document.getElementById('winner-announcement').textContent = winnerText;
    
    // Afficher les scores détaillés (Sydney en premier, Sabrina en second)
    document.getElementById('result-score-a').textContent = `${scoreSydney}/${totalPoints} points (${percentSydney.toFixed(1)}%)`;
    document.getElementById('result-score-b').textContent = `${scoreSabrina}/${totalPoints} points (${percentSabrina.toFixed(1)}%)`;
    
    // Animer les barres de progression
    setTimeout(() => {
        document.getElementById('result-bar-a').style.width = percentSydney + '%';
        document.getElementById('result-bar-b').style.width = percentSabrina + '%';
    }, 100);
}

// Recommencer le quiz
function restart() {
    currentQuestionIndex = 0;
    scoreSydney = 0;
    scoreSabrina = 0;
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
