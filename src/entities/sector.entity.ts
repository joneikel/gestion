import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { Institution } from './institution.entity';

@Entity()
export class Sector {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  name: string;
  @Column({ unique: true })
  code: string;
  @OneToMany(() => Institution, (institution) => institution.sector)
  institutions: Institution[];
}
