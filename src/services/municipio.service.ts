import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { Municipio } from 'src/entities/municipio.model';


@Injectable()
export class MunicipioService {
  constructor(
    @InjectModel(Municipio)
    private municipioRepository: Repository<Municipio>,
  ) { }

  async index(): Promise<Municipio[]> {
    return await this.municipioRepository.findAll();
  }

  async show(id: string): Promise<Municipio> {
    return await this.municipioRepository.findOne({ where: { id } });
  }

  async create(municipio: Municipio): Promise<Municipio> {
    return await this.municipioRepository.create(municipio);
  }

  async delete(id: string): Promise<Municipio> {
    try {
      const municipio = await this.municipioRepository.findOne({ where: { id } });
      await municipio.destroy();
      return municipio;
    } catch (error) {
      throw new HttpException(error.toString(), 500);
    }

  }
}
