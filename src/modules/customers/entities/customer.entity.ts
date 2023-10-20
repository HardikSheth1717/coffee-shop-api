import { OrderEntity } from '../../orders/entities/order.entity';
import { CustomerPointEntity } from '../../customer-points/entities/customer-point.entity';
import { Entity, Column, OneToMany } from 'typeorm';

/**
 * An entity class for customers table in the database.
 */
@Entity('customers')
export class CustomerEntity {
	/**
	 * PK of the table.
	 */
	@Column({
		name: 'customer_id',
		type: 'int',
		comment: 'PK of the table.',
		generated: 'increment',
		primary: true,
		nullable: false,
		unique: true
	})
	customerId: number;

	/**
	 * Name of the customer.
	 */
	@Column({
		name: 'customer_name',
		type: 'varchar',
		length: 100,
		comment: 'Name of the customer.',
		nullable: false
	})
	customerName: string;

	/**
	 * Mobile number of the customer.
	 */
	@Column({
		name: 'mobile_no',
		type: 'varchar',
		length: 15,
		comment: 'Mobile number of the customer.',
		nullable: false,
		unique: true
	})
	mobileNo: string;
	
	@OneToMany(() => CustomerPointEntity, (customerPoint) => customerPoint.customer)
	customerPoint: CustomerPointEntity[];

	@OneToMany(() => OrderEntity, (order) => order.customer)
	customerPointOrder: OrderEntity[];
}
