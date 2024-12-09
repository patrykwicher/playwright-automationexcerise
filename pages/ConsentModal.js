export default class ConsentModal {
    constructor(page) {
        this.page = page;
        this.consentButton = page.getByRole('button', { name: /Consent/i });
    }

    async clickConsentButton() {
        await this.consentButton.click();
    }
} 