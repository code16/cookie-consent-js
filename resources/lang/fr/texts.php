<?php

return [
    'consent_bar' => [
        'title' => 'Consentement au dépôt de cookies',
        'message' => 'Ce site nécessite l’utilisation de cookies pour fonctionner.',
        'manage_button' => 'Paramétrer',
        'reject_button' => 'Refuser',
        'accept_button' => 'Accepter',
    ],
    
    'manage_modal' => [
        'title' => 'Paramétrer les cookies utilisés sur ce site',
        'description' => 'Les cookies utilisés sur ce site sont listés ci-dessous :',

        'save_button' => 'Sauvegarder',
        'accept_all_button' => 'Tout accepter',
        'reject_all_button' => 'Tout refuser',
        'close_button' => 'Fermer',
        
        'columns' => [
            'cookie_name' => 'Nom',
            'domain' => 'Domaine',
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
