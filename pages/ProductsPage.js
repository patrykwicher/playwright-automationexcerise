import { expect } from '@playwright/test';

export default class ProductsPage {
    constructor(page) {
        this.page = page;
        this.allProductsHeader = page.getByRole('heading', { name: 'All Products' });
        this.productsList = page.locator('.features_items');
        this.firstProduct = page.locator('[href="/product_details/1"]');
        this.firstProductName = page.getByRole('heading', { name: 'Blue Top' });
        this.firstProductCategory = page.locator('p', { hasText: 'Category:' })
        this.firstProductPrice = page.getByText('Rs. 500'); 
        this.firstProductAvailability = page.getByText('Availability: ');
        this.firstProductCondition = page.getByText('Condition: ');
    }

    async clickFirstProduct() {
        await this.firstProduct.click();
    }

    async expectDetailsAreVisible() {
        await expect(this.firstProductName).toBeVisible();
        await expect(this.firstProductCategory).toBeVisible();
        await expect(this.firstProductPrice).toBeVisible();
        await expect(this.firstProductAvailability).toBeVisible();
        await expect(this.firstProductCondition).toBeVisible();
    }
}