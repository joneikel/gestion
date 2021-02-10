import { BelongsTo, BelongsToMany, Column, ForeignKey, HasMany, IsUUID, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';
import { Institution } from './institution.model';
import { Project } from './project.model';

@Table
export class Program extends Model{
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Unique(true)
  @Column
  name: string;

  @Column
  description: string;

  @ForeignKey(()=> Institution)
  @Column
  institutionId: string;
  @BelongsTo(()=> Institution)
  institution: Institution;

  @HasMany(()=> Project)
  projects: Project[];
}
/* import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Institution } from './institution.model';
import { Project } from './project.entity';

@Entity()
export class Program {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  name: string;
  @Column()
  description: string;
  @ManyToOne(() => Institution, (institution) => institution.programs)
  institution: Institution;
  @OneToMany(() => Project, (project) => project.program, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  projects: Project[];
}
 */