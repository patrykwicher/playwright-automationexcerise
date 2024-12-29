export default class ModalProdAddedToCart {
    constructor(page) {
        this.page = page;
        this.continueShoppingButton = page.getByRole('button', { name: 'Continue Shopping' });
        this.viewCartButton = page.locator('u', { hasText: 'View Cart' });
    }

    async clickContinueShoppingButton() {
        await this.continueShoppingButton.click();
    }

    async clickViewCartButton() {
        await this.viewCartButton.click();
    }
}