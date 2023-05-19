import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { UserModule } from './api/user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MikroOrmModule.forRoot({
      entities: ['./dist/entities'],
      entitiesTs: ['./src/entities'],
      dbName: 'test',
      clientUrl: process.env.MONGO_URL || '',
      type: 'mongo',
      debug: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
