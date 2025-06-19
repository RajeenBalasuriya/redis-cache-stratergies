import {
  Entity, BaseEntity, PrimaryGeneratedColumn, Column,
  ManyToOne, OneToMany, JoinColumn
} from 'typeorm';
import { Country } from './country.entity';
import { Address } from './address.entity';

@Entity()
export class City extends BaseEntity {
  @PrimaryGeneratedColumn()
  city_id: number;

  @Column()
  city: string;

  @Column()
  country_id: number;

  @ManyToOne(() => Country)
  @JoinColumn({ name: 'country_id' })
  country: Country;

  @Column({ type: 'timestamp' })
  last_update: Date;

  @OneToMany(() => Address, address => address.city)
  addresses: Address[];
}
