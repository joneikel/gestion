import { Column, HasMany, IsUUID, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';
import { Project } from './project.model';

@Table
export class ProjectStatus extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Unique(true)
  @Column
  name: string;

  @Column
  IsFinal: boolean;

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
export class ProjectStatus {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  isFinal: boolean;
  @OneToMany(() => Project, (project) => project.status)
  @JoinColumn()
  projects: Project[];
}
 */