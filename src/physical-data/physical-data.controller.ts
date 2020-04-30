import { Controller, Post, Get, Body, Param, Patch, Delete, UsePipes } from '@nestjs/common';
import { ValidationPipe } from '../common/pipes/validation.pipe';
import { PhysicalDataService } from './physical-data.service';
import { CreatePhysicalDataDto } from './dto/create-physical-data.dto';
import { PhysicalData } from './physical-data.entity';

@Controller('physical-datas')
export class PhysicalDataController {
    constructor(
        private readonly physicalDataService: PhysicalDataService,
    ) { }

    @Post()
    @UsePipes(new ValidationPipe())
    async create(@Body() createPhysicalDataDto: CreatePhysicalDataDto): Promise<PhysicalData> {
        return await this.physicalDataService.createPhysicalData(createPhysicalDataDto);
    }

    @Get()
    async findAll(): Promise<PhysicalData[]> {
        return await this.physicalDataService.findAll();
    }

    @Get(':id')
    async findOneById(@Param('id') id: string): Promise<PhysicalData | undefined> {
        return await this.physicalDataService.findOneById(id);
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    async update(@Param('id') id: string, @Body() updatedPhysicalData: CreatePhysicalDataDto): Promise<void> {
        return await this.physicalDataService.updatePhysicalData(id, updatedPhysicalData);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return await this.physicalDataService.removePhysicalData(id);
    }
}
