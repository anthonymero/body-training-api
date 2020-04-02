import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { IUser } from './user.interface';

@Controller('users')
export class UserController {

    constructor(
        private readonly userService: UserService,
    ) { }

    @Get(':id')
    // async findOne(@Param('id') id: string): Promise<User> {
    // return await this.userService.findOneById(id);
    async findOne(@Param('id') id: string) {
        return (id);
    }

    @Get()
    async findAll(): Promise<IUser[]> {
        return await this.userService.findAll();
    }

    @Post()
    async create(@Body() userData: any): Promise<IUser> {
        return await this.userService.createUser(userData);
    }

    @Patch(':id')
    async updateUser(@Param('id') id: string, @Body() userToUpdate: Partial<User>): Promise<void> {
        return await this.userService.updateUser(id, userToUpdate);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<void> {
        await this.userService.removeUser(id);
    }
}
