import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { Activity } from './activity.entity';
import { Parroquia } from './parroquia.entity';

@Entity()
export class Municipio {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  name: string;
  @OneToMany(() => Parroquia, (parroquia) => parroquia.municipio)
  @JoinTable()
  parroquias: Parroquia[];
  @OneToMany(() => Activity, (activity) => activity.municipio)
  @JoinTable()
  activities: Activity[];
}
