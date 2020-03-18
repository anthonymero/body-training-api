import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TrainingSession {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    duration: number;

    @Column()
    type: string;

}
