// @ts-check
const { test, expect } = require("../src/fixtures/account_fixture.js");
const { getUser } = require("$/src/common/utils/fake_data_generator.js");

test.describe("Sign Up", () => {
    test.beforeEach(async ({ registerPage }) => {
        //Navigate to a demo online store
        await registerPage.navigate();
    });

    test("create an account", async ({ registerPage, userHomePage }) => {
        const user = getUser();
        await registerPage.createAccount(user);
        await expect(userHomePage.content.yourFeedLink).toBeVisible();
        await expect(userHomePage.content.userLink).toHaveText(user.user_name);
    });

    test("empty user name should display an error", async ({
        registerPage,
    }) => {
        const user = getUser();
        user.user_name = "";
        await registerPage.createAccount(user);
        await expect(registerPage.content.errorMessage).toHaveText(
            "username can't be blank"
        );
    });

    test("empty email should display an error", async ({ registerPage }) => {
        const user = getUser();
        user.email = "";
        await registerPage.createAccount(user);
        await expect(registerPage.content.errorMessage).toHaveText(
            "email can't be blank"
        );
    });

    test("empty password should display an error", async ({ registerPage }) => {
        const user = getUser();
        user.password = "";
        await registerPage.createAccount(user);
        await expect(registerPage.content.errorMessage).toHaveText(
            "password can't be blank"
        );
    });

    test("have an account should navigate to Sign In", async ({
        registerPage,
        loginPage,
    }) => {
        await registerPage.clickOnHaveAnAccount();
        await expect(loginPage.content.signInLabel).toBeVisible();
    });
});
