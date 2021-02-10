import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mod } from 'src/entities/mod.model';
import { Repository } from 'typeorm';

@Injectable()
export class ModService {
  constructor(
    @InjectRepository(Mod)
    private modRepository: Repository<Mod>,
  ) {}

  async index(): Promise<Mod[]> {
    return await this.modRepository.find({
      relations: ['scopes'],
    });
  }

  async show(id: string): Promise<Mod> {
    return await this.modRepository.findOne(id, {
      relations: ['scopes'],
    });
  }

  async create(mod: Mod): Promise<Mod> {
    return await this.modRepository.save(mod);
  }

  async update(modData: Mod): Promise<Mod> {
    const mod = await this.modRepository.update({ id: modData.id }, modData);
    return mod.raw;
  }

  async delete(id: string): Promise<Mod> {
    const mod = await this.modRepository.delete({ id });
    return mod.raw;
  }
}
