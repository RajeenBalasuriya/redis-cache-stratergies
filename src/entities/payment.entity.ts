import {
  Entity, BaseEntity, PrimaryGeneratedColumn, Column,
  ManyToOne, JoinColumn
} from 'typeorm';
import { Customer } from './customer.entity';
import { Staff } from './staff.entity';
import { Rental } from './rental.entity';

@Entity()
export class Payment extends BaseEntity {
  @PrimaryGeneratedColumn()
  payment_id: number;

  @Column()
  customer_id: number;

  @ManyToOne(() => Customer)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @Column()
  staff_id: number;

  @ManyToOne(() => Staff)
  @JoinColumn({ name: 'staff_id' })
  staff: Staff;

  @Column({ nullable: true })
  rental_id: number;

  @ManyToOne(() => Rental, { nullable: true })
  @JoinColumn({ name: 'rental_id' })
  rental: Rental;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  amount: number;

  @Column({ type: 'timestamp' })
  payment_date: Date;
}
