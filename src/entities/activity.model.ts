import { AllowNull, BelongsTo, Column, ForeignKey, HasMany, IsUUID, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';
import { Image } from './image.model';
import { Parroquia } from './parroquia.model';
import { Project } from './project.model';

@Table
export class Activity extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Unique(true)
  @Column
  name: string;

  @ForeignKey(() => Project)
  @Column
  projectId: string
  @BelongsTo(() => Project)
  project: Project;

  @AllowNull(true)
  @Column
  description: string;

  @ForeignKey(() => Parroquia)
  @Column
  parroquiaId: string;
  @BelongsTo(() => Parroquia)
  parroquia: Parroquia;

  @Column
  gobernador: boolean;

  @AllowNull(true)
  @Column
  conclision: string;

  @Column
  address: string;

  @Column
  initDate: Date;

  @Column
  endDate: Date;

  @Column
  estimatedPopulation: number;

  @Column
  benefitedPopulation: number;

  @AllowNull(true)
  @Column
  latitude: number;

  @AllowNull(true)
  @Column
  longitude: number;

  @HasMany(() => Image)
  images: Image[];

}
/* import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Image } from './image.entity';
import { Municipio } from './municipio.entity';
import { Parroquia } from './parroquia.entity';
import { Project } from './project.model';

@Entity()
export class Activity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  name: string;
  @ManyToOne(() => Project, (project) => project.activities, {
    onDelete: 'CASCADE',
  })
  project: Project;
  @Column()
  description: string;
  @ManyToOne(() => Municipio, (municipio) => municipio.activities)
  municipio: Municipio;
  @ManyToOne(() => Parroquia, (parroquia) => parroquia.activities)
  parroquia: Parroquia;
  @Column()
  gobernador: boolean;
  @Column({ nullable: true })
  conclusion: string;
  @Column()
  address: string;
  @Column({ type: 'date' })
  initDate: Date;
  @Column({ type: 'date' })
  endDate: Date;
  @Column()
  estimatedPopulation: number;
  @Column()
  benefitedPopulation: number;
  @Column({ precision: 6, type: 'decimal', nullable: true })
  latitude: number;
  @Column({ precision: 6, type: 'decimal', nullable: true })
  longitude: number;
  @OneToMany(() => Image, (image) => image.activity)
  @JoinColumn()
  images: Image[];
}
 */