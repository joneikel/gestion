import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';
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
  @ManyToOne(() => Project, (project_id) => project_id.activities)
  project: Project;
  @Column()
  description: string;
  @Column({ type: 'date' })
  date: Date;
  @OneToOne(() => Municipio)
  @JoinColumn()
  municipio_id: Municipio;
  @OneToOne(() => Parroquia)
  @JoinColumn()
  parroquia_id: Parroquia;
  @Column()
  gobernador: boolean;
  @Column()
  conclusion: string;
  @ManyToOne(() => Measurement, (measurement) => measurement.activity)
  @JoinTable()
  measurement: Measurement;
  @Column()
  address: string;
  @Column({ type: 'date' })
  init_date: Date;
  @Column({ type: 'date' })
  end_date: Date;
  @Column()
  estimated_population: number;
  @Column()
  benefited_population: number;
  @Column()
  gestion_impact: number;
  @Column({ precision: 6, type: 'decimal' })
  latitude: number;
  @Column({ precision: 6, type: 'decimal' })
  longitude: number;
  @ManyToMany(() => InvestmentArea)
  @JoinTable()
  investmentArea: InvestmentArea[];
}
