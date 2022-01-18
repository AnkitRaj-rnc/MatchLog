import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from './entities/user.enity';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "user",
      entities: [user],
      synchronize: true,
      migrations: ["dist/migrations/*{.ts,.js}"],
      migrationsTableName: "migrations_history",
      migrationsRun: true
    }),
  ],
})
export class AppModule {}