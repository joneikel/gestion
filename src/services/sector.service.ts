import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { Sector } from 'src/entities/sector.model';


@Injectable()
export class SectorService {
  constructor(
    @InjectModel(Sector)
    private sectorRepository: Repository<Sector>,
  ) {}

  async index(): Promise<Sector[]> {
    return await this.sectorRepository.findAll();
  }

  async show(id: string): Promise<Sector> {
    return await this.sectorRepository.findOne({where:{id}});
  }

  async create(sector: Sector): Promise<Sector> {
    return await this.sectorRepository.create({where:{sector}});
  }

  async delete(id: string): Promise<Sector> {

    try {
      const sector = await this.sectorRepository.findOne({where:{ id }});
      await sector.destroy();
      return sector;
    } catch (error) {
      throw new HttpException(error.toString(), 500);
    }
    
  }
}
