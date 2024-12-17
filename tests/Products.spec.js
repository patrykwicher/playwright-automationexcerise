import { test, expect } from "@playwright/test";
import ConsentModal from "../pages/ConsentModal";
import HomePage from "../pages/HomePage";
import NavBar from "../pages/NavBar";
import ProductsPage from "../pages/ProductsPage";

test.describe("Tests related to products", () => {
  test.beforeEach(async ({ page }) => {
    const consentModal = new ConsentModal(page);

    await page.goto("https://automationexercise.com/");
    await consentModal.clickConsentButton();
  });

  test('Verify All Products and product detail page', async ({ page }) => {
    const homePage = new HomePage(page);
    const navBar = new NavBar(page);
    const productsPage = new ProductsPage(page);

    await expect(homePage.carouselSlider).toBeVisible();
    await navBar.clickProductsButton();

    await expect(productsPage.allProductsHeader).toBeVisible();
    await expect(productsPage.productsList).toBeVisible();
    await productsPage.clickFirstProduct();

    await expect(page.url()).toBe('https://automationexercise.com/product_details/1');
    await productsPage.expectDetailsAreVisible();
  })

  test('Search Product', async ({ page }) => {
    const homePage = new HomePage(page);
    const navBar = new NavBar(page);
    const productsPage = new ProductsPage(page);
    const product = 'Top';
    let numberOfProductsFound = undefined;

    await expect(homePage.carouselSlider).toBeVisible();
    await navBar.clickProductsButton();

    await expect(productsPage.allProductsHeader).toBeVisible();
    await productsPage.searchProduct(product);

    await expect(productsPage.searchedProductsHeader).toBeVisible();
    numberOfProductsFound = await productsPage.numberOfProductsFound.count();

    await expect(productsPage.numberOfProductsFound).toHaveCount(numberOfProductsFound);
  })
});
