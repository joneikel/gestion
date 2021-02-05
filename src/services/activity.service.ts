import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Activity } from 'src/entities/activity.entity';
import { Repository } from 'typeorm';
import { ImageService } from './image.service';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(Activity)
    private activityRepository: Repository<Activity>,
    private imageService: ImageService,
  ) {}

  async index(): Promise<Activity[]> {
    return await this.activityRepository.find({
      relations: ['project', 'municipio', 'parroquia','images'],
    });
  }

  async show(id: string): Promise<Activity> {
    return await this.activityRepository.findOne(id, {
      relations: ['project', 'municipio', 'parroquia'],
    });
  }

  async create(activity: Activity): Promise<Activity> {
    const images = activity.images.map((image) =>
      this.imageService.create(image),
    );
    const resolvedImages = await Promise.all(images);
    activity.images = resolvedImages;
    return await this.activityRepository.save(activity);
  }

  async update(id: string, acyivityData: Partial<Activity>): Promise<Activity> {
    await this.activityRepository.update(id, acyivityData);
    return await this.activityRepository.findOne(id);
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.activityRepository.delete(id);
      return true;
    } catch (error) {
      throw new HttpException(error.toString(), 500);
    }
  }
}
