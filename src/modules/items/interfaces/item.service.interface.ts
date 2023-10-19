import { FindOneOptions, FindManyOptions, DeleteResult } from 'typeorm';

import { CreateItemDto } from '../dto/createItem.dto';
import { UpdateItemDto } from '../dto/updateItem.dto';
import { ItemEntity } from '../entities/item.entity';

/**
 * A service contract which must be implemented by [ItemService]{@link ItemService}.
 */
export interface ItemServiceInterface {
	/**
	 * Returns a list of all the records of item.
	 */
	getAll(): Promise<ItemEntity[]>;

	/**
	 * Returns a single record of item based on the given item id.
	 * @param {number} id - a unique id / primary key.
	 */
	getOneById(id: number): Promise<ItemEntity>;

	/**
	 * Returns a single record of item based on the given conditions.
	 * @param {FindOneOptions} condition - Condition to apply in query.
	 */
	getOneByCondition(condition: FindOneOptions<any>): Promise<ItemEntity>;

	/**
	 * Returns a list of records of item based on the given conditions.
	 * @param {FindManyOptions} condition - Condition to apply in query.
	 */
	getManyByCondition(
		condition: FindManyOptions<any>
	): Promise<ItemEntity[]>;

	/**
	 * Create record(s).
	 * @param {CreateItemDto} data - Data which need to be inserted in database table.
	 */
	create(data: CreateItemDto): Promise<ItemEntity>;

	/**
	 * Update record(s).
	 * @param {number} id - Primary key of the table.
	 * @param {UpdateItemDto} data - Data which need to be updated in database table.
	 */
	update(id: number, data: UpdateItemDto): Promise<ItemEntity>;

	/**
	 * Create / update item.
	 * @param {CreateItemDto | UpdateItemDto} data - Data which need to be stored in database table.
	 */
	saveChanges(
		data: CreateItemDto | UpdateItemDto
	): Promise<ItemEntity>;

	/**
	 * Delete item based on the given item id.
	 * @param {number} id - a unique id / primary key.
	 */
	delete(id: number): Promise<DeleteResult>;
}
