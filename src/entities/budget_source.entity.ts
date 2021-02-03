import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
} from 'typeorm';
import { Budget } from './budget.entity';

@Entity()
export class BudgetSource {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  name: string;
  @ManyToOne(() => Budget, (budget) => budget.budgetSources)
  @JoinTable()
  budget: Budget;
}
