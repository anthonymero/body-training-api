import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {

    constructor(
        private readonly userService: UserService,
    ) { }

    @Get()
    async findAll(): Promise<User[]> {
        return await this.userService.findAll();
    }

    @Post()
    async create(@Body() userData: any): Promise<User> {
        return await this.userService.createUser(userData);
    }
}