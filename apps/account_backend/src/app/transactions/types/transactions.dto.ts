import { IsDateString, IsEmail, IsNumber, IsOptional, IsString } from "class-validator";
import { User } from "../../users/types/user.model";
import { ApiProperty } from "@nestjs/swagger";
import { ConstantsService } from "../../util/constants/constants.service";
import { BelongsTo, Column, DataType, ForeignKey, IsDate } from "sequelize-typescript";
import { Account } from "../../account/types/account.model";


export class CreateTransactionDto {
    @IsNumber()
    @ApiProperty({
        example: ConstantsService.EXAMPLES.DOLLAR_AMMOUNT
    })
    amount: number;

    @ApiProperty({
        example: ConstantsService.EXAMPLES.BILLING_TYPE
    })
    type: string;

    @IsDateString()
    @ApiProperty({
        example: ConstantsService.EXAMPLES.DATE
    })
    initDate: Date;

    @IsEmail()
    @ApiProperty({
        example: ConstantsService.EXAMPLES.EMAIL
    })
    initEmail: string;

    @ApiProperty({
        example: ConstantsService.EXAMPLES.UUID
    })
    accountUuid: string;  
}

export class UpdateTransactionDto {
    @IsNumber()
    @ApiProperty({
        example: ConstantsService.EXAMPLES.DOLLAR_AMMOUNT
    })
    amount: number;

    @ApiProperty({
        example: ConstantsService.EXAMPLES.BILLING_TYPE
    })
    type: string;

    @IsDateString()
    @ApiProperty({
        example: ConstantsService.EXAMPLES.DATE
    })
    initDate: Date;

    @IsEmail()
    @ApiProperty({
        example: ConstantsService.EXAMPLES.EMAIL
    })
    initEmail: string;

    @ApiProperty({
        example: ConstantsService.EXAMPLES.UUID
    })
    accountUuid: string;  
}