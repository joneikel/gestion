import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Activity } from 'src/entities/activity.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(Activity)
    private activityRepository: Repository<Activity>,
  ) {}

  async index(): Promise<Activity[]> {
    return await this.activityRepository.find();
  }

  async show(id: string): Promise<Activity> {
    return await this.activityRepository.findOne(id, {
      relations: [
        'measurement',
        'project',
        'municipioId',
        'parroquiaId',
        'investmentArea',
      ],
    });
  }

  async create(activity: Activity): Promise<Activity> {
    return await this.activityRepository.save(activity);
  }

  async update(activityData: Activity): Promise<Activity> {
    const activity = await this.activityRepository.update(
      { id: activityData.id },
      activityData,
    );
    return activity.raw;
  }

  async delete(id: string): Promise<Activity> {
    const activity = await this.activityRepository.delete({ id });
    return activity.raw;
  }
}
