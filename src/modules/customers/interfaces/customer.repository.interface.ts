import { BaseRepositoryInterface } from '@base/interfaces/base.repository.interface';
import { CustomerEntity } from '../entities/customer.entity';

/**
 * A contract for [CustomerRepository]{@link CustomerRepository} class.
 */
export type CustomerRepositoryInterface =
	BaseRepositoryInterface<CustomerEntity>;
