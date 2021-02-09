import {
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
import { Project } from './project.entity';

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
