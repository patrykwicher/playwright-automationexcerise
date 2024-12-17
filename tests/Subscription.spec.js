import { test, expect } from "@playwright/test";
import HomePage from "../pages/HomePage";
import Footer from "../pages/Footer";
import ConsentModal from "../pages/ConsentModal";
import userData from "../data/userData";

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
});
