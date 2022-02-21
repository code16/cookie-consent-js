import 'vanilla-cookieconsent';

window.cookieconsent = initCookieConsent();

const showSettings = cookieconsent.showSettings;
cookieconsent.showSettings = delay => {
    showSettings(delay);
    return false;
};

cookieconsent.run(getConfig());


function getConfig() {
    const config = window.cookieConsentConfig;
    Object.values(config.languages).forEach(lang => {
        lang.settings_modal.blocks.forEach(block => {
            block.cookie_table = block.cookie_table?.map(row => ({
                ...row,
                col2: row.col2 ?? location.hostname,
            }));
        });
    });
    return config;
}
