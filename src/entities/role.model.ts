import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  IsUUID,
  PrimaryKey,
  Unique,
  HasMany,
  BelongsToMany,
} from 'sequelize-typescript';
import { RoleScope } from './roleScope.model';
import { Scope } from './scope.model';
import { User } from './user.model';

@Table
export class Role extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Unique(true)
  @Column
  name: string;

  @BelongsToMany(() => Scope, ()=> RoleScope)
  scopes: Scope[];

  @HasMany(() => User)
  users: User[];
}

/* @ManyToMany(() => Scope)
  scopes: Scope[];
  @OneToMany(() => User, (user) => user.role)
  @JoinColumn()
  users: User[] */
