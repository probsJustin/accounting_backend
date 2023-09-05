
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional } from 'class-validator';

export class CreateUserDto {

  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  firstname: string;

  @ApiProperty()
  @IsString()
  lastname: string;

  @ApiProperty()
  @IsString()
  userUuid: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  description: string;
  // Add any other fields as necessary
}

export class UpdateUserDto {

  @ApiProperty()
  @IsString()
  @IsOptional()
  username: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  firstname: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  lastname: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  userUuid: string;

  @ApiProperty()
  @IsEmail()
  @IsOptional()
  email: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string;

  // Add any other fields as necessary
}