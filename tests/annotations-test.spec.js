// @ts-check
const { test, expect } = require("@playwright/test");
test.describe("Online store navigation", () => {
    test.beforeEach(async ({ page }) => {
        //Navigate to a demo online store
        await page.goto("http://automationpractice.com/index.php");
    });

    test("Navigate to shopping car @fails", async ({ page }) => {
        test.fail();
        //Check's the page title
        await expect(page).toHaveTitle("My Store");

        //clicks on car icon
        const carIcon = page.locator("a[title='View my shopping cart']");
        await carIcon.click();

        //Check for the text SHOPPING-CART SUMMARY
        const summaryLabel = page.locator("#cart_titl");
        const text = await summaryLabel.textContent();
        expect(text).toContain("Shopping-cart summary");
    });

    test("Navigate to shopping car @passed", async ({ page }) => {
        test.info().annotations.push({
            type: "regression",
            description: "This is test part of the regression",
        });
        //Check's the page title
        await expect(page).toHaveTitle("My Store");

        //clicks on car icon
        const carIcon = page.locator("a[title='View my shopping cart']");
        await carIcon.click();

        //Check for the text SHOPPING-CART SUMMARY
        const summaryLabel = page.locator("#cart_title");
        const text = await summaryLabel.textContent();
        expect(text).toContain("Shopping-cart summary");
    });
});
