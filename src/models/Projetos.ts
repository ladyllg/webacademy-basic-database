import {
    Table, Model, Column, DataType, IsUUID, PrimaryKey,
    AllowNull, IsEmail, Unique, ForeignKey, HasOne
} from "sequelize-typescript";

import { Departamentos } from "./Departamentos";

@Table({
    timestamps: true,
    updatedAt: true,
    createdAt: false
})

export class Projetos extends Model {
    @IsUUID('all')
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV1,
    })
    id!: string;
    @AllowNull(false)
    @Unique
    @Column({
        type: DataType.STRING,
    })
    name!: string;
    @HasOne(() => Departamentos, 'departamentoId')
    idDepartamento!: Departamentos;
}