import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import type { User } from './users.service'; 
import {CreateUserDto} from './create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): User[] {
    return this.usersService.getUsers();
  }

  @Post()
addUser(@Body() user: CreateUserDto) { 
  const newUser:User= {
    id:user.id,
    name:user.name,
    email:user.email,
  };
  this.usersService.addUser(user);
  return { message: 'User added!', user }; 
}

}
