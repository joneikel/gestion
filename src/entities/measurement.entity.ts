import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Project } from './project.entity';

@Entity()
export class Measurement {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  name: string;
  @Column({ unique: true })
  shortName: string;
  @OneToMany(() => Project, (project) => project.measurement)
  projects: Project[];
}
