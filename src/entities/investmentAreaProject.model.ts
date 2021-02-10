import { Column, ForeignKey, IsUUID, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { InvestmentArea } from './investmentArea.model';
import { Project } from './project.model';
@Table
export class InvestmentAreaProject extends Model {
    @IsUUID(4)
    @PrimaryKey
    @Column
    id: string;

    @ForeignKey(() => InvestmentArea)
    @Column
    investmentAreaId: string;

    @ForeignKey(() => Project)
    @Column
    projectId: string;

}