import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';

@Entity({
  tableName: 'mobile_user',
})
export class MobileUser {
  @PrimaryKey()
  _id: ObjectId;

  @Property()
  authCI: string;

  @Property()
  authDate: Date;

  @Property()
  authHashDI: string;

  @Property()
  authName: string;

  @Property()
  birthDay: string;

  @Property()
  email: string;

  @Property()
  idx: number;

  @Property()
  isAuth: boolean;

  @Property()
  isDeleted: boolean;

  @Property()
  isMarketing: boolean;

  @Property()
  isMember: boolean;

  @Property()
  isVerified: boolean;

  @Property()
  lastLoginTime: Date;

  @Property()
  localCode: number;

  @Property()
  loginPlatform: string;

  @Property()
  modData: Date;

  @Property()
  name: string;

  @Property()
  nickname: string;

  @Property()
  password: string;

  @Property()
  payStatus: string;

  @Property()
  phone: string;

  @Property()
  pointsBalance: number;

  @Property()
  receiveMarketingEmail: boolean;

  @Property()
  receiveMarketingPush: boolean;

  @Property()
  receiveMarketingSMS: boolean;

  @Property()
  regData: Date;

  @Property()
  sexCode: number;

  @Property()
  sns: string[];

  @Property()
  uid: string;

  @Property()
  updatedMarketingTime: Date;
}
