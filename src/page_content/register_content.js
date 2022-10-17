/**
 * Register Page Web Elements
 */
exports.RegisterPageContent = class RegisterPageContent {
    /**
     * Initialize the web elements and the page.
     *
     * @param {Object} page - Browser page.
     */
    constructor(page) {
        this.page = page;
        this.userNameInput = page.locator("[placeholder='Username']");
        this.emailInput = page.locator("[placeholder='Email']");
        this.passwordInput = page.locator("[placeholder='Password']");
        this.signUpButton = page.locator("button:has-text('Sign up')");
        this.signUpLabel = page.locator("h1:has-text('Sign up')");
        this.haveAnAccountLink = page.locator("text=Have an account?");
    }
};
