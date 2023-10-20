import { Injectable, Inject } from '@nestjs/common';

import { FindOneOptions, FindManyOptions, DeleteResult } from 'typeorm';

import { DIToken } from '@core/enums/ditoken.enum';

import { CustomerPointRepositoryInterface } from './interfaces/customer-point.repository.interface';
import { CustomerPointServiceInterface } from './interfaces/customer-point.service.interface';

import { CreateCustomerPointDto } from './dto/create-customer-point.dto';
import { UpdateCustomerPointDto } from './dto/update-customer-point.dto';
import { CustomerPointEntity } from './entities/customer-point.entity';

/**
 * A service / provider for customer point.
 */
@Injectable()
export class CustomerPointService implements CustomerPointServiceInterface {
	constructor(
		@Inject(DIToken.CUSTOMER_POINT_REPOSITORY_INTERFACE)
		private readonly customerPointRepository: CustomerPointRepositoryInterface
	) {}

	/**
	 * Returns a list of all the records of customer point.
	 */
	getAll(): Promise<CustomerPointEntity[]> {
		try {
			return this.customerPointRepository.getAll();
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Returns a single record of customer point based on the given customer point id.
	 * @param {number} id - a unique id / primary key.
	 */
	getOneById(id: number): Promise<CustomerPointEntity> {
		try {
			return this.customerPointRepository.getOneById({
				where: {
					customerPointId: id
				}
			});
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Returns a single record of customer point based on the given conditions.
	 * @param {FindOneOptions} condition - Condition to apply in query.
	 */
	getOneByCondition(condition: FindOneOptions<any>): Promise<CustomerPointEntity> {
		try {
			return this.customerPointRepository.getOneByCondition(condition);
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Returns a list of records of customer point based on the given conditions.
	 * @param {FindManyOptions} condition - Condition to apply in query.
	 */
	getManyByCondition(
		condition: FindManyOptions<any>
	): Promise<CustomerPointEntity[]> {
		try {
			return this.customerPointRepository.getManyByCondition(condition);
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Create record(s).
	 * @param {CreateCustomerPointDto} data - Data which need to be inserted in database table.
	 */
	create(data: CreateCustomerPointDto): Promise<CustomerPointEntity> {
		try {
			return this.customerPointRepository.create(data);
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Update record(s).
	 * @param {number} id - Primary key of the table.
	 * @param {UpdateCustomerPointDto} data - Data which need to be updated in database table.
	 */
	update(id: number, data: UpdateCustomerPointDto): Promise<CustomerPointEntity> {
		try {
			return this.customerPointRepository.update(id, data);
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Create / update customer point.
	 * @param {CreateCustomerPointDto | UpdateCustomerPointDto} data - Data which need to be stored in database table.
	 */
	saveChanges(
		data: CreateCustomerPointDto | UpdateCustomerPointDto
	): Promise<CustomerPointEntity> {
		try {
			return this.customerPointRepository.saveChanges(data);
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Delete customer point based on the given customer point id.
	 * @param {number} id - a unique id / primary key.
	 */
	delete(id: number): Promise<DeleteResult> {
		try {
			return this.customerPointRepository.delete(id);
		} catch (error) {
			throw error;
		}
	}
}
