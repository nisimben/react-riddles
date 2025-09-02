import { mockUsers, type User} from "../db";

export function findUser(email: string, password: string): User | null {
  return mockUsers.find((u) => u.email === email && u.password === password) || null;
}

export function isEmailTaken(email: string): boolean {
  return mockUsers.some((u) => u.email === email);
}


export function addUser(user: User): void {
  mockUsers.push(user);
}