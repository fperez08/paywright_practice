/**
 * Login Page
 */
exports.LoginPage = class LoginPage {
    /**
     * Initialize the content of the page.
     *
     * @param {Object} userHomeContent - LoginPageContent
     */
    constructor(userHomeContent) {
        this.content = userHomeContent;
        this.path = "#/login";
    }

    /**
     * Navigate to the sig in page.
     */
    async navigate() {
        this.content.page.goto(this.path);
    }

    /**
     * Log in with the given credentials.
     *
     * @param {string} email - User email.
     * @param {string} password - User password.
     */
    async login(email, password) {
        await this.content.emailInput.fill(email);
        await this.content.passwordInput.fill(password);
        await this.content.signInButton.click();
    }
};
