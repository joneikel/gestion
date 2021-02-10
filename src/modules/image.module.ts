import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from 'src/entities/image.model';
import { ImageService } from 'src/services/image.service';
import { ImageController } from 'src/controllers/image.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Image])],
  providers: [ImageService],
  controllers: [ImageController],
  exports: [TypeOrmModule, ImageService],
})
export class ImageModule {}
