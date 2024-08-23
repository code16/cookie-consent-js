<?php

return [
    'consent_bar' => [
        'title' => 'Gestion des cookies',
        'message' => 'Nous utilisons des cookies pour améliorer votre expérience de navigation, personnaliser le contenu et les publicités, offrir des fonctionnalités de réseaux sociaux et analyser notre trafic. En cliquant sur "Accepter tous les cookies", vous consentez à leur utilisation. Vous pouvez personnaliser vos préférences en cliquant sur "Paramétrer les cookies". Pour en savoir plus, consultez notre Politique de Confidentialité.',
        'manage_button' => 'Paramétrer les cookies',
        'reject_button' => 'Refuser',
        'accept_button' => 'Accepter',
    ],
    
    'manage_modal' => [
        'title' => 'Paramétrer les cookies utilisés sur ce site',
        'description' => '',

        'save_button' => 'Sauvegarder',
        'accept_all_button' => 'Tout accepter',
        'reject_all_button' => 'Tout refuser',
        'close_button' => 'Fermer',
        
        'columns' => [
            'cookie_name' => 'Nom',
            'description' => 'Description',
            'lifetime' => 'Durée de vie',
        ],
        'categories' => [
            'system' => [
                'title' => 'Cookies requis pour la navigation',
                'description' => "Ces cookies sont techniques et nécessaires au fonctionnement du site.",
            ],
            'analytics' => [
                'title' => 'Cookies de suivi statistique',
                'description' => "Ces cookies permettent de suivre votre progression sur le site, ce qui nous permet d’améliorer son fonctionnement ensuite.",
            ],
        ],
    ],
];
