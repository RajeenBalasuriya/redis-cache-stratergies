import {
  Entity, BaseEntity, PrimaryGeneratedColumn, Column,
  OneToMany
} from 'typeorm';
import { FilmCategory } from './film_category.entity';

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  category_id: number;

  @Column()
  name: string;

  @Column({ type: 'timestamp' })
  last_update: Date;

  @OneToMany(() => FilmCategory, filmCategory => filmCategory.category)
  film_categories: FilmCategory[];
}
