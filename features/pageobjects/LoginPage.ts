class LoginPage {
    get username() { return $('#user-name'); }
    get password() { return $('#password'); }
    get loginButton() { return $('#login-button'); }

    async open() {
        await browser.url('https://www.saucedemo.com/');
    }

    async login(username: string, password: string) {
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.loginButton.click();
    }
}

export default new LoginPage();
