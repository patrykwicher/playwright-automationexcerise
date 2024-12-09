export default class LoginPage {
    constructor(page) {
        this.page = page;
        this.newUserHeader = page.getByRole('heading', { name: 'New User Signup!' });
        this.name = page.getByTestId('signup-name');
        this.email = page.getByTestId('signup-email');
        this.signupButton = page.getByTestId('signup-button');
    }

    async setNameInput(name) {
        await this.name.fill(name);
    }

    async setEmailInput(email) {
        await this.email.fill(email);
    }

    async signup(name, email) {
        await this.setNameInput(name);
        await this.setEmailInput(email);
    }

    async clickSignupButton() {
        await this.signupButton.click();
    }
}