import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
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
  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn()
  role: Role;
  @ManyToOne(() => Institution, (institution) => institution.users)
  @JoinColumn()
  institution: Institution;
}
