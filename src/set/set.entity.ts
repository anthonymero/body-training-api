import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Set {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nbReps: number;

    @Column()
    weight: number;

    @Column()
    recovery: number;

}
