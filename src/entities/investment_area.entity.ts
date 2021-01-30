import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Activity } from './activity.entity';

@Entity()
export class InvestmentArea {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  name: string;
  @ManyToMany(() => Activity)
  @JoinTable()
  activity: Activity[];
}
