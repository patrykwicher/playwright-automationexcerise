import { test, expect } from "@playwright/test";
import HomePage from "../pages/HomePage";
import NavBar from "../pages/NavBar";
import ConsentModal from "../pages/ConsentModal";

test.describe('"Test Cases Page" test', () => {
  test.beforeEach(async ({ page }) => {
    const consentModal = new ConsentModal(page);

    await page.goto("https://automationexercise.com/");
    await consentModal.clickConsentButton();
  });

  test("Verify Test Cases Page", async ({ page }) => {
    const homePage = new HomePage(page);
    const navBar = new NavBar(page);

    await expect(page.url()).toBe('https://automationexercise.com/');

    await navBar.clickTestCasesButton();
    await expect(page.url()).toBe('https://automationexercise.com/test_cases');
  });
});
