import { test, expect } from '@playwright/test';
import NavBar from '../pages/NavBar';
import HomePage from '../pages/HomePage';
import ConsentModal from '../pages/ConsentModal';
import LoginPage from '../pages/LoginPage'; 
import userData from '../data/userData';
import SignupPage from '../pages/SignupPage';
import AccountCreatedPage from '../pages/AccountCreatedPage';
import AccountDeletedPage from '../pages/AccountDeletedPage';

test.describe('Register and login tests', () => {
    test.beforeEach(async ({ page }) => {
        const consentModal = new ConsentModal(page);

        await page.goto('https://automationexercise.com/');
        await consentModal.clickConsentButton();
    });

    test('Register new user and delete it', async ({ page }) => {
        const homePage = new HomePage(page);
        const navBar = new NavBar(page);
        const loginPage = new LoginPage(page);
        const signupPage = new SignupPage(page);
        const accountCreatedPage = new AccountCreatedPage(page);
        const accountDeletedPage = new AccountDeletedPage(page);
        
        await expect(homePage.carouselSlider).toBeVisible();

        await navBar.clickSignupLoginLink();
        
        await expect(loginPage.newUserHeader).toBeVisible();
        await loginPage.signup(userData.name, userData.email);
        await loginPage.clickSignupButton();

        await expect(signupPage.enterAccountInfoHeader).toBeVisible();
        await signupPage.setSignupForm(userData);
        await signupPage.clickCreateAccountButton();

        await expect(accountCreatedPage.accountCreatedHeader).toBeVisible();
        await accountCreatedPage.clickContinueButton();

        await expect(navBar.loggedInAsUsername).toBeVisible();
        await navBar.clickDeleteAccountLink();
        
        await expect(accountDeletedPage.accountDeletedHeader).toBeVisible();
        await accountDeletedPage.clickContinueButton();

        await expect(page.url()).toBe('https://automationexercise.com/');
    });
});