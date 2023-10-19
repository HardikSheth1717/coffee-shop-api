import { BaseRepositoryInterface } from '@base/interfaces/base.repository.interface';
import { ItemEntity } from '../entities/item.entity';

/**
 * A contract for [ItemRepository]{@link ItemRepository} class.
 */
export type ItemRepositoryInterface =
	BaseRepositoryInterface<ItemEntity>;
