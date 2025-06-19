import {BaseEntity,Entity,PrimaryGeneratedColumn,Column, PrimaryColumn, UpdateDateColumn, ManyToOne, JoinColumn} from "typeorm"
import { Actor } from "./actor.entity";

@Entity()
export class FilmActor extends BaseEntity{

    @PrimaryColumn({ type: 'smallint', unsigned: true })
    actor_id:number;
 
    @PrimaryColumn({ type: 'smallint', unsigned: true })
    film_id:number;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    last_update: Date;

    @ManyToOne(()=>Actor,actor=>actor.filmActors,{ onDelete: 'RESTRICT', onUpdate: 'CASCADE' })
    @JoinColumn({name:'actor_id'})
    actor:Actor

    
    
}