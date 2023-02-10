export interface User {
  name: string;
  age: number;
  email: string;
  address: Address;
  admin: boolean;
}

export interface Address {
  city: "New York";
  state: "NY";
  country: "USA";
}
