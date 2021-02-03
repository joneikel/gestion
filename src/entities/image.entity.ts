import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
} from 'typeorm';
import { Activity } from './activity.entity';

@Entity()
export class Image {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  path: string;
  @ManyToOne(() => Activity, (activity) => activity.images)
  @JoinTable()
  activity: Activity;
}
