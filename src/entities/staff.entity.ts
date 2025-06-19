import {
  Entity, BaseEntity, PrimaryGeneratedColumn, Column,
  ManyToOne, OneToOne, OneToMany, JoinColumn
} from 'typeorm';
import { Address } from './address.entity';
import { Store } from './store.entity';

@Entity()
export class Staff extends BaseEntity {
  @PrimaryGeneratedColumn()
  staff_id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  address_id: number;

  @ManyToOne(() => Address)
  @JoinColumn({ name: 'address_id' })
  address: Address;

  @Column()
  email: string;

  @Column()
  store_id: number;

  @ManyToOne(() => Store)
  @JoinColumn({ name: 'store_id' })
  store: Store;

  @Column()
  active: boolean;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ type: 'timestamp' })
  last_update: Date;

  @Column({ type: 'bytea', nullable: true }) // or 'blob' for MySQL
  picture: Buffer;

  @OneToOne(() => Store, store => store.manager)
  manages: Store;
}
