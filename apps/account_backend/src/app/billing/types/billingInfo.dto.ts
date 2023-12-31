import { IsEnum, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ConstantsService } from '../../util/constants/constants.service';

export class CreateBillingInfo {


    @IsString()
    @ApiProperty({
        example: ConstantsService.EXAMPLES.UUID
    })
    billingAccount: string;

    @ApiProperty({
        example: ConstantsService.EXAMPLES.BILLING_TYPE
    })
    billingType: string;

    @ApiProperty({
        example: ConstantsService.EXAMPLES.DESCRIPTION
    })
    @IsString()
    billingDetailsMisc: string;

    @IsUUID(4)
    @ApiProperty({
        example: ConstantsService.EXAMPLES.UUID
    })
    accountUuid: string;
}

export class UpdateBillingInfo {

    @IsString()
    @ApiProperty({
        example: ConstantsService.EXAMPLES.UUID
    })
    billingAccountUuid: string;

    @ApiProperty({
        example: ConstantsService.EXAMPLES.BILLING_TYPE
    })
    billingType: string;

    @ApiProperty({
        example: ConstantsService.EXAMPLES.DESCRIPTION
    })
    @IsString()
    billingDetailsMisc: string;

    @IsUUID(4)
    @ApiProperty({
        example: ConstantsService.EXAMPLES.UUID
    })
    accountUuid: string;
}