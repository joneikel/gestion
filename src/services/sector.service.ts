import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sector } from 'src/entities/sector.model';
import { Repository } from 'typeorm';

@Injectable()
export class SectorService {
  constructor(
    @InjectRepository(Sector)
    private sectorRepository: Repository<Sector>,
  ) {}

  async index(): Promise<Sector[]> {
    return await this.sectorRepository.find();
  }

  async show(id: string): Promise<Sector> {
    return await this.sectorRepository.findOne(id);
  }

  async create(sector: Sector): Promise<Sector> {
    return await this.sectorRepository.save(sector);
  }

  async update(sectorData: Sector): Promise<Sector> {
    const sector = await this.sectorRepository.update(
      { id: sectorData.id },
      sectorData,
    );
    return sector.raw;
  }

  async delete(id: string): Promise<Sector> {
    const sector = await this.sectorRepository.delete({ id });
    return sector.raw;
  }
}
