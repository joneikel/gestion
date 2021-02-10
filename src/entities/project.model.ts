import { AllowNull, BelongsTo, BelongsToMany, Column, ForeignKey, HasMany, IsUUID, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';
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
  investmentArea: InvestmentArea[];

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

  @HasMany(() => Budget)
  budget: Budget[];

  @ForeignKey(() => ProjectStatus)
  @Column
  statusId: string;

  @BelongsTo(() => ProjectStatus)
  status: ProjectStatus;

}
