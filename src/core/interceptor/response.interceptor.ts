import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // const req = context.switchToHttp().getResponse();
    console.log('进入全局拦截器...');
    return next.handle().pipe(
      map((data) => {
        // req.status(200);
        return {
          data,
          code: 0,
          msg: '请求成功',
        };
      }),
    );
  }
}