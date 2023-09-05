import { IsEmail, IsOptional, IsString } from "class-validator";
import BillingHistory from "../../billing/types/billingHistory.type";
import BillingInfo from "../../billing/types/billingInfo.type";
import User from "../../users/types/user.type";
import { ApiProperty } from "@nestjs/swagger";


export class CreateAccountDto {
    @IsEmail()
    @ApiProperty()
    emergencyContact: User;

    @IsString()
    @ApiProperty()
    accountUuid: string;

    @IsString()
    @ApiProperty()
    accountName: string;
    
    @ApiProperty()
    billingHistory: BillingHistory;
    
    @ApiProperty()
    billingInfo: BillingInfo;
    
    @ApiProperty()
    @IsEmail()
    initEmail: string;

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    admins: User[];

    @ApiProperty()
    users: User[];
}

export class UpdateAccountDto {
    
    @ApiProperty()
    @IsOptional()
    @IsEmail()
    emergencyContact: User;

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
    billingHistory: BillingHistory;
    
    @ApiProperty()
    @IsOptional()
    billingInfo: BillingInfo;
    
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
    admins: User[];
    
    @ApiProperty()
    @IsOptional()
    users: User[];
}