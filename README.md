# Cookie consent

## Setup
```bash
composer require code16/cookie-consent-js
```

**Required**: publish assets (add this in composer.json `post-autoload-dump` scripts)
```php
php artisan vendor:publish --provider='Code16\CookieConsent\CookieConsentServiceProvider' --tag=assets --force
```

You may publish the config file:

```php
php artisan vendor:publish --provider="Code16\CookieConsent\CookieConsentServiceProvider" --tag=config
```

And the lang file:

```php
php artisan vendor:publish --provider="Code16\CookieConsent\CookieConsentServiceProvider" --tag=lang
```

## Usage

In your blade layout
```blade
<head>
    {{-- ... --}}
    <x-cokie-consent::styles />
    <x-cookies-allowed category="analytics">
        <script>
          {{-- some injected cookies --}}
        </script>
    </x-cookies-allowed>
</head>

<body>
    {{-- end of the body --}}
    <x-cookie-consent::scripts />
</body>
```

Also you must declare the cookie category in `config/cookie-consent.php` as follow
```php
[
    'cookie_categories' => [
        'system' => [
            'required' => true,
            'cookies' => []
        ],
        'analytics' => [
            'cookies' => [
                ['name' => '_ga', 'lifetime' => '2 years'],
            ],
        ],
    ]
];
```

Categories marked as `required` are cannot be opt-out by the user.

To provide explanation texts in the manage dialog, add content to the lang file:
```php
[
    'manage_modal' => [
        'title' => 'Manage cookies',
        'description' => 'About cookies...',
        'categories' => [
            'system' => [
                'title' => 'System cookies',
                'description' => "Description text about system cookies",
            ],
            'analytics' => [
                'title' => 'Analytics cookies',
                'description' => "Description text about analytics cookies",
            ],
        ],
    ]
];
```

### Show the manage modal from a link (e.g. cookies page)
In the page:
```blade
   <a href="#" onclick="cookieconsent.showSettings()">Open manage cookies modal</a>
```
