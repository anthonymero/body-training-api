import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TrainingSession } from './training-session.entity';
import { Repository } from 'typeorm';
import { CreateTrainingSessionDto } from './dto/create-training-session.dto';

@Injectable()
export class TrainingSessionService {
    constructor(
        @InjectRepository(TrainingSession)
        private readonly trainingSessionRepository: Repository<TrainingSession>,
    ) { }

    // FindAll training sessions
    async findAll(): Promise<TrainingSession[]> {
        return await this.trainingSessionRepository.find();
    }

    // FindAll user training sessions by user id

    // Find training session by id
    async findOneById(id: number): Promise<TrainingSession> {
        return await this.trainingSessionRepository.findOneOrFail(id);
    }

    // Create training session
    async createTrainingSession(createTrainingSessionDto: CreateTrainingSessionDto): Promise<TrainingSession> {
        const newTrainingSession: TrainingSession = this.trainingSessionRepository.create(createTrainingSessionDto);
        await this.trainingSessionRepository.save(newTrainingSession);
        return newTrainingSession;
    }

    // Update training session
    async updateTrainingSession(id: string, trainingSession: CreateTrainingSessionDto): Promise<void> {
        const trainingSessionToUpdate = await this.findOneById(+id);
        if (!!trainingSessionToUpdate) {
            this.trainingSessionRepository.update(id, trainingSession);
        } else {
            throw new Error ('Training Session does not exist');
        }

    }

    // Remove training session
    async removeTrainingSession(id: string): Promise<void> {
        const trainingSessionToRemove = await this.findOneById(+id);
        await this.trainingSessionRepository.delete(trainingSessionToRemove);
    }

}
