<?php

return [
    'enabled' => env('COOKIE_CONSENT_ENABLED', true),
    
    'cookie_name' => 'cc_cookie',
    'cookie_lifetime_in_days' => 182,
    
    'locales' => ['fr'],

    'categories' => [
        'system' => [
            'required' => true,
            'cookies' => [
                [
                    'name' => config('session.cookie'),
                    'lifetime' =>config('session.lifetime') . ' minutes'
                ],
                [
                    'name' => config('cookie-consent.cookie_name'),
                    'lifetime' => config('cookie-consent.cookie_lifetime_in_days') . ' days'
                ],
            ],
        ],
    ],
];
