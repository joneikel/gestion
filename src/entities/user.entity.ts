import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
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
  @Column({ unique: true })
  identification: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @Column({ default: true })
  isActive: boolean;
  @ManyToOne(() => Role, (role) => role.users)
  role: Role;
  @ManyToOne(() => Institution, (institution) => institution.users)
  institution: Institution;
}
