import { SetMetadata } from '@nestjs/common';

export const jwtConstants = {
  secret: 'rzx196090',
};
//自定义装饰器
export const IS_PUBLIC_KEY = 'isPublic';
export const SkipJwtAuth = (bool = true) => SetMetadata(IS_PUBLIC_KEY, bool);
