import { Column, HasMany, IsUUID, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';
import { Project } from './project.model';

@Table
export class Measurement extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Unique(true)
  @Column
  name: string;

  @Unique(true)
  @Column
  shortName: string;

  @HasMany(() => Project)
  projects: Project[];
}
/* import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Project } from './project.model';

@Entity()
export class Measurement {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  name: string;
  @Column({ unique: true })
  shortName: string;
  @OneToMany(() => Project, (project) => project.measurement)
  @JoinColumn()
  projects: Project[];
}
 */