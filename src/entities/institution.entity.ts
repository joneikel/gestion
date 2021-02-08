import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Program } from './program.entity';
import { Sector } from './sector.entity';
import { User } from './user.entity';

@Entity()
export class Institution {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  name: string;
  @Column({ nullable: true })
  parentId: string;
  @ManyToOne(() => Sector, (sector) => sector.institutions)
  sector: Sector;
  @OneToMany(() => Program, (program) => program.institution)
  programs: Program;
  @OneToMany(() => User, (users) => users.institution)
  users: User[];
}
