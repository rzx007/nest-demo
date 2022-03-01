import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/index';
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

  // 查询用户
  findOne(username: string) {
    return this.usersRepository.findOne({ username });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
