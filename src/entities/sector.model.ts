import {
  Column,
  HasMany,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';

@Table
export class Sector extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;
  @Unique(true)
  @Column
  name: string;
  @Unique(true)
  @Column
  code: string;
  @HasMany(() => )
  @OneToMany(() => Institution, (institution) => institution.sector)
  @JoinColumn()
  institutions: Institution[];
}
/* import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Institution } from './institution.model';

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
 */
