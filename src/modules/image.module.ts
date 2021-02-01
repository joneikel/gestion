import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from 'src/entities/image.entity';
import { ImageService } from 'src/services/image.service';
import { ImageController } from 'src/controllers/image.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Image])],
  providers: [ImageService],
  controllers: [ImageController],
})
export class ImageModule {}
