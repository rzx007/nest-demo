import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class CreateRoleDto {
  @ApiProperty({ example: 'admin' })
  @IsString({ message: '角色名称' })
  title: string

  @ApiProperty({ example: '这是管理员角色' })
  description: string

  @ApiProperty({ example: 1 })
  status: number
}
