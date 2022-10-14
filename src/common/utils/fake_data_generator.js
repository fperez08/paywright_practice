const { faker } = require("@faker-js/faker");

/**Fake data generator\ */

/**
 * Creates a random user.
 *
 * @returns {Object} User object in the format:
 *                   {
 *                    user_name:string,
 *                    email:string,
 *                    password:string
 *                    }
 */
exports.getUser = () => {
    return {
        user_name: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
};
