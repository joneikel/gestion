import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mod } from 'src/entities/mod.entity';
import { ModService } from 'src/services/mod.service';
import { ModController } from 'src/controllers/mod.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Mod])],
  providers: [ModService],
  controllers: [ModController],
})
export class ModModule {}
