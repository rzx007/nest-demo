import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('role')
export class Role {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  status: number
}
