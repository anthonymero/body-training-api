import { Column, Entity, PrimaryColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class PhysicalData {
    @PrimaryColumn()
    id!: number;

    @Column()
    date!: Date;

    @Column()
    weight!: number;

    @ManyToOne(type => User, user => user.physicalDatas)
    user!: User;
}
