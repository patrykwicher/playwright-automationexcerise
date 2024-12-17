export default class Footer {
    constructor(page) {
        this.page = page;
        this.subscriptionHeader = page.getByRole('heading', { name: 'Subscription' });
        this.email = page.getByPlaceholder('Your email address');
        this.subscribeButton = page.locator('#subscribe');
        this.subscribedSuccessfully = page.locator('//div[@class="alert-success alert"]', { hasText: 'You have been successfully subscribed!' }); 
    }

    async setEmail(email) {
        await this.email.fill(email);
    }

    async clickSubscribeButton() {
        await this.subscribeButton.click();
    }

    async subscribe(userData) {
        await this.setEmail(userData.email);
        await this.clickSubscribeButton();
    }
}