import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { Mod } from 'src/entities/mod.model';


@Injectable()
export class ModService {
  constructor(
    @InjectModel(Mod)
    private modRepository: Repository<Mod>,
  ) { }

  async index(): Promise<Mod[]> {
    return await this.modRepository.findAll();
  }

  async show(id: string): Promise<Mod> {
    return await this.modRepository.findOne({ where: { id } });
  }

  async create(mod: Mod): Promise<Mod> {
    return await this.modRepository.create(mod);
  }

  async delete(id: string): Promise<Mod> {
    try {
      const mod = await this.modRepository.findOne({ where: { id } });
      await mod.destroy();
      return mod;
    } catch (error) {
      throw new HttpException(error.toString(), 500);
    }
    
  }
}
