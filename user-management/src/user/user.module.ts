import { Module } from '@nestjs/common';
import { UserService } from './user/user.service'; 
import { UserController } from './user/user.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from 'src/entities/user.enity'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([user]),
  ],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
