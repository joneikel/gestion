import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Activity } from './activity.entity';
import { Municipio } from './municipio.entity';

@Entity()
export class Parroquia {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  name: string;
  @ManyToOne(() => Municipio, (municipio) => municipio.parroquias)
  municipio: Municipio;
  @OneToMany(() => Activity, (activity) => activity.parroquia)
  @JoinTable()
  activities: Activity[];
}
