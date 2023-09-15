import { Inject, Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
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

  async getToken(getTokenDto: GetTokenDto): Promise<Token> {
    const specificUser = await this.userService.getUser(getTokenDto.userUuid);
    if(this.authService.checkPassword(specificUser.password, getTokenDto.password)){
      const singleToken = await this.tokensModel.findOne({
        where: {
          tokenUuid: getTokenDto.tokenUuid
        }
      });
      if(singleToken){
        return singleToken;
      }else{
        throw new NotFoundException(`Could not find that token`);
      }
    }else{
      throw new ForbiddenException(`Incorrect username or password`);
    }
  }

  async createToken(createTokenDto: CreateTokenDto): Promise<Token> {
    const specificUser = await this.userService.getUser(createTokenDto.userUuid);
    if(this.authService.checkPassword(specificUser.password, createTokenDto.password)){
      const generatedToken = await this.authService.generateJwt(specificUser);
      let hashedToken = null;
      if(generatedToken){
        hashedToken = await this.authService.hashToken(generatedToken)
      }
      const createdToken = await this.tokensModel.create({
        token: hashedToken,
        ...createTokenDto
      });
      createdToken.token = generatedToken;
      return createdToken;
    }else{ 
      throw new ForbiddenException(`Incorrect username or password`);
    }
  }

  async updateToken(tokenUuid: string, updateTokenDto: UpdateTokenDto): Promise<Token> {
    const specificUser = await this.userService.getUser(updateTokenDto.userUuid);
    if(this.authService.checkPassword(specificUser.password, updateTokenDto.password)){
      const generatedToken = await this.authService.generateJwt(specificUser);
      let hashedToken = null;
      if(generatedToken){
        const hashedToken = await this.authService.hashToken(generatedToken)
      }
      const rowCount = await this.tokensModel.update({
        token: hashedToken,
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
    }else{
      throw new ForbiddenException(`Incorrect username or password`);
    }
  }

  async deleteToken(tokenUuid: string, deleteTokenDto: DeleteTokenDto): Promise<number> {
    const specificUser = await this.userService.getUser(deleteTokenDto.userUuid);
    if(this.authService.checkPassword(specificUser.password, deleteTokenDto.password)){
      return this.tokensModel.destroy({
        where:{
          tokenUuid
        }
      });
    }
  }
}
