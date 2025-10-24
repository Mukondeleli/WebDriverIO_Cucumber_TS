class CartPage {
   async getCartItem(): Promise<string> {
    const item = await $('.cart_item_label .inventory_item_name');

    if (!await item.isExisting()) {
        //throw new Error('Cart is empty');
        return '';
    }

    const text = await item.getText();
    const result = Array.isArray(text) ? text.join(' ') : text;

    // Return trimmed result (could still be empty string)
    return result.trim();
}


    async removeProduct(productName: string) {
        const removeButton = await $(`//*[text()="${productName}"]/ancestor::div[@class='cart_item']//button`);
        await removeButton.click();
        //await browser.pause(3000);
    }
}

export default new CartPage();
