import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  IsUUID,
  PrimaryKey,
} from 'sequelize-typescript';
import { Scope } from './scope.model';
import { User } from './user.model';

@Table
export class Role extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Column({ unique: true })
  name: string;

  @ForeignKey(() => Scope)
  @Column
  scopeId: string;

  @BelongsTo(() => Scope)
  scope: Scope;

  @ForeignKey(() => User)
  @Column
  userId: string;

  @BelongsTo(() => User)
  user: User;
}

/* @ManyToMany(() => Scope)
  scopes: Scope[];
  @OneToMany(() => User, (user) => user.role)
  @JoinColumn()
  users: User[] */
