import {
	Controller,
	Post,
	Get,
	Put,
	Delete,
	Inject,
	Param,
	ParseIntPipe,
	Body
} from '@nestjs/common';

import { DIToken } from '@core/enums/ditoken.enum';

import { OrderServiceInterface } from './interfaces/order.service.interface';

import { CreateOrderDto } from './dto/createOrder.dto';
import { UpdateOrderDto } from './dto/updateOrder.dto';
import { OrderEntity } from './entities/order.entity';
import { BaseController } from '@base/controller/base.controller';
import { Permissions } from '@core/decorators/permission.decorator';
import { PermissionEnum } from '@core/constants/enums/permission.enum';
import { User } from '@core/decorators/user.decorator';
import { UserAccountEntity } from '@modules/user/user-account/entities/user-account.entity';

/**
 * An API for order.
 */
@Controller('order')
export class OrderController extends BaseController {
	constructor(
		@Inject(DIToken.ORDER_SERVICE_INTERFACE)
		private orderService: OrderServiceInterface
	) {
		super();
	}

	/**
	 * Returns a list of all the records of order.
	 */
	@Get()
	@Permissions(`ORDER:${PermissionEnum.VIEW}`)
	public async get(): Promise<OrderEntity[]> {
		return await this.orderService.getAll();
	}

	/**
	 * Returns a single record of order based on the given order id.
	 * @param {number} id - a unique id / primary key.
	 */
	@Get(':id')
	@Permissions(`ORDER:${PermissionEnum.VIEW}`)
	public async getOneById(
		@Param('id', ParseIntPipe) id: number
	): Promise<OrderEntity> {
		return await this.orderService.getOneById(id);
	}

	/**
	 * Create new order.
	 * @param {CreateOrderDto} data - Data which need to be stored in database table.
	 */
	@Post()
	@Permissions(`ORDER:${PermissionEnum.CREATE}`)
	public async create(
		@Body() data: CreateOrderDto,
		@User() user: UserAccountEntity
	): Promise<number> {
		return (await this.orderService.create(data)).orderId;
	}

	/**
	 * Update an existing order.
	 * @param {UpdateOrderDto} data - Data which need to be stored in database table.
	 */
	@Put()
	@Permissions(`ORDER:${PermissionEnum.MODIFY}`)
	public async update(
		@Body() data: UpdateOrderDto,
		@User() user: UserAccountEntity
	): Promise<boolean> {
		return (
			(await this.orderService.update(data.orderId, data))
				.orderId > 0
		);
	}

	/**
	 * Delete order based on the given order id.
	 * @param {number} id - a unique id / primary key.
	 */
	@Delete(':id')
	@Permissions(`ORDER:${PermissionEnum.DELETE}`)
	public async delete(
		@Param('id', ParseIntPipe) id: number
	): Promise<boolean> {
		return (await this.orderService.delete(id)).affected > 0;
	}
}
