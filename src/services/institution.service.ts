import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { Institution } from 'src/entities/institution.model';


@Injectable()
export class InstitutionService {
  constructor(
    @InjectModel(Institution)
    private institutionRepository: Repository<Institution>,
  ) { }

  async index(): Promise<Institution[]> {
    return await this.institutionRepository.findAll();
  }

  async show(id: string): Promise<Institution> {
    return await this.institutionRepository.findOne({ where: { id } });
  }

  async create(institution: Institution): Promise<Institution> {
    return await this.institutionRepository.create(institution);
  }

  async delete(id: string): Promise<Institution> {
    try {
      const institution = await this.institutionRepository.findOne({ where: { id } });
      await institution.destroy();
      return institution;
    } catch (error) {
      throw new HttpException(error.toString(), 500);
    }
  }

}
