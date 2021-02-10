import { Column, ForeignKey, IsUUID, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Role } from './role.model';
import { Scope } from './scope.model';

@Table
export class RoleScope extends Model {
    @IsUUID(4)
    @PrimaryKey
    @Column
    id: string;

    @ForeignKey(() => Role)
    @Column
    roleId: string;

    @ForeignKey(() => Scope)
    @Column
    scopeId: string;
}