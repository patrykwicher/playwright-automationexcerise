import { expect } from '@playwright/test';

export default class SingleProductPage {
  constructor(page) {
    this.page = page;
    this.productImage = page.locator('//img[@src="/get_product_picture/1"]');
    this.productName = page.getByRole('heading', { name: 'Blue Top' });
    this.productCategory = page.locator('p', { hasText: 'Category:' });
    this.productPrice = page.getByText('Rs. 500');
    this.productAvailability = page.getByText('Availability: ');
    this.productCondition = page.getByText('Condition: ');
    this.productQuantity = page.locator('#quantity');
    this.addToCart = page.getByRole('button', { name: 'Add to cart'});
  }

  async expectDetailsAreVisible() {
    await expect(this.productName).toBeVisible();
    await expect(this.productCategory).toBeVisible();
    await expect(this.productPrice).toBeVisible();
    await expect(this.productAvailability).toBeVisible();
    await expect(this.productCondition).toBeVisible();
  }

  async increaseQuantity(quantity) {
    await this.productQuantity.fill(quantity);
  }

  async clickAddToCartButton() {
    await this.addToCart.click();
  }
}
