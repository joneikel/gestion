import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
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
  projects: Project[];
}
