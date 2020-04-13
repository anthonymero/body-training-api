import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Set } from './set.entity';

@Injectable()
export class SetService {
    constructor(
        @InjectRepository(Set)
        private readonly setRepository: Repository<Set>,
    ) { }

    // Create new set
    // Todo create createSetDto
    async createSet(set: any): Promise<Set> {
        const newSet: Set = this.setRepository.create({
            nbReps: set.nbReps,
            weight: set.weight,
            recovery: set.recovery,
        });
        await this.setRepository.save(newSet);
        return newSet;
    }

    // Find one Set
    async findOneSet(id: string): Promise<Set> {
        return await this.setRepository.findOneOrFail(id);
    }

    // Update set
    async updateSet(id: string): Promise<void> {
        const setToUpdate = await this.findOneSet(id);
        if (!!setToUpdate) {
            await this.setRepository.update(id, setToUpdate);
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
