import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private rolesRepository: Repository<Role>,
  ) {}

  async index(): Promise<Role[]> {
    return await this.rolesRepository.find();
  }

  async show(id: string): Promise<Role> {
    return await this.rolesRepository.findOne(id);
  }

  async create(role: Role): Promise<Role> {
    return await this.rolesRepository.save(role);
  }

  async update(roleData: Role): Promise<Role> {
    const role = await this.rolesRepository.update(
      { id: roleData.id },
      roleData,
    );
    return role.raw;
  }

  async delete(id: string): Promise<Role> {
    const role = await this.rolesRepository.delete({ id });
    return role.raw;
  }
}
