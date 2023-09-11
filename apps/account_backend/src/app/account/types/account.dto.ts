import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";
import { User } from "../../users/types/user.model";
import { ApiProperty } from "@nestjs/swagger";
import { ConstantsService } from "../../util/constants/constants.service";


export class CreateAccountDto {
    @IsEmail()
    @ApiProperty({
        example: ConstantsService.EXAMPLES.EMAIL
    })
    emergencyContact: string;

    @IsNumber()
    @ApiProperty({
        example: ConstantsService.EXAMPLES.DOLLAR_AMMOUNT
    })
    balance: number;

    @IsString()
    @ApiProperty({
        example: ConstantsService.EXAMPLES.ACCOUNT_NAME
    })
    accountName: string;
    
    @ApiProperty({
        example: 12
    })
    billingInfoId: string;
    
    @ApiProperty({
        example: ConstantsService.EXAMPLES.EMAIL
    })
    @IsEmail()
    initEmail: string;

    @ApiProperty({
        example: ConstantsService.EXAMPLES.DESCRIPTION
    })
    @IsString()
    description: string;
}

export class UpdateAccountDto {
    @IsEmail()
    @ApiProperty({
        example: ConstantsService.EXAMPLES.EMAIL
    })
    emergencyContact: string;

    @IsNumber()
    @ApiProperty({
        example: ConstantsService.EXAMPLES.DOLLAR_AMMOUNT
    })
    balance: number;

    @IsString()
    @ApiProperty({
        example: ConstantsService.EXAMPLES.ACCOUNT_NAME
    })
    accountName: string;
    
    @ApiProperty({
        example: 12
    })
    billingInfoId: string;
    
    @ApiProperty({
        example: ConstantsService.EXAMPLES.EMAIL
    })
    @IsEmail()
    initEmail: string;

    @ApiProperty({
        example: ConstantsService.EXAMPLES.DESCRIPTION
    })
    @IsString()
    description: string;
}