import { ApiProperty, PartialType } from '@nestjs/swagger'
import { IsString, IsEmail, isNumber } from 'class-validator'
import { CreateUserDto } from './create-user.dto'

export class UpdateUserDto extends PartialType(CreateUserDto) {
  id: number

  @ApiProperty({ example: '小白' })
  @IsString({ message: '必须是字符串' })
  username: string

  @ApiProperty({ example: '770304867@qq.com' })
  @IsEmail()
  email: string

  @ApiProperty({ example: '/avator.jpg' })
  @IsString({ message: '头像' })
  avator_url: string

  @ApiProperty({ example: '123456' })
  @IsString({ message: '密码' })
  password: string
}
