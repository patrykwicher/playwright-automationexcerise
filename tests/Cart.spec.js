import { test, expect } from "@playwright/test";
import ConsentModal from "../pages/ConsentModal";
import HomePage from "../pages/HomePage";
import NavBar from "../pages/NavBar";
import ProductsPage from "../pages/ProductsPage";
import ModalProdAddedToCart from "../pages/ModalProdAddedToCart";
import CartPage from "../pages/CartPage";
import SingleProductPage from "../pages/SingleProductPage";

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

  test('Verify Product quantity in Cart', async ({ page }) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    const modalProdAdded = new ModalProdAddedToCart(page);
    const cartPage = new CartPage(page);
    const singleProductPage = new SingleProductPage(page);
    let nthProdIndex = 3;
    const productQuantity = '4';

    await expect(homePage.carouselSlider).toBeVisible();

    if(nthProdIndex > await productsPage.viewProductButtons.count()) {
      nthProdIndex = 0;
    }

    await productsPage.viewProductButtons.nth(nthProdIndex).scrollIntoViewIfNeeded();
    await expect(productsPage.viewProductButtons.nth(nthProdIndex)).toBeVisible();

    await productsPage.viewNthProduct(nthProdIndex);  
    await expect(page.url()).toBe(`https://automationexercise.com/product_details/${nthProdIndex+1}`)

    await singleProductPage.increaseQuantity(productQuantity);
    await singleProductPage.clickAddToCartButton();

    await expect(modalProdAdded.continueShoppingButton).toBeVisible();
    await modalProdAdded.clickViewCartButton();

    await expect(cartPage.productQuantity).toHaveText(productQuantity);
  })
});
