import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../user/user.entity';
import { Exercice } from '../exercice/exercice.entity';

@Entity()
export class TrainingSession {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    date!: Date;

    @Column()
    duration?: number;

    @Column()
    type!: string;

    @ManyToOne(type => User, user => user.trainingSessions)
    user!: User;

    @OneToMany(type => Exercice, exercice => exercice.trainingSession)
    exercices!: Exercice[];

}
