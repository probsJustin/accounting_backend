import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString } from "class-validator";



export class BillAnAccountDto {

    @IsString()
    @ApiProperty()
    userUuid: string;

    @IsString()
    @ApiProperty()
    accountUuid: string;

    @IsString()
    @ApiProperty()
    amount: number;
    
    @IsDate()
    @ApiProperty()
    date: Date;
}

export class RefundAnAccountDto {
    
    @IsString()
    @ApiProperty()
    userUuid: string;

    @IsString()
    @ApiProperty()
    accountUuid: string;

    @IsString()
    @ApiProperty()
    amount: number;
    
    @IsDate()
    @ApiProperty()
    transactionDate: Date;

    @IsDate()
    @ApiProperty()
    notifyDate: Date;
}