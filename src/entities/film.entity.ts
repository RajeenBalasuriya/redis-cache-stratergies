import {
  Entity, BaseEntity, PrimaryGeneratedColumn, Column,
  ManyToOne, OneToMany, JoinColumn
} from 'typeorm';
import { Language } from './language.entity';
import { FilmActor } from './film_actor.entity';
import { FilmCategory } from './film_category.entity';

@Entity()
export class Film extends BaseEntity {
  @PrimaryGeneratedColumn()
  film_id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  release_year: number;

  @ManyToOne(() => Language)
  @JoinColumn({ name: 'language_id' })
  language: Language;

  @Column()
  language_id: number;

  @Column({ nullable: true })
  rental_duration: number;

  @Column({ type: 'decimal', precision: 4, scale: 2, nullable: true })
  rental_rate: number;

  @Column({ nullable: true })
  length: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  replacement_cost: number;

  @Column({ nullable: true })
  rating: string;

  @Column({ nullable: true })
  special_features: string;

  @Column({ type: 'timestamp' })
  last_update: Date;

  @OneToMany(() => FilmActor, filmActor => filmActor.film)
  film_actors: FilmActor[];

  @OneToMany(() => FilmCategory, filmCategory => filmCategory.film)
  film_categories: FilmCategory[];
}
