import {
  Entity, BaseEntity, PrimaryGeneratedColumn, Column,
  OneToMany
} from 'typeorm';
import { City } from './city.entity';

@Entity()
export class Country extends BaseEntity {
  @PrimaryGeneratedColumn()
  country_id: number;

  @Column()
  country: string;

  @Column({ type: 'timestamp' })
  last_update: Date;

  @OneToMany(() => City, city => city.country)
  cities: City[];
}
