import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  @Entity()
  export class User extends BaseEntity {
    @PrimaryGeneratedColumn() //Autoincrementar
    id: number;
  
    @Column()
    firstname: string;

    @Column({unique: true})
    email: String;
    
    @Column()
    lastname: string;
  
    @Column({ default: true })
    active: boolean;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }