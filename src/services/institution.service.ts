import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Institution } from 'src/entities/institution.model';
import { Repository } from 'typeorm';

@Injectable()
export class InstitutionService {
  constructor(
    @InjectRepository(Institution)
    private institutionRepository: Repository<Institution>,
  ) {}

  async index(): Promise<Institution[]> {
    return await this.institutionRepository.find();
  }

  async show(id: string): Promise<Institution> {
    return await this.institutionRepository.findOne(id);
  }

  async create(institution: Institution): Promise<Institution> {
    return await this.institutionRepository.save(institution);
  }

  async update(institutionData: Institution): Promise<Institution> {
    const institution = await this.institutionRepository.update(
      { id: institutionData.id },
      institutionData,
    );
    return institution.raw;
  }

  async delete(id: string): Promise<Institution> {
    const institution = await this.institutionRepository.delete({ id });
    return institution.raw;
  }

  async getInstitutionFiltered(filter: any) {
    const institutions = await this.institutionRepository.find({
      ...filter,
      parentId: filter.parentId || null,
    });
    return institutions;
  }
}
