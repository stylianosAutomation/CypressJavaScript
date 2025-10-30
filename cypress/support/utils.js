const { faker } = require('@faker-js/faker');

// Function to generate a fake user
function generateUser() {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(10),
    zipCode: faker.address.zipCode('#####'),
    city: faker.address.city(),
  };
}

// Export using module.exports (CommonJS)
module.exports = {
  generateUser
};
