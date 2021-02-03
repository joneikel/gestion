import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
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
  @ManyToOne(() => Project, (project) => project.status)
  @JoinTable()
  project: Project[];
}
