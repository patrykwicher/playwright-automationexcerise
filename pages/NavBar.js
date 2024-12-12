import userData from "../data/userData";

export default class NavBar {
    constructor(page) {
        this.page = page;
        this.signupLoginButton = page.locator('a', { hasText: ' Signup / Login' });
        this.loggedInAsUsername = page.locator('a', { hasText: ` Logged in as ${userData.name}` })
        this.deleteAccountButton = page.locator('a', { hasText: ' Delete Account' });
        this.logoutButton = page.locator('a', { hasText: ' Logout' });
        this.contactUsButton = page.locator('a', { hasText: ' Contact us' });
        this.homeButton = page.locator('a', { hasText: ' Home'});
        this.testCasesButton = page.locator('//li/a[@href="/test_cases"]');
    }

    async clickSignupLoginLink() {
        await this.signupLoginButton.click();
    }

    async clickDeleteAccountLink() {
        await this.deleteAccountButton.click();
    }

    async clickLogoutButton() {
        await this.logoutButton.click();
    }

    async clickContactUsButton() {
        await this.contactUsButton.click();
    }

    async clickHomeButton() {
        await this.homeButton.click();
    }

    async clickTestCasesButton() {
        await this.testCasesButton.click();
    }
}