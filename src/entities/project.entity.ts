import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { Activity } from './activity.entity';
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
  @OneToMany(() => Activity, (activityId) => activityId.project)
  @JoinTable()
  activities: Activity;
}
