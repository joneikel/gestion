import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Budget } from './budget.entity';

@Entity()
export class BudgetSource {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  name: string;
  @OneToMany(() => Budget, (budget) => budget.budgetSource)
  budgets: Budget[];
}
