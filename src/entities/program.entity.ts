import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { Institution } from './institution.entity';
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
  @JoinTable()
  institution: Institution;
  @OneToMany(() => Project, (project) => project.program, {
    onDelete: 'CASCADE',
  })
  projects: Project[];
}
