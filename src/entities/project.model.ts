import { AllowNull, BelongsTo, BelongsToMany, Column, ForeignKey, HasMany, IsUUID, Model, NotNull, PrimaryKey, Table, Unique } from 'sequelize-typescript';
import { Activity } from './activity.model';
import { InvestmentArea } from './investmentArea.model';
import { Program } from './program.model';
import { InvestmentAreaProject } from './investmentAreaProject.model'
import { Measurement } from './measurement.model';
import { Budget } from './budget.model';
import { ProjectStatus } from './projectStatus.model';

@Table
export class Project extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Unique(true)
  @Column
  name: string;

  @AllowNull
  @Column
  description: string;

  @ForeignKey(() => Program)
  programId: string;
  @BelongsTo(() => Program)
  program: Program;

  @HasMany(() => Activity)
  activities: Activity[];

  @BelongsToMany(() => InvestmentArea, () => InvestmentAreaProject)
  invesmentArea: InvestmentArea[];

  @ForeignKey(() => Measurement)
  @Column
  measurementId: string;
  @BelongsTo(() => Measurement)
  measurement: Measurement;

  @Column
  measurementValue: number;

  @Column
  isPlanified: number;

  @Column
  initDate: Date;

  @Column
  endDate: Date;

  @ForeignKey(() => Budget)
  budgetId: string;
  @BelongsTo(() => Budget)
  budget: Budget;

  @ForeignKey(() => ProjectStatus)
  @Column
  statusId: string;
  @BelongsTo(() => ProjectStatus)
  status: ProjectStatus;

}

/* import {
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
import { Program } from './program.model';
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
 */