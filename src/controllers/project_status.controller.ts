import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProjectStatus } from 'src/entities/project_status.entity';
import { ProjectStatusService } from 'src/services/project_status.service';

@Controller('project-status')
export class ProjectStatusController {
  constructor(private projectStatusService: ProjectStatusService) {}

  @Post()
  async createProjectStatusSource(
    @Body() data: ProjectStatus,
  ): Promise<ProjectStatus> {
    return await this.projectStatusService.create(data);
  }

  @Get()
  async getProjectStatus(): Promise<ProjectStatus[]> {
    return await this.projectStatusService.index();
  }

  @Get(':id')
  async getProjectStatu(@Param() id: string) {
    return await this.projectStatusService.show(id);
  }
}
