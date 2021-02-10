import { Column, HasMany, IsUUID, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';
import { Budget } from './budget.model';
@Table
export class BudgetSource extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Unique(true)
  @Column
  name: string;

  @HasMany(() => Budget)
  budget: Budget[];

}
/* import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Budget } from './budget.model';

@Entity()
export class BudgetSource {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  name: string;
  @OneToMany(() => Budget, (budget) => budget.budgetSource)
  budgets: Budget[];
}
 */