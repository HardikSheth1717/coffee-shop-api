import { CustomerEntity } from '../../customers/entities/customer.entity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

/**
 * An entity class for customer_points table in the database.
 */
@Entity('customer_points')
export class CustomerPointEntity {
	/**
	 * PK of the table.
	 */
	@Column({
		name: 'customer_point_id',
		type: 'int',
		comment: 'PK of the table.',
		generated: 'increment',
		primary: true,
		nullable: false,
		unique: true
	})
	customerPointId: number;

	/**
	 * FK to customers table.
	 */
	@Column({
		name: 'customer_id',
		type: 'int',
		comment: 'FK to customers table.',
		nullable: false
	})
	customerId: number;

	/**
	 * Available points.
	 */
	@Column({
		name: 'available_points',
		type: 'numeric',
		precision: 18,
		scale: 2,
		comment: 'Available points.',
		nullable: false
	})
	availablePoints: number;

	@ManyToOne(() => CustomerEntity, (customer) => customer.customerPoint)
	@JoinColumn({
		foreignKeyConstraintName: 'FK_customer_points_customers',
		name: 'customer_id',
		referencedColumnName: 'customerId'
	})
	customer: CustomerEntity;
}
