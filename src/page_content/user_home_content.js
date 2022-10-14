/**
 * User Home Page Web Elements
 */
exports.UserHomePageContent = class UserHomePageContent {
    /**
     * Initialize the web elements and the page.
     *
     * @param {Object} page - Browser page.
     */
    constructor(page) {
        this.page = page;
        this.yourFeedLink = page.locator("text=Your Feed");
        this.userLink = page.locator("ul[show-authed=true] >> li >> nth=-1");
    }
};
