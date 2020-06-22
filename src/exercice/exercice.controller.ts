import { Controller, Get, Post, Body, Param, Put, Patch, Delete, UsePipes, UseGuards } from '@nestjs/common';
import { ValidationPipe } from '../common/pipes/validation.pipe';
import { ExerciceService } from './exercice.service';
import { Exercice } from './exercice.entity';
import { CreateExerciceDto } from './dto/create-exercice.dto';
import { AdminGuard } from '../common/security/admin.guard';

@Controller('exercices')
export class ExerciceController {
    constructor(
        private readonly exerciceService: ExerciceService,
    ) { }

    @Post()
    @UseGuards(new AdminGuard())
    @UsePipes(new ValidationPipe())
    async create(@Body() createExerciceDto: CreateExerciceDto): Promise<Exercice> {
        return await this.exerciceService.createExercice(createExerciceDto);
    }

    @Get()
    async findAll(): Promise<Exercice[]> {
        return await this.exerciceService.findAll();
    }

    @Get(':id')
    async findOneById(@Param('id') id: string ): Promise<Exercice> {
        return await this.exerciceService.findOneById(+id);
    }

    @Patch(':id')
    @UseGuards(new AdminGuard())
    @UsePipes(new ValidationPipe())
    async update(@Param('id') id: string, @Body() exerciceToUpdate: CreateExerciceDto): Promise<void> {
        return await this.exerciceService.updateExercice(+id, exerciceToUpdate);
    }

    @Delete(':id')
    @UseGuards(new AdminGuard())
    async deleteExercice(@Param('id') id: string): Promise<void> {
        return await this.exerciceService.removeExercice(+id);
    }

}
