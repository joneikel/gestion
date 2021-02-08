import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
  JoinColumn,
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
  scopes: Scope[];
  @OneToMany(() => User, (user) => user.role)
  @JoinColumn()
  users: User[];
}
