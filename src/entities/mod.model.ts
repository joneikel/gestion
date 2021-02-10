import { Column, HasMany, IsUUID, Model, PrimaryKey, Scopes, Table, Unique } from 'sequelize-typescript';
import { Scope } from './scope.model';

@Table
export class Mod extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Unique(true)
  @Column
  name: string;

  @HasMany(() => Scope)
  scopes: Scope[];


}

/* import {
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
 */