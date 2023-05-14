import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { UserEntity } from './user.entity';

@Entity()
export class OrderEntity {
  @PrimaryKey()
  orderIdx!: number;

  @Property()
  orderName!: string;

  @ManyToOne(() => UserEntity)
  user: UserEntity;

  @Property()
  Count!: number;
}
