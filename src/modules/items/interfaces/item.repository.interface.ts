import { BaseRepositoryInterface } from '@base/interfaces/base.repository.interface';
import { ItemEntity } from '../entities/item.entity';

/**
 * A contract for [ItemRepository]{@link ItemRepository} class.
 */
export interface ItemRepositoryInterface extends BaseRepositoryInterface<ItemEntity> {
	/**
	 * Get popular item list.
	 */
	getPopularItems(): Promise<ItemEntity[]>;
}
