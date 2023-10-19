import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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
		private readonly itemRepository: Repository<ItemEntity>
	) {
		super(itemRepository);
	}
}
