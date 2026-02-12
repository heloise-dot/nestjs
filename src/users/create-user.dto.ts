import {IsInt, IsString ,IsEmail,Min} from 'class-validator';

export class CreateUserDto {
  @IsInt()
  @Min(1)
  id:number;



  @IsString()
  name:string;

  @IsEmail()
  email:string;
}