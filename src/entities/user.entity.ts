import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class UserEntity {
  @PrimaryKey()
  id!: string;

  @Property()
  password!: string;

  @Property()
  nickname?: string;

  @Property()
  address?: string;
}
