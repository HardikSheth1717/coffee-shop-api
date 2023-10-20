import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseAbstractRepository } from '@base/repositories/base.repository';
import { CustomerRepositoryInterface } from '../interfaces/customer.repository.interface';
import { CustomerEntity } from '../entities/customer.entity';

/**
 * A repository for customers table.
 */
@Injectable()
export class CustomerRepository
	extends BaseAbstractRepository<CustomerEntity>
	implements CustomerRepositoryInterface
{
	constructor(
		@InjectRepository(CustomerEntity)
		private readonly customerRepository: Repository<CustomerEntity>
	) {
		super(customerRepository);
	}
}
