import { AllowNull, BelongsTo, Column, ForeignKey, HasMany, IsUUID, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { BudgetSource } from './budgetSource.model';
import { Project } from './project.model';
@Table
export class Budget extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @AllowNull(true)
  @Column
  value: number;

  @AllowNull(true)
  @Column
  dollarValue: number;

  @AllowNull(true)
  @Column
  petro: number;

  @HasMany(() => Project)
  projects: Project[];

  @ForeignKey(() => BudgetSource)
  @Column
  budgetSourceId: string;
  @BelongsTo(() => BudgetSource)
  budgetSource: BudgetSource;

}
/* import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { BudgetSource } from './budget_source.entity';
import { Project } from './project.model';

@Entity()
export class Budget {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ nullable: true })
  value: number;
  @Column({ nullable: true })
  dollarValue: number;
  @Column({ nullable: true })
  petro: number;
  @ManyToOne(() => Project, (project) => project.budgets)
  project: Project;
  @ManyToOne(() => BudgetSource, (budgetSource) => budgetSource.budgets)
  budgetSource: BudgetSource;
}
 */