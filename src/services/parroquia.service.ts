import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Parroquia } from 'src/entities/parroquia.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ParroquiaService {
  constructor(
    @InjectRepository(Parroquia)
    private parroquiaRepository: Repository<Parroquia>,
  ) {}

  async index(): Promise<Parroquia[]> {
    return await this.parroquiaRepository.find();
  }

  async getParroquiaFiltered(filter: Partial<Parroquia>): Promise<Parroquia[]> {
    return await this.parroquiaRepository.find(filter);
  }

  async show(id: string): Promise<Parroquia> {
    return await this.parroquiaRepository.findOne(id, {
      relations: ['municipio'],
    });
  }

  async create(parroquia: Parroquia): Promise<Parroquia> {
    return await this.parroquiaRepository.save(parroquia);
  }

  async update(parroquiaData: Parroquia): Promise<Parroquia> {
    const parroquia = await this.parroquiaRepository.update(
      { id: parroquiaData.id },
      parroquiaData,
    );
    return parroquia.raw;
  }

  async delete(id: string): Promise<Parroquia> {
    const parroquia = await this.parroquiaRepository.delete({ id });
    return parroquia.raw;
  }
}
