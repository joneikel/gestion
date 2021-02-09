import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/entities/role.model';
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

  async update(id: string, roleData: Partial<Role>): Promise<Role> {
    await this.rolesRepository.update(id, roleData);
    return await this.rolesRepository.findOne(id);
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.rolesRepository.delete(id);
      return true;
    } catch (error) {
      throw new HttpException(error.toString(), 500);
    }
  }
}
