import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { Reflector } from '@nestjs/core'
import { IS_PUBLIC_KEY } from '../constants'
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private readonly reflector: Reflector) {
    super()
  }
  // 白名单, 直接放行
  private urlList: string[] = ['/app', '/auth/login', '/users/add']

  canActivate(context: ExecutionContext) {
    // 在这里添加自定义的认证逻辑
    // 例如调用 super.logIn(request) 来建立一个session
    const request = context.switchToHttp().getRequest()
    // 白名单直接放行
    if (this.urlList.includes(request.url)) {
      return true
    }

    // @SkipJwtAuth() 注解的控制器直接放行
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ])
    // skip
    if (isPublic) return true
    return super.canActivate(context)
  }

  handleRequest(err, user) {
    // 可以抛出一个基于info或者err参数的异常
    if (err || !user) {
      throw err || new UnauthorizedException()
    }
    return user
  }
}
