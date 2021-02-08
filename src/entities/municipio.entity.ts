import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
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
  @JoinColumn()
  parroquias: Parroquia[];
  @OneToMany(() => Activity, (activity) => activity.municipio)
  @JoinColumn()
  activities: Activity[];
}
