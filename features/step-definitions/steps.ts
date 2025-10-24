import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from 'chai';
import CartPage from "../pageobjects/CartPage";
import LoginPage from "../pageobjects/LoginPage";
import ProductsPage from "../pageobjects/ProductsPage";

Given(/^user on SauceDemo login page$/,async () => {
	await LoginPage.open();
});


When(/^user log in with username "([^"]*)" and password "([^"]*)"$/, async(username: string, password: string) => {
	await LoginPage.login(username, password);
});


When(/^user add the "([^"]*)" to the cart$/, async(productName: string) => {
	 await ProductsPage.addProductToCart(productName);
});

Then(/^user should see the "([^"]*)" in the cart$/, async(productName: string) => {
	await ProductsPage.openCart();
    const productNames = await CartPage.getCartItem();
    expect(productNames).to.include(productName);
});

When(/^user remove the "([^"]*)" from the cart$/, async(productName: string) => {
	await CartPage.removeProduct(productName);
});

Then(/^the cart should be empty$/, async() => {
	const productNames = await CartPage.getCartItem();
    expect(productNames).to.be.empty;
});

