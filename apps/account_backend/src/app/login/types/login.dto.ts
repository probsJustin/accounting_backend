import { IsEnum, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ConstantsService } from '../../util/constants/constants.service';

export class LoginDto {
    @IsString()
    @ApiProperty({
        example: ConstantsService.EXAMPLES.USER_NAME
    })
    username: string;

    @ApiProperty({
        example: ConstantsService.EXAMPLES.PASSWORD
    })
    password: string;
}
