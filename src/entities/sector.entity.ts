import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sector {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  name: string;
  @Column({ unique: true })
  code: string;
}
