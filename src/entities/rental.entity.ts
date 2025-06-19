import {
  Entity, BaseEntity, PrimaryGeneratedColumn, Column,
  ManyToOne, JoinColumn, OneToMany
} from 'typeorm';
import { Inventory } from './inventory.entity';
import { Customer } from './customer.entity';
import { Staff } from './staff.entity';
import { Payment } from './payment.entity';

@Entity()
export class Rental extends BaseEntity {
  @PrimaryGeneratedColumn()
  rental_id: number;

  @Column({ type: 'timestamp' })
  rental_date: Date;

  @Column()
  inventory_id: number;

  @ManyToOne(() => Inventory)
  @JoinColumn({ name: 'inventory_id' })
  inventory: Inventory;

  @Column()
  customer_id: number;

  @ManyToOne(() => Customer)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @Column({ type: 'timestamp', nullable: true })
  return_date: Date;

  @Column()
  staff_id: number;

  @ManyToOne(() => Staff)
  @JoinColumn({ name: 'staff_id' })
  staff: Staff;

  @Column({ type: 'timestamp' })
  last_update: Date;

  @OneToMany(() => Payment, payment => payment.rental)
  payments: Payment[];
}
