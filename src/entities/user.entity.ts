import { Entity, Property, PrimaryKey } from '@mikro-orm/core';

@Entity({ tableName: 'user' })
export class UserEntity {
  @PrimaryKey()
  idx?: number;

  @Property({ name: 'id' })
  userId!: string;

  @Property()
  password!: string;

  @Property()
  nickname?: string;

  @Property()
  address?: string;
}
