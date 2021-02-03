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
import { Parroquia } from './entities/parroquia.entity';
import { Municipio } from './entities/municipio.entity';
import { Activity } from './entities/activity.entity';
import { UsersModule } from './modules/users.module';
import { ModModule } from './modules/mod.module';
import { ScopeModule } from './modules/scope.module';
import { RoleModule } from './modules/role.module';
import { InstitutionModule } from './modules/institution.module';
import { SectorModule } from './modules/sector.module';
import { MeasurementModule } from './modules/measurement.module';
import { InvestmentAreaModule } from './modules/invesment_area.module';
import { InvestmentArea } from './entities/investment_area.entity';
import { Measurement } from './entities/measurement.entity';
import { MunicipioModule } from './modules/municipio.module';
import { ProjectModule } from './modules/project.module';
import { ProgramModule } from './modules/programModule';
import { ParroquiaModule } from './modules/parroquia.module';
import { ActivityModule } from './modules/activity.module';

@Module({
  imports: [
    UsersModule,
    ModModule,
    MunicipioModule,
    ScopeModule,
    ProgramModule,
    RoleModule,
    ParroquiaModule,
    InstitutionModule,
    ActivityModule,
    SectorModule,
    MeasurementModule,
    ProjectModule,
    InvestmentAreaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '0000',
      database: 'gestion',
      entities: [
        User,
        Scope,
        Mod,
        Role,
        Project,
        Institution,
        Program,
        Sector,
        Parroquia,
        Municipio,
        Activity,
        InvestmentArea,
        Measurement,
      ],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
