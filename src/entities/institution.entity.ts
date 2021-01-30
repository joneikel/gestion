import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Program } from './program.entity';
import { Sector } from './sector.entity';

@Entity()
export class Institution {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  name: string;
  @Column({ nullable: true })
  parent_id: string;
  @ManyToOne(() => Sector, (sector) => sector.institution)
  @JoinTable()
  sector: Sector;
  @OneToMany(() => Program, (program) => program.institution)
  @JoinTable()
  programs: Program;
}
