import {
    Table, Model, Column, DataType, IsUUID, PrimaryKey,
    AllowNull, IsEmail, Unique, ForeignKey, BelongsTo
} from "sequelize-typescript";

import { Categoria } from "./Categoria";
import { Venda } from "./Venda";

@Table({
    timestamps: true,
})

export class Produto extends Model {
    @IsUUID('all')
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV1,
    })
    id!: string;
    @AllowNull(false)
    @Column({
        type: DataType.STRING,
    })
    descricao!: string;
    @AllowNull(false)
    @Column({
        type: DataType.FLOAT,
    })
    preco!: string;
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
    })
    quantidade!: string;
    @ForeignKey(() => Categoria)
    @AllowNull(false)
    @Column({
        type: DataType.UUID,
    })
    id_categoria!: string;
    @BelongsTo(() => Categoria)
    categoria!: Categoria;

}