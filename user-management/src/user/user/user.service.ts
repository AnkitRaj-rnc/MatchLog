import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { user } from 'src/entities/user.enity';
import { UpdateResult, DeleteResult } from 'typeorm';


//  imported the user entity, Repository and InjectRepository symbols. Next, i used inject the user 
// repository via the constructor of the service. The injected userRepository 
// provides methods that we can call to run CRUD operations against the test database table.

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(user)
        private userRepository: Repository<user>,
    ) { }
    async findAll(): Promise<user[]> {
        // this return user details from userRepositary
        return await this.userRepository.find();
    }

    async create(user: user): Promise<user> {
        // this saves user details into userRepositary
        
        return await this.userRepository.save(user);
    }

    async update(user: user): Promise<UpdateResult> {
        // this return updated user details from userRepositary
        return await this.userRepository.update(user.id, user);
    }

    async delete(id): Promise<DeleteResult> {
        // this deletes user details from userRepositary
        
        return await this.userRepository.delete(id);
    }

}

