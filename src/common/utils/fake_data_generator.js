const { faker } = require("@faker-js/faker");
exports.getUser = () => {
    return {
        user_name: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
};
