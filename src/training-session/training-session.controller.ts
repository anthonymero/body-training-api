import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { TrainingSessionService } from './training-session.service';
import { CreateTrainingSessionDto } from './dto/create-training-session.dto';
import { TrainingSession } from './training-session.entity';

@Controller('training-sessions')
export class TrainingSessionController {
    constructor(
        private readonly trainingSessionService: TrainingSessionService,
    ) { }

    @Post()
    async create(@Body() createTrainingSessionDto: CreateTrainingSessionDto): Promise<TrainingSession> {
        return await this.trainingSessionService.createTrainingSession(createTrainingSessionDto);
    }

    @Get()
    async findAll(): Promise<TrainingSession[]> {
        return await this.trainingSessionService.findAll();
    }

    @Get(':id')
    async fondOneById(@Param('id') id: string ): Promise<TrainingSession> {
        return await this.trainingSessionService.findOneById(id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() trainingSessionToUpdate: CreateTrainingSessionDto): Promise<void> {
        return await this.trainingSessionService.updateTrainingSession(id, trainingSessionToUpdate);
    }

    @Delete(':id')
    async delete(@Param('id') id: string ): Promise<void> {
        return await this.trainingSessionService.removeTrainingSession(id);
    }
}
