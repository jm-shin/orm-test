import { Module } from '@nestjs/common';
import { UserModule } from './api/user/user.module';
import { OrmModule } from './modules/orm/orm.module';

@Module({
  imports: [OrmModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
