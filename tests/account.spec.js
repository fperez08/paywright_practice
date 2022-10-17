// @ts-check
const { test, expect } = require("../src/fixtures/account_fixture.js");
const { getUser } = require("$/src/common/utils/fake_data_generator.js");
const { ErrorMessage } = require("$/src/common/base/error_message.js");

let error = {};

test.describe("Sign Up", () => {
    test.beforeEach(async ({ page, registerPage }) => {
        await registerPage.navigate();
        error = new ErrorMessage(page);
    });

    test("create an account", async ({ registerPage, userHomePage }) => {
        const user = getUser();
        await registerPage.createAccount(user);
        await userHomePage.checkUserIsLogin(user.user_name);
    });

    test("empty user name should display an error", async ({
        registerPage,
    }) => {
        const user = getUser();
        user.user_name = "";
        await registerPage.createAccount(user);
        await error.messageContains("username can't be blank");
    });

    test("empty email should display an error", async ({ registerPage }) => {
        const user = getUser();
        user.email = "";
        await registerPage.createAccount(user);
        await error.messageContains("email can't be blank");
    });

    test("empty password should display an error", async ({ registerPage }) => {
        const user = getUser();
        user.password = "";
        await registerPage.createAccount(user);
        await error.messageContains("password can't be blank");
    });

    test("have an account should navigate to Sign In", async ({
        registerPage,
        loginPage,
    }) => {
        await registerPage.clickOnHaveAnAccount();
        await expect(loginPage.content.signInLabel).toBeVisible();
    });
});

test.describe("Log In", () => {
    test.beforeEach(async ({ page, loginPage }) => {
        await loginPage.navigate();
        error = new ErrorMessage(page);
    });
    test("Log in with a valid user", async ({ loginPage, userHomePage }) => {
        const user = require("$/tests/data/user.json");
        await loginPage.login(user.email, user.password);
        await userHomePage.checkUserIsLogin(user.user_name);
    });
    test("Empty email should display an error", async ({ loginPage }) => {
        await loginPage.login("", "123abc");
        await error.messageContains("email can't be blank");
    });
    test("Empty password should display an error", async ({ loginPage }) => {
        await loginPage.login("example@gmail.com", "");
        await error.messageContains("password can't be blank");
    });
});
