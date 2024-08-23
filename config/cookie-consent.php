<?php

return [
    'enabled' => env('COOKIE_CONSENT_ENABLED', true),
    
    'cookie_name' => 'cc_cookie',
    'cookie_lifetime_in_days' => 182,
    
    'locales' => ['fr'],
    
    'modal' => false,
    
    'revision' => 0, // increment this if services are added / modified

    'categories' => [
        'system' => [
            'readOnly' => true,
            'services' => [
                [
                    'cookies' => [
                        [
                            'name' => env(
                                'SESSION_COOKIE',
                                Str::slug(env('APP_NAME', 'laravel'), '_').'_session'
                            ),
                            'lifetime' => env('SESSION_LIFETIME', 120).' minutes'
                        ],
                        [
                            'name' => 'cc_cookie',
                            'lifetime' => '182 days'
                        ],
                    ],
                ]
            ],
        ],
    ],
];
