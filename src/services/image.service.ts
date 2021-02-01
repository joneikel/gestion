import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Image } from 'src/entities/image.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private imageRepository: Repository<Image>,
  ) {}

  async index(): Promise<Image[]> {
    return await this.imageRepository.find();
  }

  async show(id: string): Promise<Image> {
    return await this.imageRepository.findOne(id);
  }

  async create(image: Image): Promise<Image> {
    return await this.imageRepository.save(image);
  }

  async update(imageData: Image): Promise<Image> {
    const image = await this.imageRepository.update(
      { id: imageData.id },
      imageData,
    );
    return image.raw;
  }

  async delete(id: string): Promise<Image> {
    const image = await this.imageRepository.delete({ id });
    return image.raw;
  }
}
