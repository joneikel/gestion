import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Project } from './project.entity';

@Entity()
export class ProjectStatus {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  isFinal: boolean;
  @OneToMany(() => Project, (project) => project.status)
  @JoinTable()
  project: Project[];
}
