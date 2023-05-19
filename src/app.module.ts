import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './api/user/user.module';
import { OrmModule } from './modules/orm/orm.module';

@Module({
  imports: [OrmModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
