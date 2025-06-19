import {
  Entity, BaseEntity, PrimaryGeneratedColumn, Column,
  ManyToOne, OneToMany, JoinColumn
} from 'typeorm';
import { City } from './city.entity';
import { Store } from './store.entity';

@Entity()
export class Address extends BaseEntity {
  @PrimaryGeneratedColumn()
  address_id: number;

  @Column()
  address: string;

  @Column({ nullable: true })
  address2: string;

  @Column()
  district: string;

  @Column()
  city_id: number;

  @ManyToOne(() => City)
  @JoinColumn({ name: 'city_id' })
  city: City;

  @Column({ nullable: true })
  postal_code: string;

  @Column()
  phone: string;

  @Column({ type: 'timestamp' })
  last_update: Date;

  @OneToMany(() => Store, store => store.address)
  stores: Store[];
}
