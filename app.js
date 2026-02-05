// État de l'application
let currentQuestionIndex = 0;
let scoreSydney = 0;
let scoreSabrina = 0;
let userChoices = [];
let shuffledQuestions = [];
let questionMapping = [];

// Fonction pour mélanger un tableau
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Fonction pour générer le mapping aléatoire
function generateRandomMapping(questions) {
    return questions.map(() => {
        // 50% de chance que Sydney soit à gauche ou à droite
        return Math.random() < 0.5 
            ? { a: 'sydney', b: 'sabrina' }
            : { a: 'sabrina', b: 'sydney' };
    });
}

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
    
    // Mélanger les questions et générer le mapping aléatoire
    shuffledQuestions = shuffleArray(APP_CONFIG.questions);
    questionMapping = generateRandomMapping(shuffledQuestions);
    
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
    if (index >= shuffledQuestions.length) {
        showResults();
        return;
    }

    const question = shuffledQuestions[index];
    const mapping = questionMapping[index];
    
    // Appliquer le mapping pour afficher les bonnes options
    const displayA = mapping.a === 'sydney' ? question.optionA : question.optionB;
    const displayB = mapping.b === 'sabrina' ? question.optionB : question.optionA;
    
    // Mettre à jour le texte de la question
    elements.questionText.textContent = question.text;
    
    // Gérer les questions avec images
    if (question.hasImage) {
        elements.cardA.classList.add('has-image');
        elements.cardB.classList.add('has-image');
        
        // Créer ou mettre à jour l'image A
        let imgA = elements.cardA.querySelector('.card-image');
        if (!imgA) {
            imgA = document.createElement('img');
            imgA.className = 'card-image';
            elements.cardA.querySelector('.card-content').prepend(imgA);
        }
        imgA.src = displayA.image;
        
        // Créer ou mettre à jour l'image B
        let imgB = elements.cardB.querySelector('.card-image');
        if (!imgB) {
            imgB = document.createElement('img');
            imgB.className = 'card-image';
            elements.cardB.querySelector('.card-content').prepend(imgB);
        }
        imgB.src = displayB.image;
        
        elements.cardATitle.textContent = displayA.title;
        elements.cardADescription.textContent = '';
        elements.cardBTitle.textContent = displayB.title;
        elements.cardBDescription.textContent = '';
    } else {
        // Question sans image
        elements.cardA.classList.remove('has-image');
        elements.cardB.classList.remove('has-image');
        
        // Supprimer les images si elles existent
        const imgA = elements.cardA.querySelector('.card-image');
        const imgB = elements.cardB.querySelector('.card-image');
        if (imgA) imgA.remove();
        if (imgB) imgB.remove();
        
        elements.cardATitle.textContent = displayA.title;
        elements.cardADescription.textContent = displayA.description;
        elements.cardBTitle.textContent = displayB.title;
        elements.cardBDescription.textContent = displayB.description;
    }
    
    // Mettre à jour la progression
    updateProgress();
    
    // Réinitialiser les animations
    elements.cardA.classList.remove('selected', 'not-selected');
    elements.cardB.classList.remove('selected', 'not-selected');
}

// Gérer le choix de l'utilisateur
function handleChoice(choice) {
    const question = shuffledQuestions[currentQuestionIndex];
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
    const progress = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
    elements.progress.style.width = progress + '%';
    elements.progressText.textContent = `Question ${currentQuestionIndex + 1}/${shuffledQuestions.length}`;
}

// Afficher les résultats
function showResults() {
    // Cacher la zone de questions
    document.querySelector('.main-content').style.display = 'none';
    
    // Afficher l'écran des résultats
    elements.resultsScreen.style.display = 'flex';
    
    // Calculer le total des points possibles
    const totalPoints = shuffledQuestions.reduce((sum, q) => sum + (q.weight || 1), 0);
    
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
    
    // Remélanger les questions
    shuffledQuestions = shuffleArray(APP_CONFIG.questions);
    questionMapping = generateRandomMapping(shuffledQuestions);
    
    // Réinitialiser l'affichage
    updateScoreDisplay();
    elements.resultsScreen.style.display = 'none';
    document.querySelector('.main-content').style.display = 'block';
    
    // Charger la première question
    loadQuestion(0);
}

// Lancer l'application au chargement de la page
document.addEventListener('DOMContentLoaded', init);
