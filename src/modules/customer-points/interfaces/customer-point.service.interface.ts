import { FindOneOptions, FindManyOptions, DeleteResult } from 'typeorm';

import { CreateCustomerPointDto } from '../dto/create-customer-point.dto';
import { UpdateCustomerPointDto } from '../dto/update-customer-point.dto';
import { CustomerPointEntity } from '../entities/customer-point.entity';

/**
 * A service contract which must be implemented by [CustomerPointService]{@link CustomerPointService}.
 */
export interface CustomerPointServiceInterface {
	/**
	 * Returns a list of all the records of customer point.
	 */
	getAll(): Promise<CustomerPointEntity[]>;

	/**
	 * Returns a single record of customer point based on the given customer point id.
	 * @param {number} id - a unique id / primary key.
	 */
	getOneById(id: number): Promise<CustomerPointEntity>;

	/**
	 * Returns a single record of customer point based on the given conditions.
	 * @param {FindOneOptions} condition - Condition to apply in query.
	 */
	getOneByCondition(condition: FindOneOptions<any>): Promise<CustomerPointEntity>;

	/**
	 * Returns a list of records of customer point based on the given conditions.
	 * @param {FindManyOptions} condition - Condition to apply in query.
	 */
	getManyByCondition(
		condition: FindManyOptions<any>
	): Promise<CustomerPointEntity[]>;

	/**
	 * Create record(s).
	 * @param {CreateCustomerPointDto} data - Data which need to be inserted in database table.
	 */
	create(data: CreateCustomerPointDto): Promise<CustomerPointEntity>;

	/**
	 * Update record(s).
	 * @param {number} id - Primary key of the table.
	 * @param {UpdateCustomerPointDto} data - Data which need to be updated in database table.
	 */
	update(id: number, data: UpdateCustomerPointDto): Promise<CustomerPointEntity>;

	/**
	 * Create / update customer point.
	 * @param {CreateCustomerPointDto | UpdateCustomerPointDto} data - Data which need to be stored in database table.
	 */
	saveChanges(
		data: CreateCustomerPointDto | UpdateCustomerPointDto
	): Promise<CustomerPointEntity>;

	/**
	 * Delete customer point based on the given customer point id.
	 * @param {number} id - a unique id / primary key.
	 */
	delete(id: number): Promise<DeleteResult>;
}
