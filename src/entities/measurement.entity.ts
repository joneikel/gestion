import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Activity } from './activity.entity';

@Entity()
export class Measurement {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  name: string;
  @Column({ unique: true })
  short_name: string;
  @OneToMany(() => Activity, (activity) => activity.measurement)
  activity: Activity;
}
