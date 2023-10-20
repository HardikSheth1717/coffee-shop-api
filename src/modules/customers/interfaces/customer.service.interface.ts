import { FindOneOptions, FindManyOptions, DeleteResult } from 'typeorm';

import { CreateCustomerDto } from '../dto/createCustomer.dto';
import { UpdateCustomerDto } from '../dto/updateCustomer.dto';
import { CustomerEntity } from '../entities/customer.entity';

/**
 * A service contract which must be implemented by [CustomerService]{@link CustomerService}.
 */
export interface CustomerServiceInterface {
	/**
	 * Returns a list of all the records of customer.
	 */
	getAll(): Promise<CustomerEntity[]>;

	/**
	 * Returns a single record of customer based on the given customer id.
	 * @param {number} id - a unique id / primary key.
	 */
	getOneById(id: number): Promise<CustomerEntity>;

	/**
	 * Returns a single record of customer based on the given conditions.
	 * @param {FindOneOptions} condition - Condition to apply in query.
	 */
	getOneByCondition(condition: FindOneOptions<any>): Promise<CustomerEntity>;

	/**
	 * Returns a list of records of customer based on the given conditions.
	 * @param {FindManyOptions} condition - Condition to apply in query.
	 */
	getManyByCondition(
		condition: FindManyOptions<any>
	): Promise<CustomerEntity[]>;

	/**
	 * Create record(s).
	 * @param {CreateCustomerDto} data - Data which need to be inserted in database table.
	 */
	create(data: CreateCustomerDto): Promise<CustomerEntity>;

	/**
	 * Update record(s).
	 * @param {number} id - Primary key of the table.
	 * @param {UpdateCustomerDto} data - Data which need to be updated in database table.
	 */
	update(id: number, data: UpdateCustomerDto): Promise<CustomerEntity>;

	/**
	 * Create / update customer.
	 * @param {CreateCustomerDto | UpdateCustomerDto} data - Data which need to be stored in database table.
	 */
	saveChanges(
		data: CreateCustomerDto | UpdateCustomerDto
	): Promise<CustomerEntity>;

	/**
	 * Delete customer based on the given customer id.
	 * @param {number} id - a unique id / primary key.
	 */
	delete(id: number): Promise<DeleteResult>;
}
