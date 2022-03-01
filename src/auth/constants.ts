import { SetMetadata } from '@nestjs/common';

export const jwtConstants = {
  secret: 'rzx196090',
};
export const IS_PUBLIC_KEY = 'isPublic';
export const SkipJwtAuth = () => SetMetadata(IS_PUBLIC_KEY, true);
