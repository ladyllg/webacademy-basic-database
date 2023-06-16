import {
    Table, Model, Column, DataType, IsUUID, PrimaryKey,
    AllowNull, IsEmail, Unique, ForeignKey, HasOne, HasMany
} from "sequelize-typescript";
import isEmail from "validator/lib/isEmail";

@Table({
    timestamps: true,
})

export class Cliente extends Model {
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
    name!: string;
    @AllowNull(true)
    @Column({
        type: DataType.STRING,
    })
    endereco!: string;
    @AllowNull(true)
    @IsEmail
    @Column({
        type: DataType.STRING,
    })
    email!: string;
}