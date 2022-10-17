const { expect } = require("@playwright/test");

/**
 * User Home Page
 */
exports.UserHomePage = class UserHomePage {
    /**
     * Initialize the content of the page.
     *
     * @param {Object} userHomeContent - UserHomePageContent
     */
    constructor(userHomeContent) {
        this.content = userHomeContent;
        this.path = "#";
    }

    /**
     * Assert if the given user is displayed in home page.
     *
     * @param {string} userName - User name.
     */
    async checkUserIsLogin(userName) {
        await expect(this.content.yourFeedLink).toBeVisible();
        await expect(this.content.userLink).toHaveText(userName);
    }
};
