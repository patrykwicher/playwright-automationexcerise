import { test, expect } from "@playwright/test";
import ConsentModal from "../pages/ConsentModal";
import HomePage from "../pages/HomePage";
import NavBar from "../pages/NavBar";
import ProductsPage from "../pages/ProductsPage";
import ModalProdAddedToCart from "../pages/ModalProdAddedToCart";
import CartPage from "../pages/CartPage";

test.describe("Cart tests", () => {
  test.beforeEach(async ({ page }) => {
    const consentModal = new ConsentModal(page);

    await page.goto("https://automationexercise.com/");
    await consentModal.clickConsentButton();
  });

  test('Add Products in Cart', async ({ page }) => {
    const homePage = new HomePage(page);
    const navBar = new NavBar(page);
    const productsPage = new ProductsPage(page);
    const modalProdAdded = new ModalProdAddedToCart(page);
    const cartPage = new CartPage(page);

    await expect(homePage.carouselSlider).toBeVisible();
    await navBar.clickProductsButton();

    await productsPage.allProducts.first().hover();
    await expect(productsPage.addToCartOverlayButtons.first()).toBeVisible();
    await productsPage.clickAddToCartFirstProduct();

    await expect(modalProdAdded.continueShoppingButton).toBeVisible();
    await modalProdAdded.clickContinueShoppingButton();

    await productsPage.allProducts.nth(1).hover();
    await productsPage.clickAddToCart2ndProduct();

    await expect(modalProdAdded.continueShoppingButton).toBeVisible();
    await modalProdAdded.clickViewCartButton();

    await expect(cartPage.productHeader).toHaveCount(2)
    await expect(cartPage.productPrice.first()).toHaveText('Rs. 500')
    await expect(cartPage.productQuantity.first()).toHaveText('1');

    await expect(cartPage.productPrice.nth(1)).toHaveText('Rs. 400')
    await expect(cartPage.productQuantity.nth(1)).toHaveText('1');
  })
});
