import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { TransformInterceptor } from './core/interceptor/response.interceptor';
import { HttpExceptionFilter } from './core/filter/http-exception.filter';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { LoggerMiddleware } from './core/middleware/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // app.setGlobalPrefix('api'); // 设置全局路由前缀

  // 全局中间件
  app.use(new LoggerMiddleware().use);
  // 静态资源
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));

  // 全局注册拦截器
  app.useGlobalInterceptors(new TransformInterceptor());

  // 全局注册错误的过滤器
  app.useGlobalFilters(new HttpExceptionFilter());

  // 设置swagger文档
  const config = new DocumentBuilder()
    .setTitle('管理后台')
    .setDescription('管理后台接口文档')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3200);
}
bootstrap();
