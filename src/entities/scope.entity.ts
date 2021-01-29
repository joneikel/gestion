import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Mod } from './mod.entity';

@Entity()
export class Scope {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  name: string;
  @ManyToOne(() => Mod, (mod) => mod.scopes)
  mod: Mod;
  @Column()
  label: string;
}
