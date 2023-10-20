import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

import { BaseAbstractRepository } from '@base/repositories/base.repository';
import { ItemRepositoryInterface } from '../interfaces/item.repository.interface';
import { ItemEntity } from '../entities/item.entity';

/**
 * A repository for item table.
 */
@Injectable()
export class ItemRepository
	extends BaseAbstractRepository<ItemEntity>
	implements ItemRepositoryInterface
{
	constructor(
		@InjectRepository(ItemEntity)
		private readonly itemRepository: Repository<ItemEntity>,
		@InjectDataSource() private readonly connection: DataSource
	) {
		super(itemRepository);
	}

	/**
	 * Get popular item list.
	 */
	async getPopularItems(): Promise<ItemEntity[]> {
		const permissions = await this.connection.query(
			`
			SELECT i.*
			FROM items i
			LEFT JOIN (
				SELECT item_id, COUNT(1) Cnt
				FROM orders
				GROUP BY item_id
			) o ON i.item_id = o.item_id
			ORDER BY o.Cnt DESC
			`
		);

		const permissionsDto = permissions as ItemEntity[];
		return permissionsDto;
	}
}
