import { IsEnum, IsString } from 'class-validator';
import { BillingType } from './billingInfo.type';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBillingInfo {

    @IsString()
    @ApiProperty()
    billingAccount: string;

    @ApiProperty()
    @IsEnum(BillingType)
    billingType: BillingType;

    @ApiProperty()
    @IsString()
    billingDetailsMisc: string;
}

export class UpdateBillingInfo {
    
    @IsString()
    @ApiProperty()
    billingAccount: string;

    @ApiProperty()
    @IsEnum(BillingType)
    billingType: BillingType;

    @ApiProperty()
    @IsString()
    billingDetailsMisc: string;
}