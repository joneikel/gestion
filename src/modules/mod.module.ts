import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Mod } from 'src/entities/mod.model';
import { ModService } from 'src/services/mod.service';
import { ModController } from 'src/controllers/mod.controller';

@Module({
  imports: [SequelizeModule.forFeature([Mod])],
  providers: [ModService],
  controllers: [ModController],
})
export class ModModule {}
