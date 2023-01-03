import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import config from './config/keys';

@Module({
  imports: [MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
