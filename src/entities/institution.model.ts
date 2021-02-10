import {
  HasOne,
  Column,
  ForeignKey,
  HasMany,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { Program } from './program.model';
import { Sector } from './sector.model';
import { User } from './user.model';

@Table
export class Institution extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Unique(true)
  @Column
  name: string;

  @Unique(true)
  @Column
  parentId: string;

  @ForeignKey(() => Sector)
  @Column
  sectorId: string;

  @HasOne(() => Sector)
  sector: Sector;

  @HasMany(() => Program)
  programs: Program[];

  @HasMany(() => User)
  users: User[];
}

/* import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
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
  @JoinColumn()
  programs: Program;
  @OneToMany(() => User, (users) => users.institution)
  @JoinColumn()
  users: User[];
  @Column({ nullable: true })
  image: string;
}
 */
