import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
/**
 * passport策略，验证用户登录是否正确，交给守卫使用
 */
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }
  // validate 是默认方法
  async validate(username: string, password: string): Promise<any> {
    // 查询用户是否正确登录
    const users = await this.authService.validateUser(username, password);
    if (!users) {
      throw new UnauthorizedException();
    }
    return users;
  }
}
