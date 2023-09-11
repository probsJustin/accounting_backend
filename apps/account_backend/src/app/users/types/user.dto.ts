
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional, IsUUID } from 'class-validator';
import { User } from './user.model';
import { Account } from '../../account/types/account.model';
import { ConstantsService } from '../../util/constants/constants.service';

export class CreateUserDto {
  constructor(){ }

  @ApiProperty({
    example: ConstantsService.EXAMPLES.USER_NAME
  })
  @IsString()
  username: string;

  @ApiProperty({
    example: ConstantsService.EXAMPLES.FIRST_NAME
  })
  @IsString()
  firstname: string;

  @ApiProperty({
    example: ConstantsService.EXAMPLES.LAST_NAME
  })
  @IsString()
  lastname: string;

  @ApiProperty({
    example: ConstantsService.EXAMPLES.EMAIL
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: ConstantsService.EXAMPLES.EMAIL
  })
  @IsString()
  description: string;

  @ApiProperty({
    type: 'array',
    items: { type: 'string', format: 'uuid' },
    description: 'List of account UUIDs to associate with the user',
    example: [ConstantsService.EXAMPLES.UUID, ConstantsService.EXAMPLES.UUID],
  })
  @IsUUID(4, { each: true }) // Validate UUID v4 format for each item in the array
  accounts: string[];
}


export class UpdateUserDto {

  @ApiProperty({
    example: ConstantsService.EXAMPLES.USER_NAME
  })
  @IsString()
  username: string;

  @ApiProperty({
    example: ConstantsService.EXAMPLES.FIRST_NAME
  })
  @IsString()
  firstname: string;

  @ApiProperty({
    example: ConstantsService.EXAMPLES.LAST_NAME
  })
  @IsString()
  lastname: string;

  @ApiProperty({
    example: ConstantsService.EXAMPLES.EMAIL
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: ConstantsService.EXAMPLES.EMAIL
  })
  @IsString()
  description: string;

  @ApiProperty({
    type: 'array',
    items: { type: 'string', format: 'uuid' },
    description: 'List of account UUIDs to associate with the user',
    example: [ConstantsService.EXAMPLES.UUID, ConstantsService.EXAMPLES.UUID],
  })
  @IsUUID(4, { each: true }) // Validate UUID v4 format for each item in the array
  accounts: string[];

}

