// Configuration de l'application
const APP_CONFIG = {
    title: "Sydney vs Sabrina",
    
    optionA: {
        name: "Sydney",
        shortName: "Sydney"
    },
    optionB: {
        name: "Sabrina",
        shortName: "Sabrina"
    },
    
    // Questions avec leurs poids
    // L'ordre des options est mélangé pour éviter un biais gauche/droite
    questions: [
        {
            id: 1,
            text: "En fin de journée tu préfères :",
            weight: 2,
            optionA: {
                title: "Rentrer, te poser tranquille",
                description: "Douche, repas, série"
            },
            optionB: {
                title: "Mettre de la musique et avancer sur un projet",
                description: "Projet perso, idée, plan créatif"
            }
        },
        {
            id: 2,
            text: "Le week-end idéal :",
            weight: 2,
            optionA: {
                title: "Voir du monde, bouger",
                description: "Activités créatives, vie sociale"
            },
            optionB: {
                title: "Sport, balade, routine calme",
                description: "Tranquillité et bien-être"
            }
        },
        {
            id: 3,
            text: "Tu es attiré par quelqu'un plutôt :",
            weight: 1,
            optionA: {
                title: "Fiable, régulière, structurée",
                description: "Personne disciplinée"
            },
            optionB: {
                title: "Spontanée, imaginative, flexible",
                description: "Personne inspirée"
            }
        },
        {
            id: 4,
            text: "À la maison, elle serait plus du genre à :",
            weight: 2,
            optionA: {
                title: "Dessiner, écrire, tester des idées",
                description: "Projets créatifs"
            },
            optionB: {
                title: "Faire du sport / bien-être",
                description: "Routine santé"
            }
        },
        {
            id: 5,
            text: "L'énergie que tu préfères chez quelqu'un :",
            weight: 2,
            optionA: {
                title: "Apaisante, stable, rassurante",
                description: "Énergie calme"
            },
            optionB: {
                title: "Vivante, expressive, stimulante",
                description: "Énergie dynamique"
            }
        },
        {
            id: 6,
            text: "Elle recharge ses batteries comment :",
            weight: 1,
            optionA: {
                title: "En parlant, créant, ou voyant du monde",
                description: "Vie sociale et expression"
            },
            optionB: {
                title: "Temps seule, calme, peu de bruit",
                description: "Solitude ressourçante"
            }
        },
        {
            id: 7,
            text: "Relation idéale pour toi :",
            weight: 2,
            optionA: {
                title: "Stable, simple, prévisible",
                description: "Sécurité et tranquillité"
            },
            optionB: {
                title: "Dynamique, stimulante",
                description: "Nouveauté et mouvement"
            }
        },
        {
            id: 8,
            text: "Tu es plus attiré par quelqu'un qui :",
            weight: 2,
            optionA: {
                title: "A une activité créative",
                description: "Dessin, musique, écriture, photo..."
            },
            optionB: {
                title: "A une routine sport / santé",
                description: "Performance physique"
            }
        },
        {
            id: 9,
            text: "Soirée série à deux :",
            weight: 1,
            optionA: {
                title: "On regarde en silence",
                description: "Moment calme et posé"
            },
            optionB: {
                title: "On commente, on rigole, on parle pendant",
                description: "Échange vivant"
            }
        },
        {
            id: 10,
            text: "Soirée à deux :",
            weight: 1,
            optionA: {
                title: "Musique, ambiance, discussion, jeux",
                description: "Soirée animée"
            },
            optionB: {
                title: "Repas simple + film posé",
                description: "Tranquillité à deux"
            }
        },
        {
            id: 11,
            text: "Tu es plus attiré par :",
            weight: 1,
            optionA: {
                title: "Quelqu'un qui prend de la place socialement",
                description: "Présence charismatique"
            },
            optionB: {
                title: "Quelqu'un de discret",
                description: "Sans besoin d'attention"
            }
        },
        {
            id: 12,
            text: "Activité à deux préférée :",
            weight: 2,
            optionA: {
                title: "Sortie nature / balade / sport",
                description: "Activités extérieures"
            },
            optionB: {
                title: "Cuisiner et tester des recettes",
                description: "Créer à la maison"
            }
        },
        {
            id: 13,
            text: "Tu préfères quelqu'un qui :",
            weight: 1,
            optionA: {
                title: "Aime s'exprimer et partager ses idées",
                description: "Communication active"
            },
            optionB: {
                title: "Aime la simplicité et le calme",
                description: "Tranquillité d'esprit"
            }
        },
        {
            id: 14,
            text: "Vacances idéales :",
            weight: 1,
            optionA: {
                title: "Ville, cafés, activités, ambiance",
                description: "Vie urbaine"
            },
            optionB: {
                title: "Nature, calme, lac / montagne",
                description: "Ressourcement naturel"
            }
        },
        {
            id: 15,
            text: "Style vestimentaire :",
            weight: 1,
            optionA: {
                title: "Simple, confortable, naturel",
                description: "Look décontracté"
            },
            optionB: {
                title: "Soigné, stylé, looks travaillés",
                description: "Attention aux détails"
            }
        },
        {
            id: 16,
            text: "Réseaux sociaux :",
            weight: 1,
            optionA: {
                title: "Partage souvent, stories, posts",
                description: "Présence active"
            },
            optionB: {
                title: "Plutôt discret, peu de posts",
                description: "Profil bas"
            }
        },
        {
            id: 17,
            text: "Rythme de vie :",
            weight: 1,
            optionA: {
                title: "Spontané, ça bouge",
                description: "Improvisation"
            },
            optionB: {
                title: "Structuré, planifié",
                description: "Organisation"
            }
        },
        {
            id: 18,
            text: "Énergie qui t'attire le plus :",
            weight: 2,
            optionA: {
                title: "Naturelle, posée, \"girl next door\"",
                description: "Simplicité authentique"
            },
            optionB: {
                title: "Solaire, expressive, \"star vibe\"",
                description: "Énergie rayonnante"
            }
        },
        {
            id: 19,
            text: "Au final, tu te vois plus avec quelqu'un :",
            weight: 3,
            optionA: {
                title: "Posée, stable, fiable",
                description: "Sécurité et tranquillité"
            },
            optionB: {
                title: "Créative, expressive, passionnée",
                description: "Vie intense et inspirante"
            }
        },
        {
            id: 20,
            text: "Tu es plus attiré par quelle taille chez une femme ?",
            weight: 1,
            optionA: {
                title: "Plutôt taille moyenne",
                description: "Autour de 1m60"
            },
            optionB: {
                title: "Plutôt petite",
                description: "Autour de 1m50"
            }
        },
        {
            id: 21,
            text: "Silhouette qui t'attire le plus :",
            weight: 2,
            optionA: {
                title: "Athlétique avec des formes",
                description: "Sportive et tonique"
            },
            optionB: {
                title: "Fine et légère",
                description: "Silhouette élancée"
            }
        },
        {
            id: 22,
            text: "D'après l'astrologie chinoise, tu es plus attiré par quel type de signe ?",
            weight: 1,
            optionA: {
                title: "Le Buffle",
                description: "Stable, fiable, travailleur, ancré"
            },
            optionB: {
                title: "Le Lapin",
                description: "Sensible, créatif, sociable, expressif"
            }
        },
        {
            id: 23,
            text: "Quelle vibe t'attire le plus ?",
            weight: 3,
            hasImage: true,
            optionA: {
                title: "Cette vibe",
                description: "",
                image: "images/sydney.jpg"
            },
            optionB: {
                title: "Cette vibe",
                description: "",
                image: "images/sabrina.jpg"
            }
        }
    ],
    
    results: {
        winnerA: "🎯 Tu préfères l'énergie de Sydney !",
        winnerB: "✨ Tu préfères l'énergie de Sabrina !",
        tie: "⚖️ Égalité parfaite ! Tu aimes les deux vibes"
    }
};
