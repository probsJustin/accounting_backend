import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";
import { User } from "../../users/types/user.model";
import { ApiProperty } from "@nestjs/swagger";
import { ConstantsService } from "../../util/constants/constants.service";


export class CreateOrganizationDto {

    @IsEmail()
    @ApiProperty({
        example: ConstantsService.EXAMPLES.EMAIL
    })
    emergencyContact: string;

    @ApiProperty({
        example: ConstantsService.EXAMPLES.UUID
    })
    orgUuid: string;
    
    @ApiProperty({
        example: ConstantsService.EXAMPLES.ORG_NAME
    })
    orgName: string;
    
    @ApiProperty({
        example: ConstantsService.EXAMPLES.UUID
    })
    accountUuid: string;

}
export class UpdateOrganizationDto {

    @IsEmail()
    @ApiProperty({
        example: ConstantsService.EXAMPLES.EMAIL
    })
    emergencyContact: string;

    @ApiProperty({
        example: ConstantsService.EXAMPLES.UUID
    })
    orgUuid: string;

    @ApiProperty({
        example: ConstantsService.EXAMPLES.ORG_NAME
    })
    orgName: string;

    @ApiProperty({
        example: ConstantsService.EXAMPLES.UUID
    })
    accountUuid: string;

}