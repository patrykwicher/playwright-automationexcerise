import { test, expect } from '@playwright/test';
import ConsentModal from '../pages/ConsentModal';
import HomePage from '../pages/HomePage';
import NavBar from '../pages/NavBar';
import ContactUsPage from '../pages/ContactUsPage';
import contactUsData from '../data/contactUsData';
import userData from '../data/userData';

test.describe('Contact Us page tests', () => {
    test.beforeEach(async ({ page }) => {
        const consentModal = new ConsentModal(page);

        await page.goto('https://automationexercise.com/');
        await consentModal.clickConsentButton();
    });

    test('Contact Us form', async ({ page }) => {
        const homePage = new HomePage(page);
        const navBar = new NavBar(page);
        const contactUsPage = new ContactUsPage(page);

        await expect(homePage.carouselSlider).toBeVisible();
        await navBar.clickContactUsButton();

        await expect(contactUsPage.getInTouchHeader).toHaveText('Get In Touch');
        //await contactUsPage.setContactUsForm(userData, contactUsData);

        page.on('dialog', async dialog => {
            await dialog.accept();
        });

        await contactUsPage.setContactUsForm(userData, contactUsData);
        await expect(contactUsPage.statusSuccess).toBeVisible();
        await contactUsPage.clickHomeButton();
        
        await expect(page.url()).toBe('https://automationexercise.com/');
    })
})