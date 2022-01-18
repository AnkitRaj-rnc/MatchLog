import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class user {
    // id will be primary created with the help of PrimaryGeneratedColumn methods
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false, length:60})
    firstName: string;

    @Column({length:60})
    lastName: string;

    @Column({nullable:false})
    email: string;

    @Column({nullable:false})
    password: string;

    @Column({nullable:false})
    confirm_password: string;

    @Column({nullable:false})
    gender: string;
}