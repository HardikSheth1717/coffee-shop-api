import { ItemEntity } from '../../items/entities/item.entity';
import { CustomerEntity } from '../../customers/entities/customer.entity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

/**
 * An entity class for order table in the database.
 */
@Entity('orders')
export class OrderEntity {
	/**
	 * PK of the table.
	 */
	@Column({
		name: 'order_id',
		type: 'int',
		comment: 'PK of the table.',
		generated: 'increment',
		primary: true,
		nullable: false,
		unique: true
	})
	orderId: number;

	/**
	 * Date and time when the order is created.
	 */
	@Column({
		name: 'order_date',
		type: 'timestamp',
		comment: 'Date and time when the order is created.',
		nullable: false
	})
	orderDate: Date;

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
	 * FK to items table.
	 */
	@Column({
		name: 'item_id',
		type: 'int',
		comment: 'FK to items table.',
		nullable: false
	})
	itemId: number;

	/**
	 * Quantity.
	 */
	@Column({
		name: 'quantity',
		type: 'int',
		comment: 'Quantity.',
		nullable: false
	})
	quantity: number;

	/**
	 * Current price of item as per the menu.
	 */
	@Column({
		name: 'cost',
		type: 'numeric',
		precision: 18,
		scale: 2,
		comment: 'Current price of item as per the menu.',
		nullable: false
	})
	cost: number;

	/**
	 * Total price after calculating cost * quantity.
	 */
	@Column({
		name: 'total_price',
		type: 'numeric',
		precision: 18,
		scale: 2,
		comment: 'Total price after calculating cost * quantity',
		nullable: false
	})
	totalPrice: number;

	/**
	 * Name of the payment mode.
	 */
	@Column({
		name: 'payment_mode',
		type: 'varchar',
		length: 30,
		comment: 'Name of the payment mode.',
		nullable: false
	})
	paymentMode: string;

	/**
	 * Points earned or spent on the order.
	 */
	@Column({
		name: 'points_earned',
		type: 'int',
		comment: 'Points earned or spent on the order.',
		nullable: false
	})
	pointsEarned: number;

	@ManyToOne(() => CustomerEntity, (customer) => customer.customerPointOrder)
	@JoinColumn({
		foreignKeyConstraintName: 'FK_orders_customers',
		name: 'customer_id',
		referencedColumnName: 'customerId'
	})
	customer: CustomerEntity;

	@ManyToOne(() => ItemEntity, (item) => item.itemPriceOrder)
	@JoinColumn({
		foreignKeyConstraintName: 'FK_orders_items',
		name: 'item_id',
		referencedColumnName: 'itemId'
	})
	item: ItemEntity;
}
