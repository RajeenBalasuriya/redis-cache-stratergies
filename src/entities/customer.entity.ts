import {
  Entity, BaseEntity, PrimaryGeneratedColumn, Column,
  ManyToOne, JoinColumn, OneToMany
} from 'typeorm';
import { Address } from './address.entity';
import { Store } from './store.entity';
import { Rental } from './rental.entity';
import { Payment } from './payment.entity';

@Entity()
export class Customer extends BaseEntity {
  @PrimaryGeneratedColumn()
  customer_id: number;

  @Column()
  store_id: number;

  @ManyToOne(() => Store)
  @JoinColumn({ name: 'store_id' })
  store: Store;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  address_id: number;

  @ManyToOne(() => Address)
  @JoinColumn({ name: 'address_id' })
  address: Address;

  @Column()
  active: boolean;

  @Column({ type: 'timestamp' })
  create_date: Date;

  @Column({ type: 'timestamp' })
  last_update: Date;

  @OneToMany(() => Rental, rental => rental.customer)
  rentals: Rental[];

  @OneToMany(() => Payment, payment => payment.customer)
  payments: Payment[];
}
