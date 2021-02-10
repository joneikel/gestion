import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Image } from 'src/entities/image.model';
import { ImageService } from 'src/services/image.service';
import { ImageController } from 'src/controllers/image.controller';

@Module({
  imports: [SequelizeModule.forFeature([Image])],
  providers: [ImageService],
  controllers: [ImageController],
  exports: [SequelizeModule, ImageService],
})
export class ImageModule {}
