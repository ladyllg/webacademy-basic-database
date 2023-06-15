import {
    Table, Model, Column, DataType, IsUUID, PrimaryKey,
    AllowNull, IsEmail, Unique, ForeignKey, HasOne
} from "sequelize-typescript";

import { Funcionarios } from "./Funcionarios";

@Table({
    timestamps: true,
    updatedAt: true,
    createdAt: false
})

export class Dependentes extends Model {
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
    @AllowNull(true)
    @Column({
        type: DataType.INTEGER,
    })
    idade!: string;
    @HasOne(() => Funcionarios, 'funcionarioId')
    idFuncionario!: Funcionarios;
}