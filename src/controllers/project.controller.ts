import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Project } from 'src/entities/project.model';
import { ProjectService } from 'src/services/project.service';

@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Post()
  async createProject(@Body() data): Promise<Project> {
    return await this.projectService.create(data as Project);
  }

  @Get()
  async getProjects(): Promise<Project[]> {
    return await this.projectService.index();
  }

/*   @Get('filter')
  async getProjectsFiltered(@Query() query: Partial<Project>) {
    return await this.projectService.getProjectsFiltered(query);
  } */

  @Get(':id')
  async getProjet(@Param() id: string) {
    return await this.projectService.show(id);
  }
}
