
@php
    $languages = collect(config('cookie-consent.locales'))->mapWithKeys(function ($locale) {
        return [
            $locale => [
                'consent_modal' => [
                    'title' => __('cookie-consent::texts.consent_bar.title', [], $locale),
                    'description' => sprintf('%s <button type="button" data-cc="c-settings" class="cc-link">%s</button>',
                        __('cookie-consent::texts.consent_bar.message', [], $locale),
                        __('cookie-consent::texts.consent_bar.manage_button', [], $locale),
                    ),
                    'primary_btn' => [
                        'text' => __('cookie-consent::texts.consent_bar.accept_button', [], $locale),
                        'role' => 'accept_all'
                    ],
                    'secondary_btn' => [
                        'text' => __('cookie-consent::texts.consent_bar.reject_button', [], $locale),
                        'role' => 'accept_necessary'
                    ],
                ],
                'settings_modal' => [
                    'title' => __('cookie-consent::texts.manage_modal.title', [], $locale),
                    'save_settings_btn' => __('cookie-consent::texts.manage_modal.save_button', [], $locale),
                    'accept_all_btn' => __('cookie-consent::texts.manage_modal.accept_all_button', [], $locale),
                    'reject_all_btn' => __('cookie-consent::texts.manage_modal.reject_all_button', [], $locale),
                    'close_btn_label' => __('cookie-consent::texts.manage_modal.close_button', [], $locale),
                    'cookie_table_headers' => [
                        ['col1' =>  __('cookie-consent::texts.manage_modal.columns.cookie_name', [], $locale)],
                        ['col2' =>  __('cookie-consent::texts.manage_modal.columns.domain', [], $locale)],
                        ['col3' =>  __('cookie-consent::texts.manage_modal.columns.lifetime', [], $locale)],
                    ],
                    'blocks' => collect([
                        [
                            'title' => '',
                            'description' => __('cookie-consent::texts.manage_modal.description', [], $locale)
                        ]
                    ])->merge(collect(config('cookie-consent.categories'))->map(fn ($category, $key) => [
                        'title' => __("cookie-consent::texts.manage_modal.categories.$key.title", [], $locale),
                        'description' => __("cookie-consent::texts.manage_modal.categories.$key.description", [], $locale),
                        'cookie_table' => collect(value($category['cookies']))->map(fn ($cookie) => [
                            'col1' => $cookie['name'],
                            'col2' => null,
                            'col3' => \Carbon\CarbonInterval::createFromDateString($cookie['lifetime'])
                                ->setLocalTranslator(\Carbon\Translator::get(app()->getLocale()))
                                ->forHumans(),
                        ]),
                        'toggle' => collect([
                            'value' => $key,
                            'enabled' => true,
                            'readonly' => $category['required'] ?? false,
                        ]),
                    ]))->values(),
                ],
            ],
        ];
    });
@endphp


<script>
    window.cookieConsentConfig = {
        current_lang: @json(app()->getLocale()),
        page_scripts: true,

        languages: @json($languages),
        cookie_name: @json(config('cookie-consent.cookie_name')),
        cookie_expiration: @json(config('cookie-consent.cookie_lifetime_in_days')),
        gui_options: {
            consent_modal: {
                layout: 'box',
                position: 'bottom right',
                transition: 'slide'
            },
        },
    }
</script>
<script src="{{ url(mix('/cookie-consent.js', '/vendor/cookie-consent')) }}"></script>
