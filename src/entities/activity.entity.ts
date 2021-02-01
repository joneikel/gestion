import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { Image } from './image.entity';
import { InvestmentArea } from './investment_area.entity';
import { Measurement } from './measurement.entity';
import { Municipio } from './municipio.entity';
import { Parroquia } from './parroquia.entity';
import { Project } from './project.entity';

@Entity()
export class Activity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @ManyToOne(() => Project, (projectId) => projectId.activities)
  project: Project;
  @Column()
  description: string;
  @OneToOne(() => Municipio)
  @JoinColumn()
  municipio: Municipio;
  @OneToOne(() => Parroquia)
  @JoinColumn()
  parroquia: Parroquia;
  @Column()
  gobernador: boolean;
  @Column({ nullable: true })
  conclusion: string;
  @ManyToOne(() => Measurement, (measurement) => measurement.activity)
  @JoinTable()
  measurement: Measurement;
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
  @Column()
  gestionImpact: number;
  @Column({ precision: 6, type: 'decimal', nullable: true })
  latitude: number;
  @Column({ precision: 6, type: 'decimal', nullable: true })
  longitude: number;
  @ManyToMany(() => InvestmentArea)
  @JoinTable()
  investmentArea: InvestmentArea[];
  @OneToMany(() => Image, (image) => image.activity)
  images: Image[];
}
