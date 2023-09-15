import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTokenDto, DeleteTokenDto, GetTokenDto, UpdateTokenDto } from './types/token.dto';
import { Token } from './types/token.model';
import { PageNotFoundError } from 'next/dist/shared/lib/utils';
import { InjectModel } from '@nestjs/sequelize';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../users/user.service';

@Injectable()
export class TokenService {
  constructor(
    @InjectModel(Token)
    private readonly tokensModel: typeof Token,
    private readonly authService: AuthService,
    private readonly userService: UserService
  ){}

  async getToken(token: GetTokenDto): Promise<Token> {
    const singleToken = await this.tokensModel.findOne({
      where: {
        tokenUuid: token.tokenUuid
      }
    });
    if(singleToken){
      return singleToken;
    }else{
      throw new NotFoundException(`Could not find that token`);
    }
  }

  async createToken(createTokenDto: CreateTokenDto): Promise<Token> {
    const specificUser = await this.userService.getUser(createTokenDto.userUuid);
    return this.tokensModel.create({
      token: await this.authService.generateJwt(specificUser),
      ...createTokenDto
    });
  }

  async updateToken(tokenUuid: string, updateTokenDto: UpdateTokenDto): Promise<Token> {
    const specificUser = await this.userService.getUser(updateTokenDto.userUuid);
    const rowCount = await this.tokensModel.update({
      token: await this.authService.generateJwt(specificUser),
      ...updateTokenDto
    }, {
      where:{
        tokenUuid
      }
    })
    if(rowCount?.length > 0){
      return this.tokensModel.findOne({
        where: {
          tokenUuid
        }
      });
    }else{
      throw new PageNotFoundError(`No Token Found...... None updated....`)
    }
  }

  deleteToken(deleteTokenDto: DeleteTokenDto): Promise<number> {
    return this.tokensModel.destroy({
      where:{
        deleteTokenDto
      }
    });
  }
}
