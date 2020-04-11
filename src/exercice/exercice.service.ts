import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Exercice } from './exercice.entity';
import { Repository } from 'typeorm';
import { CreateExerciceDto } from './dto/create-exercice.dto';

@Injectable()
export class ExerciceService {
    constructor(
        @InjectRepository(Exercice)
        private readonly exerciceRepository: Repository<Exercice>,
    ) {}

    // Find All exercices
    async findAll(): Promise<Exercice[]> {
        return await this.exerciceRepository.find();
    }

    // Find one exercice by id
    async findOneById(id: number): Promise<Exercice> {
        return await this.exerciceRepository.findOneOrFail(id);
    }

    // Find exercices by ...

    // Create a new exercice
    async createExercice(createExerciceDto: CreateExerciceDto): Promise<Exercice> {
        // Check if exercice does not exist by name
        const newExercice: Exercice = this.exerciceRepository.create({
            name: createExerciceDto.name,
            category: createExerciceDto.category ? createExerciceDto.category : undefined,
            hardness: createExerciceDto.hardness ? createExerciceDto.hardness : undefined,
        });
        await this.exerciceRepository.save(newExercice);
        return newExercice;

    }

    // Update exercice
    async updateExercice(exerciceId: number, exercice: Partial<Exercice>): Promise<void> {
        const exerciceToUpdate = await this.findOneById(exerciceId);
        if (!!exerciceToUpdate) {
            await this.exerciceRepository.update(exerciceId, exercice);
        } else {
            throw new Error(' Exercice does not exist');
        }
    }

    // Remove exercice
    async removeExercice(id: number) {
        const exerciceToRemove =  await this.findOneById(id);
        if (!!exerciceToRemove) {
            await this.exerciceRepository.delete(exerciceToRemove);
        } else {
            throw new Error('exercice does no exist');
        }
    }
}
