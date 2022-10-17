const { expect } = require("@playwright/test");

/**Error Message Model */
exports.ErrorMessage = class ErrorMessage {
    /**
     * Initialize web elements and the browser page.
     *
     * @param {Object} page - Browser page.
     */
    constructor(page) {
        this.page = page;
        this.errorMessage = page.locator("ul.error-messages >> li");
    }

    /**
     * Assert if the error message element contains the given text.
     *
     * @param {string} text - Expect error message.
     */
    async messageContains(text) {
        await expect(this.errorMessage).toContainText(text);
    }
};
