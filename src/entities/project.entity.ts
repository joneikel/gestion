import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
  JoinColumn,
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
  program: Program;
  @OneToMany(() => Activity, (activity) => activity.project)
  @JoinColumn()
  activities: Activity[];
  @ManyToMany(() => InvestmentArea)
  @JoinTable()
  investmentAreas: InvestmentArea[];
  @ManyToOne(() => Measurement, (measurement) => measurement.projects)
  measurement: Measurement;
  @Column()
  measurementValue: number;
  @OneToMany(() => Budget, (budgets) => budgets.project)
  @JoinColumn()
  budgets: Budget[];
  @ManyToOne(() => ProjectStatus, (status) => status.projects)
  status: ProjectStatus;
  @Column('int')
  isPlanified: number;
  @Column({ type: 'date' })
  initDate: Date;
  @Column({ type: 'date', nullable: true })
  endDate: Date;
}
