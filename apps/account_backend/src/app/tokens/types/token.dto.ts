import { IsEnum, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ConstantsService } from '../../util/constants/constants.service';

export class CreateTokenDto {

    @ApiProperty({
        example: ConstantsService.EXAMPLES.UUID
    })
    userUuid: string;

    @ApiProperty({
        example: ConstantsService.EXAMPLES.PASSWORD
    })
    password: string;

    @ApiProperty({
        example: ConstantsService.EXAMPLES.UUID
    })
    accountUuid: string;
    
}

export class UpdateTokenDto {

    @ApiProperty({
        example: ConstantsService.EXAMPLES.UUID
    })
    tokenUuid: string;

    @ApiProperty({
        example: ConstantsService.EXAMPLES.UUID
    })
    userUuid: string;

    @ApiProperty({
        example: ConstantsService.EXAMPLES.UUID
    })
    accountUuid: string;
}

export class GetTokenDto {
    @ApiProperty({
        example: ConstantsService.EXAMPLES.UUID
    })
    tokenUuid: string;
}

export class DeleteTokenDto {
    @ApiProperty({
        example: ConstantsService.EXAMPLES.UUID
    })
    tokenUuid: string;
}