import { FindOneOptions, FindManyOptions, DeleteResult } from 'typeorm';

import { CreateOrderDto } from '../dto/createOrder.dto';
import { UpdateOrderDto } from '../dto/updateOrder.dto';
import { OrderEntity } from '../entities/order.entity';

/**
 * A service contract which must be implemented by [OrderService]{@link OrderService}.
 */
export interface OrderServiceInterface {
	/**
	 * Returns a list of all the records of order.
	 */
	getAll(): Promise<OrderEntity[]>;

	/**
	 * Returns a single record of order based on the given order id.
	 * @param {number} id - a unique id / primary key.
	 */
	getOneById(id: number): Promise<OrderEntity>;

	/**
	 * Returns a single record of order based on the given conditions.
	 * @param {FindOneOptions} condition - Condition to apply in query.
	 */
	getOneByCondition(condition: FindOneOptions<any>): Promise<OrderEntity>;

	/**
	 * Returns a list of records of order based on the given conditions.
	 * @param {FindManyOptions} condition - Condition to apply in query.
	 */
	getManyByCondition(
		condition: FindManyOptions<any>
	): Promise<OrderEntity[]>;

	/**
	 * Create record(s).
	 * @param {CreateOrderDto} data - Data which need to be inserted in database table.
	 */
	create(data: CreateOrderDto): Promise<OrderEntity>;

	/**
	 * Update record(s).
	 * @param {number} id - Primary key of the table.
	 * @param {UpdateOrderDto} data - Data which need to be updated in database table.
	 */
	update(id: number, data: UpdateOrderDto): Promise<OrderEntity>;

	/**
	 * Create / update order.
	 * @param {CreateOrderDto | UpdateOrderDto} data - Data which need to be stored in database table.
	 */
	saveChanges(
		data: CreateOrderDto | UpdateOrderDto
	): Promise<OrderEntity>;

	/**
	 * Delete order based on the given order id.
	 * @param {number} id - a unique id / primary key.
	 */
	delete(id: number): Promise<DeleteResult>;
}
