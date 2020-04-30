import { Controller, Post, Body, Get, Param, Patch, Delete, UsePipes } from '@nestjs/common';
import { ValidationPipe } from '../common/pipes/validation.pipe';
import { SetService } from './set.service';
import { CreateSetDto } from './dto/create-set.dto';
import { Set } from './set.entity';

@Controller('sets')
export class SetController {
    constructor(
        private readonly setService: SetService,
    ) {}

    @Post()
    @UsePipes(new ValidationPipe())
    async create(@Body() createSetDto: CreateSetDto): Promise<Set> {
        return await this.setService.createSet(createSetDto);
    }

    @Get(':id')
    async findOneById(@Param('id') id: string): Promise<Set> {
        return await this.setService.findOneSet(id);
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    async update(@Param('id') id: string, @Body() setToUpdate: CreateSetDto): Promise<void> {
        return await this.setService.updateSet(id, setToUpdate);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return await this.setService.removeSet(id);
    }
}
