import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

}
