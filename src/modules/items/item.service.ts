import { Injectable, Inject } from '@nestjs/common';

import { FindOneOptions, FindManyOptions, DeleteResult } from 'typeorm';

import { DIToken } from '@core/enums/ditoken.enum';

import { ItemRepositoryInterface } from './interfaces/item.repository.interface';
import { ItemServiceInterface } from './interfaces/item.service.interface';

import { CreateItemDto } from './dto/createItem.dto';
import { UpdateItemDto } from './dto/updateItem.dto';
import { ItemEntity } from './entities/item.entity';

/**
 * A service / provider for item master.
 */
@Injectable()
export class ItemService implements ItemServiceInterface {
	constructor(
		@Inject(DIToken.ITEM_REPOSITORY_INTERFACE)
		private readonly itemRepository: ItemRepositoryInterface
	) {}

	/**
	 * Returns a list of all the records of item.
	 */
	getAll(): Promise<ItemEntity[]> {
		try {
			return this.itemRepository.getAll();
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Returns a single record of item based on the given item id.
	 * @param {number} id - a unique id / primary key.
	 */
	getOneById(id: number): Promise<ItemEntity> {
		try {
			return this.itemRepository.getOneById({
				where: {
					itemId: id
				}
			});
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Returns a single record of item based on the given conditions.
	 * @param {FindOneOptions} condition - Condition to apply in query.
	 */
	getOneByCondition(condition: FindOneOptions<any>): Promise<ItemEntity> {
		try {
			return this.itemRepository.getOneByCondition(condition);
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Returns a list of records of item based on the given conditions.
	 * @param {FindManyOptions} condition - Condition to apply in query.
	 */
	getManyByCondition(
		condition: FindManyOptions<any>
	): Promise<ItemEntity[]> {
		try {
			return this.itemRepository.getManyByCondition(condition);
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Create record(s).
	 * @param {CreateItemDto} data - Data which need to be inserted in database table.
	 */
	create(data: CreateItemDto): Promise<ItemEntity> {
		try {
			return this.itemRepository.create(data);
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Update record(s).
	 * @param {number} id - Primary key of the table.
	 * @param {UpdateItemDto} data - Data which need to be updated in database table.
	 */
	update(id: number, data: UpdateItemDto): Promise<ItemEntity> {
		try {
			return this.itemRepository.update(id, data);
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Create / update item.
	 * @param {CreateItemDto | UpdateItemDto} data - Data which need to be stored in database table.
	 */
	saveChanges(
		data: CreateItemDto | UpdateItemDto
	): Promise<ItemEntity> {
		try {
			return this.itemRepository.saveChanges(data);
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Delete item based on the given item id.
	 * @param {number} id - a unique id / primary key.
	 */
	delete(id: number): Promise<DeleteResult> {
		try {
			return this.itemRepository.delete(id);
		} catch (error) {
			throw error;
		}
	}
}
