import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { IUser } from './user.interface';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    // FindAll users
    async findAll(): Promise<IUser[]> {
        return await this.userRepository.find() as IUser[];
    }

    // Find user by id
    async findOneById(id: number): Promise<User> {
        return await this.userRepository.findOneOrFail(+id);
    }

    // Create User
    async createUser(createUserDto: CreateUserDto): Promise<User> {
        // Todo create helper to
        // Check if user does not allready exists by email
        const newUser: User = this.userRepository.create({
            firstName: createUserDto.firstName,
            lastName: createUserDto.lastName,
            age: createUserDto.age,
            size: createUserDto.size,
            email: createUserDto.email,
        });
        await this.userRepository.save(newUser);
        return newUser;
    }

    // Update User
    async updateUser(id: string, user: CreateUserDto): Promise<void> {
        const userToUpdate = await this.findOneById(+id);
        if (!!userToUpdate) {
            await this.userRepository.update(+id, user);
        } else {
            throw new Error(' User does not exist');
        }
    }

    // Remove User
    async removeUser(id: string): Promise<void> {
        const userToRemove = await this.findOneById(+id);
        await this.userRepository.delete(userToRemove);
    }
}
