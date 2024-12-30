import { expect } from '@playwright/test';

export default class ProductsPage {
    constructor(page) {
        this.page = page;
        this.allProductsHeader = page.getByRole('heading', { name: 'All Products' });
        this.productsList = page.locator('.features_items');
        this.viewProductButtons = page.locator('//a', { hasText: 'View Product '});


        this.searchBar = page.getByPlaceholder('Search Product');
        this.searchButton = page.locator('#submit_search');
        this.searchedProductsHeader = page.getByRole('heading', { name: 'Searched Products' });
        this.numberOfProductsFound = page.locator('.single-products');
        this.addToCartOverlayButtons = page.locator('.overlay-content > .btn');
        this.allProducts = page.locator('.single-products');
    }

    async clickFirstProduct() {
        await this.viewProductButtons.first().click();
    }

    async searchProduct(product) {
        await this.searchBar.fill(product);
        await this.searchButton.click();
    }

    async clickAddToCartFirstProduct() {
        await this.addToCartOverlayButtons.first().click();
    }

    async clickAddToCart2ndProduct() {
        await this.addToCartOverlayButtons.nth(1).click();
    }
}