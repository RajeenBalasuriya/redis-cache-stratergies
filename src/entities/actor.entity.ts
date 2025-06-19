import {
  Entity, BaseEntity, PrimaryGeneratedColumn, Column,
  OneToMany,
  JoinColumn
} from 'typeorm';
import { FilmActor } from './film_actor.entity';

@Entity()
export class Actor extends BaseEntity {
  @PrimaryGeneratedColumn()
  actor_id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ type: 'timestamp' })
  last_update: Date;

 @OneToMany(()=>FilmActor,filmActor=>filmActor.actor)
 film_actors:FilmActor[]
 
}
