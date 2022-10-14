exports.UserHomePageContent = class UserHomePageContent {
    constructor(page) {
        this.page = page;
        this.path = "#";
        this.yourFeedLink = page.locator("text=Your Feed");
        this.userLink = page.locator("ul[show-authed=true] >> li >> nth=-1");
    }
};
