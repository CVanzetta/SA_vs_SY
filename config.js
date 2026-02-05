// Configuration de l'application
// Vous pouvez modifier ces valeurs pour personnaliser votre comparaison

const APP_CONFIG = {
    // Titre de l'application
    title: "Tu Préfères ?",
    
    // Noms des options à comparer
    optionA: {
        name: "Option A",
        shortName: "A"
    },
    optionB: {
        name: "Option B",
        shortName: "B"
    },
    
    // Questions avec leurs poids
    // Plus le poids est élevé, plus la question compte dans le score final
    questions: [
        {
            id: 1,
            text: "Question 1 ?",
            weight: 1,
            optionA: {
                title: "Choix A1",
                description: "Description du choix A"
            },
            optionB: {
                title: "Choix B1",
                description: "Description du choix B"
            }
        },
        {
            id: 2,
            text: "Question 2 ?",
            weight: 1,
            optionA: {
                title: "Choix A2",
                description: "Description du choix A"
            },
            optionB: {
                title: "Choix B2",
                description: "Description du choix B"
            }
        },
        {
            id: 3,
            text: "Question 3 ?",
            weight: 2, // Cette question compte double
            optionA: {
                title: "Choix A3",
                description: "Description du choix A"
            },
            optionB: {
                title: "Choix B3",
                description: "Description du choix B"
            }
        },
        // Ajoutez plus de questions ici...
    ],
    
    // Messages pour les résultats
    results: {
        winnerA: "🎉 Option A l'emporte !",
        winnerB: "🎉 Option B l'emporte !",
        tie: "🤝 Égalité parfaite !"
    }
};
