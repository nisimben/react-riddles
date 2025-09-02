export type User = {
  name: string;
  email: string;
  password: string;
};

export const mockUsers: User[] = [
  { name: "Admin", email: "admin@example.com", password: "123456" },
  { name: "dudu", email: "dudu@example.com", password: "pass" },
];
