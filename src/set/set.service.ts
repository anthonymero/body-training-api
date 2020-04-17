import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Set } from './set.entity';
import { CreateSetDto } from './dto/create-set.dto';
import { ExerciceService } from 'exercice/exercice.service';
import { Exercice } from 'exercice/exercice.entity';

@Injectable()
export class SetService {
    constructor(
        @InjectRepository(Set)
        private readonly setRepository: Repository<Set>,
        private readonly exerciceService: ExerciceService,
    ) { }

    // Create new set
    async createSet(createSetDto: CreateSetDto): Promise<Set> {
        const exercice: Exercice = await this.exerciceService.findOneById(createSetDto.exerciceId);
        const newSet: Set = this.setRepository.create({
            nbReps: createSetDto.nbReps,
            weight: createSetDto.weight,
            recovery: createSetDto.recovery,
            exercice,
        });
        await this.setRepository.save(newSet);
        return newSet;
    }

    // Find one Set
    async findOneSet(id: string): Promise<Set> {
        return await this.setRepository.findOneOrFail(id);
    }

    // Update set
    async updateSet(id: string, set: CreateSetDto): Promise<void> {
        const setToUpdate = await this.findOneSet(id);
        if (!!setToUpdate) {
            await this.setRepository.update(id, set);
        } else {
            throw new Error('set does not exist');
        }
    }

    // Delete set
    async removeSet(id: string): Promise<void> {
        const setToRemove = await this.findOneSet(id);
        if (!!setToRemove) {
            this.setRepository.delete(setToRemove);
        } else {
            throw new Error('set does not exist');
        }
    }
}
