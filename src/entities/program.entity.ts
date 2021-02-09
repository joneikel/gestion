import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Institution } from './institution.model';
import { Project } from './project.entity';

@Entity()
export class Program {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  name: string;
  @Column()
  description: string;
  @ManyToOne(() => Institution, (institution) => institution.programs)
  institution: Institution;
  @OneToMany(() => Project, (project) => project.program, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  projects: Project[];
}
