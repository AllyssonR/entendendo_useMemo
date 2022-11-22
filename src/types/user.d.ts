export interface User {
  id: number;
  name: string;
  email: string;
  birthdate: string;
  address: {
    country: string;
    state: string;
    street: string;
    number: number;
  };
}