import { Injectable, Inject } from '@nestjs/common';

import { FindOneOptions, FindManyOptions, DeleteResult } from 'typeorm';

import { DIToken } from '@core/enums/ditoken.enum';

import { ItemPriceRepositoryInterface } from './interfaces/item-price.repository.interface';
import { ItemPriceServiceInterface } from './interfaces/item-price.service.interface';

import { CreateItemPriceDto } from './dto/create-item-price.dto';
import { UpdateItemPriceDto } from './dto/update-item-price.dto';
import { ItemPriceEntity } from './entities/item-price.entity';

/**
 * A service / provider for item price.
 */
@Injectable()
export class ItemPriceService implements ItemPriceServiceInterface {
	constructor(
		@Inject(DIToken.ITEM_PRICE_REPOSITORY_INTERFACE)
		private readonly itemPriceRepository: ItemPriceRepositoryInterface
	) {}

	/**
	 * Returns a list of all the records of item price.
	 */
	getAll(): Promise<ItemPriceEntity[]> {
		try {
			return this.itemPriceRepository.getAll();
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Returns a single record of item price based on the given item price id.
	 * @param {number} id - a unique id / primary key.
	 */
	getOneById(id: number): Promise<ItemPriceEntity> {
		try {
			return this.itemPriceRepository.getOneById({
				where: {
					itemPriceId: id
				}
			});
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Returns a single record of item price based on the given conditions.
	 * @param {FindOneOptions} condition - Condition to apply in query.
	 */
	getOneByCondition(condition: FindOneOptions<any>): Promise<ItemPriceEntity> {
		try {
			return this.itemPriceRepository.getOneByCondition(condition);
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Returns a list of records of item price based on the given conditions.
	 * @param {FindManyOptions} condition - Condition to apply in query.
	 */
	getManyByCondition(
		condition: FindManyOptions<any>
	): Promise<ItemPriceEntity[]> {
		try {
			return this.itemPriceRepository.getManyByCondition(condition);
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Create record(s).
	 * @param {CreateItemPriceDto} data - Data which need to be inserted in database table.
	 */
	create(data: CreateItemPriceDto): Promise<ItemPriceEntity> {
		try {
			return this.itemPriceRepository.create(data);
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Update record(s).
	 * @param {number} id - Primary key of the table.
	 * @param {UpdateItemPriceDto} data - Data which need to be updated in database table.
	 */
	update(id: number, data: UpdateItemPriceDto): Promise<ItemPriceEntity> {
		try {
			return this.itemPriceRepository.update(id, data);
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Create / update item price.
	 * @param {CreateItemPriceDto | UpdateItemPriceDto} data - Data which need to be stored in database table.
	 */
	saveChanges(
		data: CreateItemPriceDto | UpdateItemPriceDto
	): Promise<ItemPriceEntity> {
		try {
			return this.itemPriceRepository.saveChanges(data);
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Delete item price based on the given item price id.
	 * @param {number} id - a unique id / primary key.
	 */
	delete(id: number): Promise<DeleteResult> {
		try {
			return this.itemPriceRepository.delete(id);
		} catch (error) {
			throw error;
		}
	}
}
