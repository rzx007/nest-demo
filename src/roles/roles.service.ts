import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}
  async create(createRoleDto: CreateRoleDto) {
    const { title } = createRoleDto;

    const existRole = await this.roleRepository.findOne({
      where: { title },
    });
    if (existRole) {
      throw new HttpException('角色名已存在', HttpStatus.BAD_REQUEST);
    }

    const newRole = this.roleRepository.create(createRoleDto);
    return await this.roleRepository.save(newRole);
  }

  findAll() {
    return `This action returns all roles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
