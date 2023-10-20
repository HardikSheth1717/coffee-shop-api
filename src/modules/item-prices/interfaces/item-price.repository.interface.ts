import { BaseRepositoryInterface } from '@base/interfaces/base.repository.interface';
import { ItemPriceEntity } from '../entities/item-price.entity';

/**
 * A contract for [ItemPriceRepository]{@link ItemPriceRepository} class.
 */
export type ItemPriceRepositoryInterface =
	BaseRepositoryInterface<ItemPriceEntity>;
