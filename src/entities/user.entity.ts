import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Institution } from './institution.entity';
import { Role } from './role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  identification: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @Column({ default: true })
  isActive: boolean;
  @OneToOne(() => Role)
  @JoinColumn()
  role: Role;
  @OneToOne(() => Institution)
  @JoinColumn()
  institution: Institution;
}
