

{{ (new \Illuminate\Foundation\Vite)
        ->useHotFile('')
        ->useBuildDirectory('/vendor/cookie-consent')
        ->withEntrypoints(['resources/js/index.js'])
        ->useScriptTagAttributes(['id' => 'cookie-consent-script'])
}}

@php $cacheKey = 'cookie-consent-script.'.app()->getLocale(); @endphp

@if($cachedScript = cache()->get($cacheKey))
    {!! $cachedScript !!}
@else
    @php
        /** https://cookieconsent.orestbida.com/reference/configuration-reference.html#language-translations */
        $translations = collect(config('cookie-consent.locales'))->mapWithKeys(function ($locale) {
            return [
                $locale => [
                    'consentModal' => [
                        'title' => __('cookie-consent::texts.consent_bar.title', [], $locale),
                        'description' =>  __('cookie-consent::texts.consent_bar.message', [], $locale),
                        'acceptAllBtn' => __('cookie-consent::texts.consent_bar.accept_button', [], $locale),
                        'acceptNecessaryBtn' =>  __('cookie-consent::texts.consent_bar.reject_button', [], $locale),
                        "showPreferencesBtn" => __('cookie-consent::texts.consent_bar.manage_button', [], $locale)
                    ],
                    'preferencesModal' => [
                        'title' => __('cookie-consent::texts.manage_modal.title', [], $locale),
                        'acceptAllBtn' => __('cookie-consent::texts.manage_modal.accept_all_button', [], $locale),
                        'acceptNecessaryBtn' => __('cookie-consent::texts.manage_modal.reject_all_button', [], $locale),
                        'savePreferencesBtn' => __('cookie-consent::texts.manage_modal.save_button', [], $locale),
                        'closeIconLabel' => __('cookie-consent::texts.manage_modal.close_button', [], $locale),
                        'sections' => collect([
                            __('cookie-consent::texts.manage_modal.description', [], $locale) ? [
                                'title' => '',
                                'description' => __('cookie-consent::texts.manage_modal.description', [], $locale)
                            ] : null,
                            ...collect(config('cookie-consent.categories'))->map(fn ($category, $key) => [
                                'title' => __("cookie-consent::texts.manage_modal.categories.$key.title", [], $locale),
                                'description' => __("cookie-consent::texts.manage_modal.categories.$key.description", [], $locale),
                                'linkedCategory' => $key,
                                'cookieTable' => [
                                    'headers' => [
                                        'name' =>  __('cookie-consent::texts.manage_modal.columns.cookie_name', [], $locale),
                                        'description' =>  __('cookie-consent::texts.manage_modal.columns.description', [], $locale),
                                        'duration' =>  __('cookie-consent::texts.manage_modal.columns.lifetime', [], $locale),
                                    ],
                                    'body' => collect($category['services'])->pluck('cookies')->flatten(1)->map(fn ($cookie) => [
                                        'name' =>  $cookie['name'],
                                        'description' => '',
                                        'duration' => str($cookie['lifetime'])->isMatch('/^\d/')
                                            ? \Carbon\CarbonInterval::createFromDateString($cookie['lifetime'])
                                                ->setLocalTranslator(\Carbon\Translator::get(app()->getLocale()))
                                                ->forHumans()
                                            : $cookie['lifetime'],
                                    ]),
                                ]
                            ])->values(),
                        ])->whereNotNull()->values(),
                    ],
                ],
            ];
        });
    @endphp

    <script>
        document.querySelector('#cookie-consent-script').addEventListener('load', () => {
            window.CookieConsent.run({
                cookie: {
                    name: '{{ config('cookie-consent.cookie_name') }}',
                    expiresAfterDays: {{ config('cookie-consent.cookie_lifetime_in_days') }}
                },
                categories: {{ Js::from(config('cookie-consent.categories')) }},
                language: {
                    default: '{{ config('app.locale') }}',
                    translations: {{ Js::from($translations) }}
                },
                disablePageInteraction: {{ JS::from(config('cookie-consent.modal')) }},
                guiOptions: {
                    consentModal: {
                        position: '{{ config('cookie-consent.modal') ? 'middle center' : 'bottom right' }}',
                    }
                },
                revision: {{ config('cookie-consent.revision') }}
            });
        });
        document.addEventListener('alpine:init', () => {
            window.Alpine.store('cookieConsent', {
                updated: Date.now(),
                acceptedService(serviceName, categoryName) {
                    return this.updated && window.CookieConsent.acceptedService(serviceName, categoryName);
                },
                init() {
                    window.addEventListener('cc:onFirstConsent', () => {
                        this.updated = Date.now();
                    });
                    window.addEventListener('cc:onChange', () => {
                        this.updated = Date.now();
                    });
                },
            });
        });
        window.addEventListener('hashchange', e => {
            if(location.hash === '#manage-cookies') {
                history.replaceState(null, '', '#');
                window.CookieConsent.showPreferences();
            }
        });
    </script>

    @php(cache()->set($cacheKey, trim(ob_get_contents()), now()->addHours(1)))
@endif

