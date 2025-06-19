import {
  Entity, BaseEntity, PrimaryColumn, Column,
  ManyToOne, JoinColumn
} from 'typeorm';
import { Actor } from './actor.entity';
import { Film } from './film.entity';

@Entity()
export class FilmActor extends BaseEntity {
  @PrimaryColumn()
  actor_id: number;

  @PrimaryColumn()
  film_id: number;

  @Column({ type: 'timestamp' })
  last_update: Date;

  @ManyToOne(() => Actor, actor => actor.film_actors)
  @JoinColumn({ name: 'actor_id' })
  actor: Actor;

 @ManyToOne(()=>Film,(film)=>film.film_actors)
 @JoinColumn({name:'film_id'})
 film:Film
}
