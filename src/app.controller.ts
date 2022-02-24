import {
  Controller,
  Get,
  Post,
  Put,
  StreamableFile,
  Response,
} from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  // 通过 constructor 注入依赖关系
  constructor(private readonly appService: AppService) {}
  // private readonly appService: AppService;
  // constructor(appService: AppService) {
  //   this.appService = appService;
  // }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // 可以匹配到 post请求，http://localhost:9080/app/list
  @Post('list')
  create(): string {
    return this.appService.create();
  }

  // 2.通配符路径(?+* 三种通配符 )
  // 可以匹配到 get请求, http://localhost:9080/app/user_xxx
  @Get('user_*')
  getUser() {
    return 'getUser';
  }

  // 3.带参数路径
  // 可以匹配到put请求，http://localhost:9080/app/list/xxxx
  @Put('list/:id')
  update() {
    return 'update';
  }
  @Get('file')
  getFile(@Response({ passthrough: true }) res): StreamableFile {
    const file = createReadStream(join(process.cwd(), '../package.json'));
    res.set({
      'Content-Type': 'application/json',
      'Content-Disposition': 'attachment; filename="package.json"',
    });
    return new StreamableFile(file);
  }
}
