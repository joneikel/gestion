import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Project } from './project.entity';

@Entity()
export class InvestmentArea {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  name: string;
  @ManyToMany(() => Project)
  projects: Project[];
}
