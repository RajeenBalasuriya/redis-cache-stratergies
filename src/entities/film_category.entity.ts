import {
  Entity, BaseEntity, PrimaryColumn, Column,
  ManyToOne, JoinColumn
} from 'typeorm';
import { Film } from './film.entity';
import { Category } from './category.entity';

@Entity()
export class FilmCategory extends BaseEntity {
  @PrimaryColumn()
  film_id: number;

  @PrimaryColumn()
  category_id: number;

  @Column({ type: 'timestamp' })
  last_update: Date;

  @ManyToOne(() => Film, film => film.film_categories)
  @JoinColumn({ name: 'film_id' })
  film: Film;

  @ManyToOne(() => Category, category => category.film_categories)
  @JoinColumn({ name: 'category_id' })
  category: Category;
}
