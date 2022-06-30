import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UsersModule } from './user/user.module';
@Module({
  imports: [
    UsersModule, TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'testnest',
      entities: [__dirname + '/../**/entities/*.js'],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
