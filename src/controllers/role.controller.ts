import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Role } from 'src/entities/role.entity';
import { RoleService } from 'src/services/role.service';

@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Post()
  @UseInterceptors(
    FilesInterceptor('images', 10, {
      dest: './uploads',
    }),
  )
  async createRole(@Body() data: Role, @UploadedFiles() files): Promise<Role> {
    console.log(files);
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
