import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { ProjectStatus } from 'src/entities/projectStatus.model';


@Injectable()
export class ProjectStatusService {
  constructor(
    @InjectModel(ProjectStatus)
    private projectStatusRepository: Repository<ProjectStatus>,
  ) { }

  async index(): Promise<ProjectStatus[]> {
    return await this.projectStatusRepository.findAll();
  }


  async show(id: string): Promise<ProjectStatus> {
    return await this.projectStatusRepository.findOne({ where: { id } });
  }

  async create(projectStatus: ProjectStatus): Promise<ProjectStatus> {
    return await this.projectStatusRepository.create({ where: { projectStatus } });
  }

  async delete(id: string): Promise<ProjectStatus> {
    try {
      const projectStatus = await this.projectStatusRepository.findOne({ where: { id } });
      await projectStatus.destroy();
      return projectStatus;
    } catch (error) {
      throw new HttpException(error.toString(), 500);
    }

  }
}
