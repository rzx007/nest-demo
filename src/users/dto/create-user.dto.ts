import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: '小白' })
  @IsString({ message: '必须是字符串' })
  name: string;

  @ApiProperty({ example: 2 })
  @IsInt()
  age: number;
}
