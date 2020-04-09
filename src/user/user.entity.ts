import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PhysicalData } from '../physical-data/physical-data.entity';
import { TrainingSession } from '../training-session/training-session.entity';
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    size: number;

    @Column({unique: true})
    email: string;

    @OneToMany(type => PhysicalData, physicalData => physicalData.user)
    physicalDatas: PhysicalData[];

    @OneToMany(type => TrainingSession, trainingSession => trainingSession.user)
    trainingSessions: TrainingSession[];

}
