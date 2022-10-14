/**
 * Login Page Web Elements
 */
exports.LoginPageContent = class LoginPageContent {
    /**
     * Initialize the web elements and the page.
     *
     * @param {Object} page - Browser page.
     */
    constructor(page) {
        this.page = page;
        this.emailInput = page.locator("[placeholder='Email']");
        this.passwordInput = page.locator("[placeholder='Password']");
        this.signInButton = page.locator("button:has-text('Sign in')");
        this.signInLabel = page.locator("h1:has-text('Sign in')");
        this.errorMessage = page.locator("ul.error-messages >> li");
        this.needAnAccountLink = page.locator("text=Need an account?");
    }
};
