import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './entities/user.entity';
import { Scope } from './entities/scope.entity';
import { Mod } from './entities/mod.entity';
import { Role } from './entities/role.entity';
import { Project } from './entities/project.entity';
import { Institution } from './entities/institution.entity';
import { Program } from './entities/program.entity';
import { Sector } from './entities/sector.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'joneikel',
      password: '0000',
      database: 'gestion',
      entities: [User, Scope, Mod, Role, Project, Institution, Program, Sector],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
