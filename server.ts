import { faker } from "@faker-js/faker";

type UsersProps = {
  id: number;
  name: string;
  email: string;
};

module.exports = () => {
  const data = {
    users: <UsersProps[]>[],
  };
  for (let i; i < 2000; i++) {
    data.users.push({
      id: i,
      name: faker.name.fullName(),
      email: faker.internet.email(),
    });
  }
  return data
};
