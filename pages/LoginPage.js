export default class LoginPage {
    constructor(page) {
        this.page = page;
        this.newUserHeader = page.getByRole('heading', { name: 'New User Signup!' });
        // Signup form
        this.signupName = page.getByTestId('signup-name');
        this.signupEmail = page.getByTestId('signup-email');
        this.signupButton = page.getByTestId('signup-button');
        this.emailExistsParagraph = page.locator('p', { hasText: 'Email Address already exist!' });
        // Login form
        this.loginToAccountHeader = page.getByRole('heading', { name: 'Login to your account' });
        this.loginEmailAddr = page.getByTestId('login-email');
        this.loginPassword = page.getByTestId('login-password');
        this.loginButton = page.getByTestId('login-button');
        this.loginIncorrectParagraph = page.getByText('Your email or password is incorrect!');
    }

    async setSignupName(name) {
        await this.signupName.fill(name);
    }

    async setSignupEmail(email) {
        await this.signupEmail.fill(email);
    }
    
    async clickSignupButton() {
        await this.signupButton.click();
    }

    async signup(userData) {
        await this.setSignupName(userData.name);
        await this.setSignupEmail(userData.email);
        await this.clickSignupButton();
    }

    async setLoginEmail(email) {
        await this.loginEmailAddr.fill(email);
    }

    async setLoginPassword(password) {
        await this.loginPassword.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async loginToAccount(userData) {
        await this.setLoginEmail(userData.email);
        await this.setLoginPassword(userData.password);
        await this.clickLoginButton();
    }
}