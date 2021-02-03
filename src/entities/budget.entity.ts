import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { BudgetSource } from './budget_source.entity';
import { Project } from './project.entity';

@Entity()
export class Budget {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  name: string;
  @Column({ nullable: true })
  value: number;
  @Column({ nullable: true })
  dollarValue: number;
  @Column({ nullable: true })
  petro: number;
  @ManyToOne(() => Project, (project) => project.budgets)
  project: Project;
  @OneToMany(() => BudgetSource, (budgetSources) => budgetSources.budget)
  @JoinTable()
  budgetSources: BudgetSource[];
}
