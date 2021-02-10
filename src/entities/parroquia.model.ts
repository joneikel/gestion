import { BelongsTo, Column, ForeignKey, HasMany, IsUUID, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';
import { Activity } from './activity.model';
import { Municipio } from './municipio.model';
@Table
export class Parroquia extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Unique(true)
  @Column
  name: string;

  @ForeignKey(() => Municipio)
  @Column
  municipioId: string;
  @BelongsTo(() => Municipio)
  municipio: Municipio;

  @HasMany(() => Activity)
  activities: Activity[];

}
/* import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
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
  @JoinColumn()
  activities: Activity[];
}
 */