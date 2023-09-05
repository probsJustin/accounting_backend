import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString } from "class-validator";



export class BillAnAccount{

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

export class RefundAnAccount {
    
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