const { expect } = require("@playwright/test");

exports.RegisterPage = class RegisterPage {
    constructor(registerContent) {
        this.content = registerContent;
    }
    async navigate() {
        await this.content.page.goto(this.content.path);
        await expect(this.content.signUpLabel).toHaveText("Sign up");
    }

    async fillRegistrationForm(user) {
        const { user_name, email, password } = user;
        await this.content.userNameInput.fill(user_name);
        await this.content.emailInput.fill(email);
        await this.content.passwordInput.fill(password);
    }

    async clickOnSigUp() {
        await this.content.signUpButton.click();
    }

    async createAccount(user) {
        await this.fillRegistrationForm(user);
        await this.clickOnSigUp();
    }
};
