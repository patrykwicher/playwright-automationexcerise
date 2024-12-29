export default class CartPage {
    constructor(page) {
        this.page = page;
        this.productHeader = page.locator('//h4/a');
        this.productPrice = page.locator('.cart_price');
        this.productQuantity = page.locator('.cart_quantity');
    }
} 