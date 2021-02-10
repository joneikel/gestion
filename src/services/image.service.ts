import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { Budget } from 'src/entities/budget.model';
import { Image } from 'src/entities/image.model';


@Injectable()
export class ImageService {
  constructor(
    @InjectModel(Image)
    private imageRepository: Repository<Image>,
  ) {}

  async index(): Promise<Image[]> {
    return await this.imageRepository.findAll();
  }

  async show(id: string): Promise<Image> {
    return await this.imageRepository.findOne({ where: {id}});
  }

  async create(image: Image): Promise<Image> {
    return await this.imageRepository.create({ where: {image}});
  }

  async delete(id: string): Promise<Image> {
    try {
        const image = await this.imageRepository.findOne({where: { id }});
        await image.destroy();
        return image;
    } catch (error) {
        throw new HttpException(error.toString(), 500);
    }
  }
}
