const faker = require("@faker-js/faker");
module.exports = () => {
  const data = {
    users: [],
  };
  for (let i = 1; i < 7; i++) {
    data.users.push({
      id: i,
      name: faker.faker.name.fullName(),
      email: faker.faker.internet.email(),
      birthdate: faker.faker.date.past(),
      phone: faker.faker.phone.number(),
      image: faker.faker.image.avatar(),
      address: {
        country: faker.faker.address.country(),
        state: faker.faker.address.state(),
        street: faker.faker.address.street(),
        number: Math.floor(Math.random() * 100),
      },
    });
  }
  return data;
};
