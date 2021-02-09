import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Scope } from './scope.model';

@Entity()
export class Mod {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  name: string;
  @OneToMany(() => Scope, (scope) => scope.mod)
  @JoinColumn()
  scopes: Scope[];
}
