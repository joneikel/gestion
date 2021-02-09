import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  IsUUID,
  PrimaryKey,
} from 'sequelize-typescript';
import { Role } from './role.model';

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

  @ForeignKey(() => Role)
  @Column
  roleId: string;

  @BelongsTo(() => Role)
  role: Role;
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
