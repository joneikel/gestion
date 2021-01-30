import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Municipio } from './municipio.entity';

@Entity()
export class Parroquia {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  name: string;
  @ManyToOne(() => Municipio, (municipio_id) => municipio_id.parroquias)
  municipio_id: Municipio;
}
