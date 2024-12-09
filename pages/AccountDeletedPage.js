export default class AccountCreatedPage {
    constructor(page) {
        this.page = page;
        this.accountDeletedHeader = page.getByRole('heading', { name: 'Account Deleted!' });
        this.continueButton = page.getByTestId('continue-button');
    }

    async clickContinueButton() {
        await this.continueButton.click();
    }
}