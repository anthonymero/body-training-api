import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Exercice } from '../exercice/exercice.entity';

@Entity()
export class Set {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nbReps!: number;

    @Column()
    weight!: number;

    @Column()
    recovery!: number;

    @ManyToOne(() => Exercice, exercice => exercice.sets)
    exercice!: Exercice;

}
