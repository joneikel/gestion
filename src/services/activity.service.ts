import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { Activity } from 'src/entities/activity.model';
import { ImageService } from './image.service';

@Injectable()
export class ActivityService {
  constructor(
    @InjectModel(Activity)
    private activityRepository: Repository<Activity>,
    private imageService: ImageService,
  ) { }

  async index(): Promise<Activity[]> {
    return await this.activityRepository.findAll();
  }

  async show(id: string): Promise<Activity> {
    return await this.activityRepository.findOne({ where: { id } });
  }

  async create(activity: Activity): Promise<Activity> {
    const images = activity.images.map((image) =>
      this.imageService.create(image),
    );
    const resolvedImages = await Promise.all(images);
    activity.images = resolvedImages;
    return await this.activityRepository.create(activity);
  }

  async delete(id: string): Promise<Activity> {
    try {
      const activity = await this.activityRepository.findOne({ where: { id } });
      await activity.destroy();
      return activity;
    } catch (error) {
      throw new HttpException(error.toString(), 500);
    }
  }
}
