import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { IUser } from './user.interface';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    // FindAll users
    async findAll(): Promise<IUser[]> {
        return await this.userRepository.find();
    }

    // Find user by id
    async findOneById(id: string): Promise<IUser> {
        return await this.userRepository.findOne(id);
    }

    // Create User
    async createUser(userData): Promise<IUser> {
        // Todo create helper to
        // Check if user does not allready exists by email
        const newUser = this.userRepository.create({
            firstName: userData.firstName,
            lastName: userData.lastName,
            age: userData.age,
            size: userData.size,
            email: userData.email,
        });
        await this.userRepository.save(newUser);
        return newUser;
    }

    // Update User
    async updateUser(id: string, user: Partial<User>): Promise<void> {
        const userToUpdate = await this.findOneById(id);
        if (!userToUpdate) {
            await this.userRepository.update(+id, user);
        } else {
            throw new Error(' User does not exist');
        }
    }

    // Remove User
    async removeUser(id: string): Promise<void> {
        const userToRemove = await this.findOneById(id);
        await this.userRepository.delete(userToRemove);
    }
}
