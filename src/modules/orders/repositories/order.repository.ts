import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseAbstractRepository } from '@base/repositories/base.repository';
import { OrderRepositoryInterface } from '../interfaces/order.repository.interface';
import { OrderEntity } from '../entities/order.entity';

/**
 * A repository for orders table.
 */
@Injectable()
export class OrderRepository
	extends BaseAbstractRepository<OrderEntity>
	implements OrderRepositoryInterface
{
	constructor(
		@InjectRepository(OrderEntity)
		private readonly orderRepository: Repository<OrderEntity>
	) {
		super(orderRepository);
	}
}
