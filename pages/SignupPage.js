export default class SignupPage {
    constructor(page) {
        this.page = page;
        this.enterAccountInfoHeader = page.getByText('Enter Account Information');
        this.titleInput = page.locator('#id_gender1');
        this.password = page.getByLabel('password');
        this.dateDays = page.getByTestId('days');
        this.dateMonths = page.getByTestId('months'); 
        this.dateYears = page.getByTestId('years');
        this.newsletterCheckbox = page.getByLabel('Sign up for our newsletter!');
        this.specialOffersCheckbox = page.getByLabel('Receive special offers from our partners!');
        this.firstName = page.getByTestId('first_name');
        this.lastName = page.getByTestId('last_name');
        this.company = page.getByTestId('company');
        this.address1 = page.getByTestId('address');
        this.address2 = page.getByTestId('address2');
        this.country = page.getByTestId('country');
        this.state = page.getByTestId('state');
        this.city = page.getByTestId('city');
        this.zipcode = page.getByTestId('zipcode');
        this.mobileNumber = page.getByTestId('mobile_number');
        this.createAccountButton = page.getByTestId('create-account');
    }

    async setTitle() {
        await this.titleInput.click();
    }

    async setPassword(password) {
        await this.password.fill(password);
    }

    async setBirthDate() {
        await this.dateDays.selectOption('1');
        await this.dateMonths.selectOption('January');
        await this.dateYears.selectOption('2000');
    }

    async checkNewsletterCheckbox() {
        await this.newsletterCheckbox.check();
    }

    async checkSpecialOffersChecbox() {
        await this.specialOffersCheckbox.check();
    }

    async setFirstName(firstName) {
        await this.firstName.fill(firstName);
    }

    async setLastName(lastName) {
        await this.lastName.fill(lastName);
    }

    async setCompany(company) {
        await this.company.fill(company);
    }

    async setAddress1(address1) {
        await this.address1.fill(address1);
    }

    async setaddress2(address2) {
        await this.address2.fill(address2);
    }

    async setCountry(country) {
        await this.country.selectOption(country);
    }

    async setState(state) {
        await this.state.fill(state);
    }

    async setCity(city) {
        await this.city.fill(city);
    }

    async setZipcode(zipcode) {
        await this.zipcode.fill(zipcode);
    }

    async setMobileNumber(mobileNumber) {
        await this.mobileNumber.fill(mobileNumber);
    }

    async setSignupForm(userData) {
        await this.setTitle();
        await this.setPassword(userData.password);
        await this.setBirthDate();
        await this.checkNewsletterCheckbox();
        await this.checkSpecialOffersChecbox();
        await this.setFirstName(userData.firstName);
        await this.setLastName(userData.lastName);
        await this.setCompany(userData.company);
        await this.setAddress1(userData.address1);
        await this.setaddress2(userData.address2);
        await this.setCountry(userData.country);
        await this.setState(userData.state);
        await this.setCity(userData.city);
        await this.setZipcode(userData.zipcode);
        await this.setMobileNumber(userData.mobileNumber);
    }

    async clickCreateAccountButton() {
        await this.createAccountButton.click();
    }
}