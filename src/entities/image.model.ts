import { from } from "rxjs";
import { BelongsTo, Column, ForeignKey, IsUUID, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Activity } from "./activity.model";
@Table
export class Image extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Column
  name: string;

  @Column
  path: string;

  @ForeignKey(() => Activity)
  @Column
  actiityId: string;
  @BelongsTo(() => Activity)
  activity: Activity;
}
/* import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Activity } from './activity.model';

@Entity()
export class Image {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  path: string;
  @ManyToOne(() => Activity, (activity) => activity.images)
  activity: Activity;
}
 */