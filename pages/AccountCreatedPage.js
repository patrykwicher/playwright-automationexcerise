export default class AccountCreatedPage {
    constructor(page) {
        this.page = page;
        this.accountCreatedHeader = page.getByRole('heading', { name: 'Account Created!' });
        this.continueButton = page.getByTestId('continue-button');
    }

    async clickContinueButton() {
        await this.continueButton.click();
    }
}