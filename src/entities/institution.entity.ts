import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Program } from './program.entity';
import { Sector } from './sector.entity';

@Entity()
export class Institution {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  name: string;
  @Column()
  parent_id: string;
  @OneToOne(() => Sector)
  @JoinColumn()
  sector: Sector;
  @OneToMany(() => Program, (program) => program.institution)
  @JoinTable()
  programs: Program;
}
