import { BaseRepositoryInterface } from '@base/interfaces/base.repository.interface';
import { OrderEntity } from '../entities/order.entity';

/**
 * A contract for [OrderRepository]{@link OrderRepository} class.
 */
export type OrderRepositoryInterface =
	BaseRepositoryInterface<OrderEntity>;
