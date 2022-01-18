import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {user} from './user/user.entity'

 // imported TypeOrmModule and used the forRoot() method to pass a configuration object
// here we also difine database configation

@Module({
  imports: [UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      entities: [user],
      synchronize: true,
      migrations: ["dist/migrations/*{.ts,.js}"],
      migrationsTableName: "migrations_history",
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}