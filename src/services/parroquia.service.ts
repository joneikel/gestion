import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { Parroquia } from 'src/entities/parroquia.model';


@Injectable()
export class ParroquiaService {
  constructor(
    @InjectModel(Parroquia)
    private parroquiaRepository: Repository<Parroquia>,
  ) { }

  async index(): Promise<Parroquia[]> {
    return await this.parroquiaRepository.findAll();
  }

  async show(id: string): Promise<Parroquia> {
    return await this.parroquiaRepository.findOne({ where: { id } });
  }

  async create(parroquia: Parroquia): Promise<Parroquia> {
    return await this.parroquiaRepository.create(parroquia);
  }

  async delete(id: string): Promise<Parroquia> {
    try {
      const parroquia = await this.parroquiaRepository.findOne({ where: { id } });
      await parroquia.destroy();
      return parroquia;
    } catch (error) {
      throw new HttpException(error.toString(), 500);
    }

  }
}
