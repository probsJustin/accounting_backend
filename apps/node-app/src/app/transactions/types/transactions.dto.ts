import { IsDateString, IsEmail, IsOptional, IsString } from "class-validator";
import { User } from "../../users/types/user.type";
import { ApiProperty } from "@nestjs/swagger";
import { ConstantsService } from "../../util/constants/constants.service";
import { BelongsTo, Column, DataType, ForeignKey, IsDate } from "sequelize-typescript";
import { Account } from "../../account/types/account.model";


export class CreateTransactionDto {
    @IsString()
    @ApiProperty({
        example: ConstantsService.EXAMPLES.DOLLAR_AMMOUNT
    })
    amount: number;

    @IsDateString()
    @ApiProperty({
        example: ConstantsService.EXAMPLES.DATE
    })
    date: Date;

    @IsEmail()
    @ApiProperty({
        example: ConstantsService.EXAMPLES.EMAIL
    })
    initEmail: string;

    @IsEmail()
    @ApiProperty({
        example: ConstantsService.EXAMPLES.UUID
    })
    accountUuid: string;  
}

export class UpdateTransactionDto {
    @IsString()
    @ApiProperty({
        example: ConstantsService.EXAMPLES.DOLLAR_AMMOUNT
    })
    amount: number;

    @IsDateString()
    @ApiProperty({
        example: ConstantsService.EXAMPLES.DATE
    })
    date: Date;

    @IsEmail()
    @ApiProperty({
        example: ConstantsService.EXAMPLES.EMAIL
    })
    initEmail: string;

    @IsEmail()
    @ApiProperty({
        example: ConstantsService.EXAMPLES.UUID
    })
    accountUuid: string; 

}