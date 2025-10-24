class ProductPage {
    async addProductToCart(productName: string) {
        const product = await $(`//*[text()="${productName}"]/ancestor::div[@class='inventory_item']//button`);
        await product.click();
    }

    async openCart() {
        await $('.shopping_cart_link').click();
        //await browser.pause(3000);
    }
}

export default new ProductPage();
