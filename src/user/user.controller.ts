import { Controller, Get, Post, Body, Param, Patch, Delete, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { IUser } from './user.interface';
import { ValidationPipe } from './../common/pipes/validation.pipe';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {

    constructor(
        private readonly userService: UserService,
    ) { }

    // Create new user
    @Post()
    @UsePipes(new ValidationPipe())
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return await this.userService.createUser(createUserDto);
    }

    @Get()
    async findAll(): Promise<IUser[]> {
        return await this.userService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<User> {
        return await this.userService.findOneById(+id);

    }

    @Patch(':id')
    async updateUser(@Param('id') id: string, @Body() userToUpdate: CreateUserDto): Promise<void> {
        return await this.userService.updateUser(id, userToUpdate);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<void> {
        await this.userService.removeUser(id);
    }
}
