import { IsEmail, IsOptional, IsString } from "class-validator";
import User from "../../users/types/user.type";
import { ApiProperty } from "@nestjs/swagger";


export class CreateAccountDto {
    @IsEmail()
    @ApiProperty()
    emergencyContact: string;

    @IsString()
    @ApiProperty()
    accountUuid: string;

    @IsString()
    @ApiProperty()
    accountName: string;
    
    @ApiProperty()
    billingHistory: string;
    
    @ApiProperty()
    billingInfo: string;
    
    @ApiProperty()
    @IsEmail()
    initEmail: string;

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    admins: string;

    @ApiProperty()
    users: string;
}

export class UpdateAccountDto {
    
    @ApiProperty()
    @IsOptional()
    @IsEmail()
    emergencyContact: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    accountUuid: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    accountName: string;

    @ApiProperty()
    @IsOptional()
    billingHistory: string;
    
    @ApiProperty()
    @IsOptional()
    billingInfo: string;
    
    @ApiProperty()
    @IsOptional()
    @IsEmail()
    initEmail: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    description: string;

    @ApiProperty()
    @IsOptional()
    admins: string;
    
    @ApiProperty()
    @IsOptional()
    users: string;
}