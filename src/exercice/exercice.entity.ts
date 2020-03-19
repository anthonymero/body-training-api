import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { TrainingSession } from 'src/training-session/training-session.entity';
import { Set } from '../set/set.entity';
@Entity()
export class Exercice {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    category: string;

    @Column()
    difficulty: string;

    @ManyToOne(type => TrainingSession, trainingSession => trainingSession.exercices)
    trainingSession: TrainingSession;

    @OneToMany(type => Set, set => set.exercice)
    sets: Set[];

}
