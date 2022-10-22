import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm'
import { IsEmail } from 'class-validator'
import { Exclude } from 'class-transformer'
import { makeSalt } from '../../utils/cryptogram'

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @Column()
  @IsEmail()
  email: string

  @Column({ default: '' })
  avator_url: string

  @Column()
  @Exclude() // 查询结果过滤掉此字段
  password: string

  @Column({ default: 'admin' })
  roles: string

  // 插入之前对密码加密
  @BeforeInsert()
  async encryptPwd() {
    this.password = makeSalt(this.password)
  }
}
