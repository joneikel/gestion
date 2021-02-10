import {
  Table,
  Column,
  Model,
  ForeignKey,
  IsUUID,
  PrimaryKey,
  BelongsToMany,
  BelongsTo,
} from 'sequelize-typescript';
import { Mod } from './mod.model';
import { Role } from './role.model';
import { RoleScope } from './roleScope.model';

@Table
export class Scope extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Column({ unique: true })
  name: string;

  @Column
  label: string;

  @ForeignKey(()=> Mod)
  @Column
  modId: string;

  @BelongsTo(()=> Mod)
  mod: Mod;

  @BelongsToMany(() => Role, () => RoleScope)
  roles: Role[];
}

/* import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Mod } from './mod.entity';

@Entity()
export class Scope {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  name: string;
  @ManyToOne(() => Mod, (mod) => mod.scopes)
  mod: Mod;
  @Column()
  label: string;
}
 */
