const { expect } = require("@playwright/test");

/**
 * Register Page Object Model
 * @module pages/register_page
 */
exports.RegisterPage = class RegisterPage {
    /**
     * Initialize the content of the register page.
     *
     * @param {module:page_content/register_content} registerContent - Instance of Register content class
     */
    constructor(registerContent) {
        this.content = registerContent;
        this.path = "#/register";
    }

    /**
     * Navigate to the register page.
     */
    async navigate() {
        await this.content.page.goto(this.path);
        await expect(this.content.signUpLabel).toHaveText("Sign up");
    }

    /**
     * Fill the form to register a new user.
     *
     * @param {module:base/models~User} user - User information
     */
    async fillRegistrationForm(user) {
        const { user_name, email, password } = user;
        await this.content.userNameInput.fill(user_name);
        await this.content.emailInput.fill(email);
        await this.content.passwordInput.fill(password);
    }

    /**
     * Click on the sign up button
     */
    async clickOnSigUp() {
        await this.content.signUpButton.click();
    }

    /**
     * Creates an account with the given user.
     *
     * @param {module:base/models~User} user - User information
     */
    async createAccount(user) {
        await this.fillRegistrationForm(user);
        await this.clickOnSigUp();
    }

    /**
     * Click on have an account link.
     */
    async clickOnHaveAnAccount() {
        await this.content.haveAnAccountLink.click();
    }
};
