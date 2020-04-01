import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {

    constructor(
        private readonly userService: UserService,
    ) { }

    @Get(':id')
    async findOne(@Param() id): Promise<User> {
        return await this.userService.findOneById(+id);
    }

    @Get()
    async findAll(): Promise<User[]> {
        return await this.userService.findAll();
    }

    @Post()
    async create(@Body() userData: any): Promise<User> {
        return await this.userService.createUser(userData);
    }

    @Patch(':id')
    async updateUser(@Param() id: string, @Body() userToUpdate: Partial<User>): Promise<void> {
        return await this.userService.updateUser(id, userToUpdate);
    }

    @Delete(':id')
    async deleteUser(@Param() id: string): Promise<void> {
        await this.userService.removeUser(id);
    }
}
