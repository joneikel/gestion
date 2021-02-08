import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { BudgetSource } from './budget_source.entity';
import { Project } from './project.entity';

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
