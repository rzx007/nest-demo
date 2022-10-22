import { HttpException, HttpStatus } from '@nestjs/common'
import { ApiErrorCode } from './api-error-code.enum'

// 自定义拓展错误类型
export class ApiException extends HttpException {
  private errorMessage: string
  private errorCode: ApiErrorCode

  constructor(errorMessage: string, errorCode: ApiErrorCode, statusCode: HttpStatus) {
    super(errorMessage, statusCode)

    this.errorMessage = errorMessage
    this.errorCode = errorCode
  }

  getErrorCode(): ApiErrorCode {
    return this.errorCode
  }

  getErrorMessage(): string {
    return this.errorMessage
  }
}
// 使用
// throw new ApiException('用户ID无效', ApiErrorCode.USER_ID_INVALID, HttpStatus.BAD_REQUEST);

// 这样还没完，我们的全局过滤器并没有加入识别ApiException的逻辑，现在修改全局过滤器的逻辑：
/**
 * import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { ApiException } from '../exceptions/api.exception';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {

  catch(exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus()

    if (exception instanceof ApiException) {

      response
        .status(status)
        .json({
          errorCode: exception.getErrorCode(),
          errorMessage: exception.getErrorMessage(),
          date: new Date().toLocaleDateString(),
          path: request.url,
        });

    } else {

      response
        .status(status)
        .json({
          statusCode: status,
          date: new Date().toLocaleDateString(),
          path: request.url,
        });
    }
  }

}
 */

// https://www.jianshu.com/p/ebd80c9c6db1
