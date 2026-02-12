import { Injectable } from '@nestjs/common';

// Export User interface so controller can use it
export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UsersService {
  // Fake database
  private users: User[] = [
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' },
  ];

  // Return all users
  getUsers(): User[] {
    return this.users;
  }

  // Add a new user
  addUser(user: User) {
    this.users.push(user);
  }
}
