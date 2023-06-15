import {
    Table, Model, Column, DataType, IsUUID, PrimaryKey,
    AllowNull, IsEmail, Unique, ForeignKey, BelongsTo, HasMany
} from "sequelize-typescript";

import { Cliente } from './Cliente'
import { Produto } from "./Produto";

@Table({
    timestamps: true,
})

export class Venda extends Model {
    @IsUUID('all')
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV1,
    })
    id!: string;
    @ForeignKey(() => Cliente)
    @AllowNull(false)
    @Column({
        type: DataType.UUID,
    })
    id_cliente!: string;
    
}