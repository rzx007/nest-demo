/*
 * @Author: 阮志雄
 * @Date: 2022-02-22 17:14:43
 * @LastEditTime: 2022-02-24 15:07:04
 * @LastEditors: 阮志雄
 * @Description: In User Settings Edit
 * @FilePath: \nest-demo\src\users\users.service.ts
 */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const { username, password, repassword } = createUserDto;

    if (password !== repassword) {
      throw new HttpException('密码不一致！', HttpStatus.BAD_REQUEST);
    }
    const existUser = await this.usersRepository.findOne({
      where: { username },
    });
    if (existUser) {
      throw new HttpException('用户名已存在', HttpStatus.BAD_REQUEST);
    }

    const newUser = this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(newUser);
  }

  findAll(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
