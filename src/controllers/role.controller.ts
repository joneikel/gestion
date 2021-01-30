import { Body, Controller, Get, Post } from '@nestjs/common';
import { Role } from 'src/entities/role.entity';
import { RoleService } from 'src/services/role.service';

@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Post()
  async createRole(@Body() data): Promise<Role> {
    return await this.roleService.create(data as Role);
  }

  @Get()
  async getRoles(): Promise<Role[]> {
    return await this.roleService.index();
  }
}
