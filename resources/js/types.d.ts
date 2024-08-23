import * as CookieConsent from "vanilla-cookieconsent";

declare module 'alpinejs' {
    export interface Stores {
        cookieConsent: {
            acceptedService: typeof CookieConsent.acceptedService,
        }
    }
}
