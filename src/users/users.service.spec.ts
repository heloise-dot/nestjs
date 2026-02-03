import  { Injectable } from '@nestjs/common';



interface User {
  id:number;
  name:string;
  email:string;
}

@Injectable()
export class UsersService{
  private users: User[]= [
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' },
  ];

  getUsers():User[]{
  return this.users;
}
  }
