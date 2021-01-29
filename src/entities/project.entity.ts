import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Program } from './program.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  name: string;
  @Column()
  description: string;
  @ManyToOne(() => Program, (program) => program.projects)
  program: Project[];
}
