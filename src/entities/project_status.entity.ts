import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
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
  @JoinColumn()
  projects: Project[];
}
