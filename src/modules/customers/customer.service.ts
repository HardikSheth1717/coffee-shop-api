import { Injectable, Inject } from '@nestjs/common';

import { FindOneOptions, FindManyOptions, DeleteResult } from 'typeorm';

import { DIToken } from '@core/enums/ditoken.enum';

import { CustomerRepositoryInterface } from './interfaces/customer.repository.interface';
import { CustomerServiceInterface } from './interfaces/customer.service.interface';

import { CreateCustomerDto } from './dto/createCustomer.dto';
import { UpdateCustomerDto } from './dto/updateCustomer.dto';
import { CustomerEntity } from './entities/customer.entity';

/**
 * A service / provider for customer master.
 */
@Injectable()
export class CustomerService implements CustomerServiceInterface {
	constructor(
		@Inject(DIToken.CUSTOMER_REPOSITORY_INTERFACE)
		private readonly customerRepository: CustomerRepositoryInterface
	) {}

	/**
	 * Returns a list of all the records of customer.
	 */
	getAll(): Promise<CustomerEntity[]> {
		try {
			return this.customerRepository.getAll();
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Returns a single record of customer based on the given customer id.
	 * @param {number} id - a unique id / primary key.
	 */
	getOneById(id: number): Promise<CustomerEntity> {
		try {
			return this.customerRepository.getOneById({
				where: {
					customerId: id
				}
			});
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Returns a single record of customer based on the given conditions.
	 * @param {FindOneOptions} condition - Condition to apply in query.
	 */
	getOneByCondition(condition: FindOneOptions<any>): Promise<CustomerEntity> {
		try {
			return this.customerRepository.getOneByCondition(condition);
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Returns a list of records of customer based on the given conditions.
	 * @param {FindManyOptions} condition - Condition to apply in query.
	 */
	getManyByCondition(
		condition: FindManyOptions<any>
	): Promise<CustomerEntity[]> {
		try {
			return this.customerRepository.getManyByCondition(condition);
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Create record(s).
	 * @param {CreateCustomerDto} data - Data which need to be inserted in database table.
	 */
	create(data: CreateCustomerDto): Promise<CustomerEntity> {
		try {
			return this.customerRepository.create(data);
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Update record(s).
	 * @param {number} id - Primary key of the table.
	 * @param {UpdateCustomerDto} data - Data which need to be updated in database table.
	 */
	update(id: number, data: UpdateCustomerDto): Promise<CustomerEntity> {
		try {
			return this.customerRepository.update(id, data);
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Create / update customer.
	 * @param {CreateCustomerDto | UpdateCustomerDto} data - Data which need to be stored in database table.
	 */
	saveChanges(
		data: CreateCustomerDto | UpdateCustomerDto
	): Promise<CustomerEntity> {
		try {
			return this.customerRepository.saveChanges(data);
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Delete customer based on the given customer id.
	 * @param {number} id - a unique id / primary key.
	 */
	delete(id: number): Promise<DeleteResult> {
		try {
			return this.customerRepository.delete(id);
		} catch (error) {
			throw error;
		}
	}
}
