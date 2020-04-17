import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { TrainingSession } from '../training-session/training-session.entity';
import { Set } from '../set/set.entity';
@Entity()
export class Exercice {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    // Todo category enum (pecs, dos, epaules, biceps, triceps, cuisses, mollets ...)
    category?: string;

    @Column()
    // Todo enum hardness ( rookie, easy, medium, hard)
    hardness?: string;

    @ManyToOne(type => TrainingSession, trainingSession => trainingSession.exercices)
    trainingSession?: TrainingSession;

    @OneToMany(() => Set, (set) => set.exercice)
    sets?: Set[];

}
