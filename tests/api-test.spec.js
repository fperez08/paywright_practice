// @ts-check
const { test, expect } = require("@playwright/test");

let bookingId = 0;
const body = {
    firstname: "Jim",
    lastname: "Brown",
    totalprice: 111,
    depositpaid: true,
    bookingdates: {
        checkin: "2018-01-01",
        checkout: "2019-01-01",
    },
    additionalneeds: "Breakfast",
};

test.beforeAll(async ({ request }) => {
    const response = await request.post("booking", {
        data: body,
    });
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    bookingId = data.bookingid;
});

test("Get booking", async ({ request }) => {
    const response = await request.get(`booking/${bookingId}`);
    const data = await response.json();
    expect(data.firstname).toContain("Jim");
});

test.afterAll(async ({ request }) => {
    const response = await request.delete(`booking/${bookingId}`, {
        headers: {
            Cookie: "token=337092c0386f474",
        },
    });
    expect(response.ok()).toBeTruthy();
});
