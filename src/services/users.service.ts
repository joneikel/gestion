import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.model';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async index(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async show(id: string): Promise<User> {
    return await this.usersRepository.findOne(id, {
      relations: ['role', 'institution', 'role.scopes'],
    });
  }

  async create(user: User): Promise<User> {
    return await this.usersRepository.save(user);
  }

  async update(userData: User): Promise<User> {
    const user = await this.usersRepository.update(
      { id: userData.id },
      userData,
    );
    return user.raw;
  }

  async delete(id: string): Promise<User> {
    const user = await this.usersRepository.delete({ id });
    return user.raw;
  }
}
