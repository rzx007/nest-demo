import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from 'src/constants/role.enum';
import { ROLES_KEY } from 'src/decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    // 如果控制器或者控制器方法没有角色，则放行
    if (!requiredRoles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    console.log('------------');
    console.log(user);
    const isValidate: boolean = requiredRoles.some((role) =>
      user.roles?.includes(role),
    );
    console.log(isValidate ? '角色已授权' : '未授权角色');

    return isValidate;
  }
}
