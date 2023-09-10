
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional } from 'class-validator';
import { User } from './user.model';

export class UserList {
  constructor(){ }

  @ApiProperty()
  Users: User[];
}
