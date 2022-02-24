import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: '小白' })
  @IsString({ message: '必须是字符串' })
  username: string;

  @ApiProperty({ example: '770304867@qq.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '/avator.jpg' })
  @IsString({ message: '头像' })
  avator_url: string;

  @ApiProperty({ example: '123456' })
  @IsString({ message: '密码' })
  password: string;

  @ApiProperty({ example: '123456' })
  @IsString({ message: '确认密码' })
  repassword: string;
}
