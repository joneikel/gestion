import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Scope } from './scope.entity';
import { User } from './user.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  name: string;
  @ManyToMany(() => Scope)
  @JoinTable()
  scopes: Scope[];
  @OneToMany(() => User, (user) => user.role)
  @JoinTable()
  users: User[];
}
