import { ItemEntity } from '../../items/entities/item.entity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

/**
 * An entity class for item_prices table in the database.
 */
@Entity('item_prices')
export class ItemPriceEntity {
	/**
	 * PK of the table.
	 */
	@Column({
		name: 'item_price_id',
		type: 'int',
		comment: 'PK of the table.',
		generated: 'increment',
		primary: true,
		nullable: false,
		unique: true
	})
	itemPriceId: number;

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
	 * Item price.
	 */
	@Column({
		name: 'price',
		type: 'numeric',
		precision: 18,
		scale: 2,
		comment: 'Item price.',
		nullable: false
	})
	price: number;

	// @ManyToOne(() => ItemEntity, (item) => item.itemPrice)
	// @JoinColumn({
	// 	foreignKeyConstraintName: 'FK_item_price_items',
	// 	name: 'item_id',
	// 	referencedColumnName: 'itemId'
	// })
	// item: ItemEntity;
}
