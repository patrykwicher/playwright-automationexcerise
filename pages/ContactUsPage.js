export default class ContactUsPage {
    constructor(page) {
        this.page = page;
        this.getInTouchHeader = page.getByRole('heading', { name: 'Get In Touch' });
        this.name = page.getByTestId('name');
        this.email = page.getByTestId('email');
        this.subject = page.getByTestId('subject');
        this.message = page.getByTestId('message');
        this.chooseFileButton = page.locator('input[name="upload_file"]');
        this.submit = page.getByTestId('submit-button');
        this.statusSuccess = page.locator('//div[@class="status alert alert-success"]'); 
        this.homeButton = page.locator('a[@class="btn btn-success"]');
    }

    async setName(name) {
        await this.name.fill(name);
    }

    async setEmail(email) {
        await this.email.fill(email);
    }

    async setSubject(subject) {
        await this.subject.fill(subject);
    }

    async setMessage(message) {
        await this.message.fill(message);
    }

    async chooseFile() {
        await this.chooseFileButton.click();
        await this.chooseFileButton.setInputFiles('C:/Users/patry/Projekty/Playwright/AutomationExcercise/files/blackSquare.jpg');
    }

    async clickSubmit() {
        await this.submit.click();
    }

    async setContactUsForm(userData, contactUsData) {
        await this.setName(userData.name);
        await this.setEmail(userData.email);
        await this.setSubject(contactUsData.subject);
        await this.setMessage(contactUsData.message);
        await this.chooseFile();
        await this.clickSubmit();
    }

    async clickHomeButton() {
        await this.homeButton.click();
    }
}