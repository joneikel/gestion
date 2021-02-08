import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
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
  @JoinColumn()
  institutions: Institution[];
  @Column({ nullable: true })
  image: string;
}
