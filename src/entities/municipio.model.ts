import { Column, HasMany, IsUUID, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';
import { Parroquia } from './parroquia.model';
@Table
export class Municipio extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Unique(true)
  @Column
  name: string;

  @HasMany(() => Parroquia)
  parroquias: Parroquia[];

}
/* import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Activity } from './activity.model';
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
 */