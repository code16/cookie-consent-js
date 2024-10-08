<?php

namespace Code16\CookieConsent;

use Code16\CookieConsent\View\Components\CookiesAllowed;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class CookieConsentServiceProvider extends ServiceProvider
{

    public function boot()
    {
        $this->publishes([
            __DIR__.'/../config/cookie-consent.php' => config_path('cookie-consent.php'),
        ], 'config');

        $this->publishes([
            __DIR__.'/../resources/views' => base_path('resources/views/vendor/cookie-consent'),
        ], 'views');

        $this->publishes([
            __DIR__.'/../resources/lang' => base_path('lang/vendor/cookie-consent'),
        ], 'lang');

        $this->publishes([
            __DIR__.'/../dist' => public_path('vendor/cookie-consent'),
            __DIR__.'/../resources/js/types' => public_path('vendor/cookie-consent/types'),
        ], 'assets');

        $this->loadTranslationsFrom(__DIR__ . '/../resources/lang', 'cookie-consent');

        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'cookie-consent');
        
        Blade::componentNamespace('Code16\\CookieConsent\\View\\Components', 'cookie-consent');
        Blade::component('cookies-allowed', CookiesAllowed::class);
    }

    public function register()
    {
        $this->mergeConfigFrom(__DIR__.'/../config/cookie-consent.php', 'cookie-consent');
    }
}
