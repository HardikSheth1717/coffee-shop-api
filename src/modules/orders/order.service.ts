import { Injectable, Inject } from '@nestjs/common';

import { FindOneOptions, FindManyOptions, DeleteResult } from 'typeorm';

import { DIToken } from '@core/enums/ditoken.enum';

import { OrderRepositoryInterface } from './interfaces/order.repository.interface';
import { OrderServiceInterface } from './interfaces/order.service.interface';

import { CreateOrderDto } from './dto/createOrder.dto';
import { UpdateOrderDto } from './dto/updateOrder.dto';
import { OrderEntity } from './entities/order.entity';
import { CustomerPointServiceInterface } from '@modules/customer-points/interfaces/customer-point.service.interface';
import { CustomerPointEntity } from '@modules/customer-points/entities/customer-point.entity';
import { UpdateCustomerPointDto } from '@modules/customer-points/dto/update-customer-point.dto';
import { CreateCustomerPointDto } from '@modules/customer-points/dto/create-customer-point.dto';

/**
 * A service / provider for order.
 */
@Injectable()
export class OrderService implements OrderServiceInterface {
	constructor(
		@Inject(DIToken.ORDER_REPOSITORY_INTERFACE)
		private readonly orderRepository: OrderRepositoryInterface,
		@Inject(DIToken.CUSTOMER_POINT_SERVICE_INTERFACE)
		private readonly customerPointService: CustomerPointServiceInterface
	) {}

	/**
	 * Returns a list of all the records of order.
	 */
	getAll(): Promise<OrderEntity[]> {
		try {
			return this.orderRepository.getAll();
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Returns a single record of order based on the given order id.
	 * @param {number} id - a unique id / primary key.
	 */
	getOneById(id: number): Promise<OrderEntity> {
		try {
			return this.orderRepository.getOneById({
				where: {
					orderId: id
				}
			});
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Returns a single record of order based on the given conditions.
	 * @param {FindOneOptions} condition - Condition to apply in query.
	 */
	getOneByCondition(condition: FindOneOptions<any>): Promise<OrderEntity> {
		try {
			return this.orderRepository.getOneByCondition(condition);
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Returns a list of records of order based on the given conditions.
	 * @param {FindManyOptions} condition - Condition to apply in query.
	 */
	getManyByCondition(
		condition: FindManyOptions<any>
	): Promise<OrderEntity[]> {
		try {
			return this.orderRepository.getManyByCondition(condition);
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Create record(s).
	 * @param {CreateOrderDto} data - Data which need to be inserted in database table.
	 */
	async create(data: CreateOrderDto): Promise<OrderEntity> {
		try {
			data.totalPrice = data.quantity * data.cost;
			let newPoints = data.paymentMode == "Cash" ? Math.floor(data.totalPrice * 0.20) : (data.totalPrice * -1);
			data.pointsEarned = newPoints;
			
			let order: OrderEntity = await this.orderRepository.create(data);
			
			if (order.orderId > 0) {
				this.updateCustomerPoints(data.customerId, newPoints, 0);
			}
			
			return order;
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Update record(s).
	 * @param {number} id - Primary key of the table.
	 * @param {UpdateOrderDto} data - Data which need to be updated in database table.
	 */
	async update(id: number, data: UpdateOrderDto): Promise<OrderEntity> {
		try {
			let oldData: OrderEntity = await this.getOneById(id);

			data.totalPrice = data.quantity * data.cost;
			let newPoints = data.paymentMode == "Cash" ? Math.floor(data.totalPrice * 0.20) : (data.totalPrice * -1);
			data.pointsEarned = newPoints;

			let order: OrderEntity = await this.orderRepository.update(id, data);
			
			this.updateCustomerPoints(data.customerId, newPoints, oldData.pointsEarned);

			return order;
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Create / update order.
	 * @param {CreateOrderDto | UpdateOrderDto} data - Data which need to be stored in database table.
	 */
	saveChanges(
		data: CreateOrderDto | UpdateOrderDto
	): Promise<OrderEntity> {
		try {
			return this.orderRepository.saveChanges(data);
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Delete order based on the given order id.
	 * @param {number} id - a unique id / primary key.
	 */
	async delete(id: number): Promise<DeleteResult> {
		try {
			let data: OrderEntity = await this.getOneById(id);
			this.updateCustomerPoints(data.customerId, 0, data.pointsEarned);

			return this.orderRepository.delete(id);
		} catch (error) {
			throw error;
		}
	}

	async updateCustomerPoints(customerId: number, newPoints: number, oldPoints: number) {
		let customerPoint: CustomerPointEntity = await this.customerPointService.getOneByCondition({
			where: {
				customerId: customerId
			}
		})

		if (customerPoint) {
			let currentPoints = Number(customerPoint.availablePoints);
			let newData = new UpdateCustomerPointDto();
			newData.availablePoints = currentPoints + newPoints - oldPoints;
			newData.customerPointId = customerPoint.customerPointId;
			newData.customerId = customerPoint.customerId;
			
			await this.customerPointService.update(customerPoint.customerPointId, newData);
		} else {
			let newData = new CreateCustomerPointDto();
			newData.availablePoints = newPoints;
			newData.customerId = customerId;
			await this.customerPointService.create(newData);
		}
	}
}
