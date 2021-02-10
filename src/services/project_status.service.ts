import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectStatus } from 'src/entities/projectStatus.model';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectStatusService {
  constructor(
    @InjectRepository(ProjectStatus)
    private projectStatusRepository: Repository<ProjectStatus>,
  ) {}

  async index(): Promise<ProjectStatus[]> {
    return await this.projectStatusRepository.find();
  }

  async getProjectStatusFiltered(
    filter: Partial<ProjectStatus>,
  ): Promise<ProjectStatus[]> {
    return await this.projectStatusRepository.find(filter);
  }

  async show(id: string): Promise<ProjectStatus> {
    return await this.projectStatusRepository.findOne(id, {
      relations: ['projects'],
    });
  }

  async create(projectStatus: ProjectStatus): Promise<ProjectStatus> {
    return await this.projectStatusRepository.save(projectStatus);
  }

  async update(ProjectStatus: ProjectStatus): Promise<ProjectStatus> {
    const projectStatus = await this.projectStatusRepository.update(
      { id: ProjectStatus.id },
      ProjectStatus,
    );
    return projectStatus.raw;
  }

  async delete(id: string): Promise<ProjectStatus> {
    const projectStatus = await this.projectStatusRepository.delete({ id });
    return projectStatus.raw;
  }
}
