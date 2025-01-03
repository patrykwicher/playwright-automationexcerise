import { test, expect } from "@playwright/test";
import HomePage from "../pages/HomePage";
import Footer from "../pages/Footer";
import ConsentModal from "../pages/ConsentModal";
import userData from "../data/userData";
import NavBar from "../pages/NavBar";

test.describe("Subcription test", () => {
  test.beforeEach(async ({ page }) => {
    const consentModal = new ConsentModal(page);

    await page.goto("https://automationexercise.com/");
    await consentModal.clickConsentButton();
  });

  test("Verify Subscription in home page", async ({ page }) => {
    const homePage = new HomePage(page);
    const footer = new Footer(page);

    await expect(homePage.carouselSlider).toBeVisible();
    await expect(footer.subscriptionHeader).toHaveText('Subscription');

    await footer.subscribe(userData);
    await expect(footer.subscribedSuccessfully).toBeVisible();
  });

  test('Verify Subscription in Cart page', async ({ page }) => {
    const homePage = new HomePage(page);
    const navBar = new NavBar(page);
    const footer = new Footer(page);

    await expect(homePage.carouselSlider).toBeVisible();
    await navBar.clickCartButton();

    await expect(footer.subscriptionHeader).toHaveText('Subscription');
    await footer.subscribe(userData);
    await expect(footer.subscribedSuccessfully).toBeVisible();
  })
});
