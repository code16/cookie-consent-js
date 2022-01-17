import 'vanilla-cookieconsent';

window.cookieconsent = initCookieConsent();

const showSettings = cookieconsent.showSettings;
cookieconsent.showSettings = delay => {
    showSettings(delay);
    return false;
};

const config = window.cookieConsentConfig;
cookieconsent.run({
    ...config,
    languages: Object.values(config.languages).map(lang => {
        lang.settings_modal.blocks.forEach(block => {
            block.cookie_table = block.cookie_table?.map(row => ({
                ...row,
                col2: row.col2 ?? location.hostname,
            }));
        });
        return lang;
    }),
});
