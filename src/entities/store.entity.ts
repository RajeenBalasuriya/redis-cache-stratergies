import {
  Entity, BaseEntity, PrimaryGeneratedColumn, Column,
  ManyToOne, JoinColumn
} from 'typeorm';
import { Address } from './address.entity';
import { Staff } from './staff.entity';

@Entity()
export class Store extends BaseEntity {
  @PrimaryGeneratedColumn()
  store_id: number;

  @Column()
  manager_staff_id: number;

  @ManyToOne(() => Staff)
  @JoinColumn({ name: 'manager_staff_id' })
  manager: Staff;

  @Column()
  address_id: number;

  @ManyToOne(() => Address)
  @JoinColumn({ name: 'address_id' })
  address: Address;

  @Column({ type: 'timestamp' })
  last_update: Date;
}
