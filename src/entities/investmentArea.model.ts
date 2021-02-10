import { BelongsToMany, Column, IsUUID, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';
import { InvestmentAreaProject } from './investmentAreaProject.model';
import { Project } from './project.model';

@Table
export class InvestmentArea extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Unique(true)
  @Column
  name: string;

  @BelongsToMany(() => Project, () => InvestmentAreaProject)
  project: Project[];

}

/* import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Project } from './project.model';

@Entity()
export class InvestmentArea {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  name: string;
  @ManyToMany(() => Project)
  projects: Project[];
}
 */