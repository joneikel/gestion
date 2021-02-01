import { Body, Controller, Get, Post } from '@nestjs/common';
import { Image } from 'src/entities/image.entity';
import { ImageService } from 'src/services/image.service';

@Controller('image')
export class ImageController {
  constructor(private imageService: ImageService) {}

  @Post()
  async createImage(@Body() data): Promise<Image> {
    return await this.imageService.create(data as Image);
  }

  @Get()
  async getImages(): Promise<Image[]> {
    return await this.imageService.index();
  }
}
