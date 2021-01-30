import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { Parroquia } from './parroquia.entity';

@Entity()
export class Municipio {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  name: string;
  @OneToMany(() => Parroquia, (parroquia_id) => parroquia_id.municipio_id)
  @JoinTable()
  parroquias: Parroquia;
}
