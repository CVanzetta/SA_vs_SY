# Application de Comparaison "Tu Préfères"

Une application interactive pour comparer deux options à travers une série de questions pondérées.

## 📁 Structure du Projet

```
SA_vs_SY/
├── index.html      # Structure HTML principale
├── styles.css      # Styles et design
├── app.js          # Logique de l'application
├── config.js       # Configuration (questions, poids, etc.)
└── README.md       # Documentation
```

## 🚀 Comment Utiliser

### 1. Ouvrir l'application
Ouvrez simplement le fichier `index.html` dans votre navigateur.

### 2. Configurer votre comparaison

Modifiez le fichier `config.js` pour personnaliser votre application :

#### a) Définir le titre et les options
```javascript
title: "Votre Titre",
optionA: {
    name: "Nom de l'option A",
    shortName: "A"
},
optionB: {
    name: "Nom de l'option B",
    shortName: "B"
}
```

#### b) Ajouter vos questions
```javascript
questions: [
    {
        id: 1,
        text: "Votre question ?",
        weight: 1,  // Poids de la question (1 = normal, 2 = double, etc.)
        optionA: {
            title: "Titre du choix A",
            description: "Description détaillée"
        },
        optionB: {
            title: "Titre du choix B",
            description: "Description détaillée"
        }
    },
    // Ajoutez plus de questions...
]
```

#### c) Personnaliser les messages de résultats
```javascript
results: {
    winnerA: "Message si l'option A gagne",
    winnerB: "Message si l'option B gagne",
    tie: "Message en cas d'égalité"
}
```

## 🎨 Personnalisation du Design

### Modifier les couleurs des cartes
Dans `styles.css`, modifiez les classes `.card-a` et `.card-b` :
```css
.card-a {
    background: linear-gradient(135deg, #votre-couleur1, #votre-couleur2);
}
.card-b {
    background: linear-gradient(135deg, #votre-couleur3, #votre-couleur4);
}
```

### Modifier le thème général
Changez le dégradé de fond dans le `body` :
```css
body {
    background: linear-gradient(135deg, #votre-couleur1, #votre-couleur2);
}
```

## ⚖️ Système de Pondération

Les questions ont un poids (`weight`) qui détermine leur importance :
- **weight: 1** = Question normale (1 point)
- **weight: 2** = Question importante (2 points)
- **weight: 3** = Question cruciale (3 points)

Le score final tient compte de ces poids.

## 🔧 Fonctionnalités

- ✅ Questions avec poids personnalisables
- ✅ Interface interactive avec animations
- ✅ Suivi du score en temps réel
- ✅ Barre de progression
- ✅ Écran de résultats détaillé
- ✅ Possibilité de recommencer
- ✅ Design responsive (mobile & desktop)

## 📱 Responsive

L'application s'adapte automatiquement aux écrans :
- Desktop : cartes côte à côte
- Mobile : cartes empilées verticalement

## 🎯 Exemple d'Utilisation

Pour créer une comparaison "PlayStation vs Xbox" :

1. Modifiez `config.js` :
```javascript
title: "PlayStation vs Xbox",
optionA: { name: "PlayStation", shortName: "PS" },
optionB: { name: "Xbox", shortName: "XB" },
questions: [
    {
        id: 1,
        text: "Quelle exclusivité préfères-tu ?",
        weight: 2,
        optionA: {
            title: "Spider-Man",
            description: "Jeu d'action exclusif PlayStation"
        },
        optionB: {
            title: "Halo",
            description: "FPS culte exclusif Xbox"
        }
    }
]
```

2. Ouvrez `index.html` dans votre navigateur
3. Répondez aux questions
4. Découvrez votre résultat !
