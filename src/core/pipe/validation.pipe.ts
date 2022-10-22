import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common'

// 全局dto验证管道,主要职责对控制器的参数验证和转换
@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('')
    return value
  }
}
