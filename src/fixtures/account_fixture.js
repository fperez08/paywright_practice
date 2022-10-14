const base = require("@playwright/test");
const {
    RegisterPageContent,
} = require("$/src/page_content/register_content.js");
const { RegisterPage } = require("$/src/pages/register_page.js");
const { UserHomePage } = require("$/src/pages/user_home_page.js");
const {
    UserHomePageContent,
} = require("$/src/page_content/user_home_content.js");

exports.test = base.test.extend({
    registerPage: async ({ page }, use) => {
        const registerPage = new RegisterPage(new RegisterPageContent(page));
        await use(registerPage);
    },
    userHomePage: async ({ page }, use) => {
        const userHomePage = new UserHomePage(new UserHomePageContent(page));
        await use(userHomePage);
    },
});

exports.expect = base.expect;
