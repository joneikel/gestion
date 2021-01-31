import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Municipio } from 'src/entities/municipio.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MunicipioService {
  constructor(
    @InjectRepository(Municipio)
    private municipioRepository: Repository<Municipio>,
  ) {}

  async index(): Promise<Municipio[]> {
    return await this.municipioRepository.find();
  }

  async show(id: string): Promise<Municipio> {
    return await this.municipioRepository.findOne(id);
  }

  async create(municipio: Municipio): Promise<Municipio> {
    return await this.municipioRepository.save(municipio);
  }

  async update(municipioData: Municipio): Promise<Municipio> {
    const municipio = await this.municipioRepository.update(
      { id: municipioData.id },
      municipioData,
    );
    return municipio.raw;
  }

  async delete(id: string): Promise<Municipio> {
    const municipio = await this.municipioRepository.delete({ id });
    return municipio.raw;
  }
}
