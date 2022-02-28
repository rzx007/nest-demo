import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt'; // 注入JwtService服务，生成token

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  // 根据用户密码，查询用户，local.password调用验证
  async validateUser(username: string, pass: string): Promise<any> {
    const users = await this.usersService.findOne(username);
    if (users && users.password === pass) {
      const { password, ...result } = users;
      return result;
    }
    return null;
  }

  //用户正确后,生成token,控制器调用
  async login(user: any): Promise<any> {
    const payload = {
      username: user.username,
      sub: user.id,
      roles: user.roles,
    };
    return {
      access_token: this.jwtService.sign(payload),
      username: user.username,
      avtorUrl: user.avtor_url,
    };
  }
}
