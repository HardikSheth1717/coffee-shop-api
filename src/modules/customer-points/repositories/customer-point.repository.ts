import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseAbstractRepository } from '@base/repositories/base.repository';
import { CustomerPointRepositoryInterface } from '../interfaces/customer-point.repository.interface';
import { CustomerPointEntity } from '../entities/customer-point.entity';

/**
 * A repository for customer_points table.
 */
@Injectable()
export class CustomerPointRepository
	extends BaseAbstractRepository<CustomerPointEntity>
	implements CustomerPointRepositoryInterface
{
	constructor(
		@InjectRepository(CustomerPointEntity)
		private readonly customerPointRepository: Repository<CustomerPointEntity>
	) {
		super(customerPointRepository);
	}
}
