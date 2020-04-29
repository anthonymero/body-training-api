import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreatePhysicalDataDto } from './dto/create-physical-data.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PhysicalData } from './physical-data.entity';
import { UserService } from 'user/user.service';
import { User } from 'user/user.entity';

@Injectable()
export class PhysicalDataService {
    constructor(
        @InjectRepository(PhysicalData)
        private readonly physicalDataRepository: Repository<PhysicalData>,
        private readonly userService: UserService,
    ) { }

    // Find All physical datas
    async findAll(): Promise<PhysicalData[]> {
        return await this.physicalDataRepository.find();
    }

    // Find One by Id
    async findOneById(id: string): Promise<PhysicalData | undefined> {
        return await this.physicalDataRepository.findOne(id);
    }

    // Create physical data
    async createPhysicalData(physicalData: CreatePhysicalDataDto): Promise<PhysicalData> {
        const user: User = await this.userService.findOneById(physicalData.userId);
        const newPhysicalData = this.physicalDataRepository.create({
            date: physicalData.date,
            weight: physicalData.weight,
            user,
        });
        return await this.physicalDataRepository.save(newPhysicalData);
    }

    // Update physical data
    async updatePhysicalData(id: string, physicalData: CreatePhysicalDataDto): Promise<void> {
        const physicalDataToUpdate = await this.findOneById(id);
        if (!!physicalDataToUpdate) {
            await this.physicalDataRepository.update(id, physicalData);
        } else {
            throw new Error('Physical data does not exist');
        }
    }

    // Remove physical data
    async removePhysicalData(id: string): Promise<void> {
        const physicalDataToRemove = this.findOneById(id);
        if (!!physicalDataToRemove) {
            await this.physicalDataRepository.delete(id);
        } else {
            throw new Error('physical data does not exist');
        }
    }
}
