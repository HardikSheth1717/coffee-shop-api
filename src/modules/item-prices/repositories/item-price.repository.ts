import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseAbstractRepository } from '@base/repositories/base.repository';
import { ItemPriceRepositoryInterface } from '../interfaces/item-price.repository.interface';
import { ItemPriceEntity } from '../entities/item-price.entity';

/**
 * A repository for item_prices table.
 */
@Injectable()
export class ItemPriceRepository
	extends BaseAbstractRepository<ItemPriceEntity>
	implements ItemPriceRepositoryInterface
{
	constructor(
		@InjectRepository(ItemPriceEntity)
		private readonly itemPriceRepository: Repository<ItemPriceEntity>
	) {
		super(itemPriceRepository);
	}
}
