import type { Optional } from 'sequelize';
import ArdPlayer from './ard_player.model';
import ArdTeam from './ard_team.model';
import { AutoIncrement, Table, Column, Model, Default, PrimaryKey, Unique, AllowNull, DataType, ForeignKey, DeletedAt, UpdatedAt, CreatedAt } from 'sequelize-typescript';

export interface IArdPlayerArdTeamAttributes {
  id: number;
  ard_player_id?: number;
  ard_team_id?: number;
  is_active: boolean;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type ArdPlayerArdTeamPk = "id";
export type ArdPlayerArdTeamId = ArdPlayerArdTeam[ArdPlayerArdTeamPk];
export type ArdPlayerArdTeamOptionalAttributes = "ard_player_id" | "ard_team_id" | "is_active" | "created_at" | "updated_at" | "deleted_at";
export type ArdPlayerArdTeamCreationAttributes = Optional<IArdPlayerArdTeamAttributes, ArdPlayerArdTeamOptionalAttributes>;

@Table({
  tableName: 'ard_player_ard_team',
  underscored: true,
  indexes: [
    {
      name: "ard_player_ard_team_ard_team_id_ard_player_id_unique",
      unique: true,
      fields: [
        { name: "ard_team_id" },
        { name: "ard_player_id" },
      ]
    },
  ]
})
export default class ArdPlayerArdTeam extends Model<IArdPlayerArdTeamAttributes, ArdPlayerArdTeamCreationAttributes> implements IArdPlayerArdTeamAttributes {

  @Column
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  declare id: number;

  @Column
  @ForeignKey(() => ArdPlayer)
  @Unique(true)
  @AllowNull
  declare ard_player_id?: number;

  @Column
  @ForeignKey(() => ArdTeam)
  @AllowNull
  @Unique(true)
  declare ard_team_id?: number;

  @Column({
    type: DataType.BOOLEAN,
  })
  @Default(1)
  @AllowNull(false)
  declare is_active: boolean;

  @CreatedAt
  declare created_at?: Date;

  @UpdatedAt
  declare updated_at?: Date;

  @DeletedAt
  declare deleted_at?: Date;
}
