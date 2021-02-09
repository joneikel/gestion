import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
} from '@nestjs/common';
import { Role } from 'src/entities/role.model';
import { RoleService } from 'src/services/role.service';

@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Post()
  async createRole(@Body() data: Role): Promise<Role> {
    return await this.roleService.create(data);
  }

  @Get()
  async getRoles(): Promise<Role[]> {
    return await this.roleService.index();
  }

  @Patch(':id')
  async updateRole(@Param() id: string, @Body() roleData: Partial<Role>) {
    return await this.roleService.update(id, roleData);
  }

  @Delete(':id')
  async deleteRole(@Param() id: string) {
    return await this.roleService.delete(id);
  }
}
