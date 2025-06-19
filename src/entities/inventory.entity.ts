import {
  Entity, BaseEntity, PrimaryGeneratedColumn, Column,
  ManyToOne, JoinColumn
} from 'typeorm';
import { Film } from './film.entity';
import { Store } from './store.entity';

@Entity()
export class Inventory extends BaseEntity {
  @PrimaryGeneratedColumn()
  inventory_id: number;

  @Column()
  film_id: number;

  @Column()
  store_id: number;

  @ManyToOne(() => Film)
  @JoinColumn({ name: 'film_id' })
  film: Film;

  @ManyToOne(() => Store)
  @JoinColumn({ name: 'store_id' })
  store: Store;

  @Column({ type: 'timestamp' })
  last_update: Date;
}
