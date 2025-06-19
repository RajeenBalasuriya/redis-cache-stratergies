import {
  Entity, BaseEntity, PrimaryGeneratedColumn, Column,
  OneToMany
} from 'typeorm';
import { Film } from './film.entity';

@Entity()
export class Language extends BaseEntity {
  @PrimaryGeneratedColumn()
  language_id: number;

  @Column()
  name: string;

  @Column({ type: 'timestamp' })
  last_update: Date;

  @OneToMany(() => Film, film => film.language)
  films: Film[];
}
