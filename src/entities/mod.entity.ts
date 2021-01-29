import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Scope } from './scope.entity';

@Entity()
export class Mod {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  name: string;
  @OneToMany(() => Scope, (scope) => scope.mod)
  scopes: Scope[];
}
