import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { Activity } from './activity.entity';
import { Budget } from './budget.entity';
import { InvestmentArea } from './investment_area.entity';
import { Measurement } from './measurement.entity';
import { Program } from './program.entity';
import { ProjectStatus } from './project_status.entity';

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
  @OneToMany(() => Activity, (activity) => activity.project)
  @JoinTable()
  activities: Activity[];
  @ManyToMany(() => InvestmentArea)
  @JoinTable()
  investmentArea: InvestmentArea[];
  @ManyToOne(() => Measurement, (measurement) => measurement.project)
  @JoinTable()
  measurement: Measurement;
  @OneToMany(() => Budget, (budgets) => budgets.project)
  budgets: Budget[];
  @ManyToOne(() => ProjectStatus, (status) => status.project)
  @JoinTable()
  status: ProjectStatus;
  @Column('int')
  isPlanified: number;
}
