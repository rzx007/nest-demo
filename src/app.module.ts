import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PostsModule } from './posts/posts.module'
import { UsersModule } from './users/users.module'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'
import { APP_GUARD } from '@nestjs/core'
import { RolesGuard } from './core/guard/roles.guard'
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard'
import { RolesModule } from './roles/roles.module'
import { UploadModule } from './upload/upload.module'

@Module({
  imports: [
    PostsModule,
    UsersModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nestweb',
      autoLoadEntities: true,
      // synchronize: true,
    }),
    AuthModule,
    RolesModule,
    UploadModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
