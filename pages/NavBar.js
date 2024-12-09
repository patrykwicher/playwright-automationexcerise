import userData from "../data/userData";

export default class NavBar {
    constructor(page) {
        this.page = page;
        this.signupLoginLink = page.locator('a', { hasText: ' Signup / Login' });
        this.loggedInAsUsername = page.locator('a', { hasText: ` Logged in as ${userData.name}` })
        this.deleteAccountLink = page.locator('a', { hasText: ' Delete Account' });
    }

    async clickSignupLoginLink() {
        await this.signupLoginLink.click();
    }

    async clickDeleteAccountLink() {
        await this.deleteAccountLink.click();
    }
}