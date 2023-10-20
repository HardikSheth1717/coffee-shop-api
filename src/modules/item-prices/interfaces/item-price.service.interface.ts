import { FindOneOptions, FindManyOptions, DeleteResult } from 'typeorm';

import { CreateItemPriceDto } from '../dto/create-item-price.dto';
import { UpdateItemPriceDto } from '../dto/update-item-price.dto';
import { ItemPriceEntity } from '../entities/item-price.entity';

/**
 * A service contract which must be implemented by [ItemPriceService]{@link ItemPriceService}.
 */
export interface ItemPriceServiceInterface {
	/**
	 * Returns a list of all the records of item price.
	 */
	getAll(): Promise<ItemPriceEntity[]>;

	/**
	 * Returns a single record of item price based on the given item price id.
	 * @param {number} id - a unique id / primary key.
	 */
	getOneById(id: number): Promise<ItemPriceEntity>;

	/**
	 * Returns a single record of item price based on the given conditions.
	 * @param {FindOneOptions} condition - Condition to apply in query.
	 */
	getOneByCondition(condition: FindOneOptions<any>): Promise<ItemPriceEntity>;

	/**
	 * Returns a list of records of item price based on the given conditions.
	 * @param {FindManyOptions} condition - Condition to apply in query.
	 */
	getManyByCondition(
		condition: FindManyOptions<any>
	): Promise<ItemPriceEntity[]>;

	/**
	 * Create record(s).
	 * @param {CreateItemPriceDto} data - Data which need to be inserted in database table.
	 */
	create(data: CreateItemPriceDto): Promise<ItemPriceEntity>;

	/**
	 * Update record(s).
	 * @param {number} id - Primary key of the table.
	 * @param {UpdateItemPriceDto} data - Data which need to be updated in database table.
	 */
	update(id: number, data: UpdateItemPriceDto): Promise<ItemPriceEntity>;

	/**
	 * Create / update item price.
	 * @param {CreateItemPriceDto | UpdateItemPriceDto} data - Data which need to be stored in database table.
	 */
	saveChanges(
		data: CreateItemPriceDto | UpdateItemPriceDto
	): Promise<ItemPriceEntity>;

	/**
	 * Delete item price based on the given item price id.
	 * @param {number} id - a unique id / primary key.
	 */
	delete(id: number): Promise<DeleteResult>;
}
