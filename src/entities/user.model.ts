import {
  BelongsTo,
  Column,
  Default,
  ForeignKey,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { Institution } from './institution.model';
import { Role } from './role.model';

@Table
export class User extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Unique(true)
  @Column
  identification: string;

  @Unique(true)
  @Column
  email: string;
  @Column
  password: string;

  @Default(true)
  @Column
  isActive: boolean;

  @ForeignKey(() => Role)
  @Column
  roleId: string;

  @BelongsTo(() => Role)
  role: Role;

  @ForeignKey(() => Institution)
  @Column
  institutionId: string;

  @BelongsTo(() => Institution)
  institution: Institution;
}

/* import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Institution } from './institution.entity';
import { Role } from './role.model';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column({ unique: true })
  identification: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @Column({ default: true })
  isActive: boolean;
  @ManyToOne(() => Role, (role) => role.users)
  role: Role;
  @ManyToOne(() => Institution, (institution) => institution.users)
  institution: Institution;
}
 */
