import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'src/entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  async index(): Promise<Project[]> {
    return await this.projectRepository.find();
  }

  async getProjectsFiltered(filter: Partial<Project>): Promise<Project[]> {
    return await this.projectRepository.find(filter);
  }

  async show(id: string): Promise<Project> {
    return await this.projectRepository.findOne(id, {
      relations: ['program'],
    });
  }

  async create(project: Project): Promise<Project> {
    return await this.projectRepository.save(project);
  }

  async update(projectData: Project): Promise<Project> {
    const project = await this.projectRepository.update(
      { id: projectData.id },
      projectData,
    );
    return project.raw;
  }

  async delete(id: string): Promise<Project> {
    const project = await this.projectRepository.delete({ id });
    return project.raw;
  }

  async countActivities(id: string): Promise<number> {
    const project = await this.projectRepository.findOne(id);
    return project.activities.length;
  }
}
