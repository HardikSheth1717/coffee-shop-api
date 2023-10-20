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

import { CustomerServiceInterface } from './interfaces/customer.service.interface';

import { CreateCustomerDto } from './dto/createCustomer.dto';
import { UpdateCustomerDto } from './dto/updateCustomer.dto';
import { CustomerEntity } from './entities/customer.entity';
import { BaseController } from '@base/controller/base.controller';
import { Permissions } from '@core/decorators/permission.decorator';
import { PermissionEnum } from '@core/constants/enums/permission.enum';
import { User } from '@core/decorators/user.decorator';
import { UserAccountEntity } from '@modules/user/user-account/entities/user-account.entity';

/**
 * An API for customer master.
 */
@Controller('customer')
export class CustomerController extends BaseController {
	constructor(
		@Inject(DIToken.CUSTOMER_SERVICE_INTERFACE)
		private customerService: CustomerServiceInterface
	) {
		super();
	}

	/**
	 * Returns a list of all the records of customer.
	 */
	@Get()
	@Permissions(`CUSTMR:${PermissionEnum.VIEW}`)
	public async get(): Promise<CustomerEntity[]> {
		return await this.customerService.getAll();
	}

	/**
	 * Returns a single record of customer based on the given customer id.
	 * @param {number} id - a unique id / primary key.
	 */
	@Get(':id')
	@Permissions(`CUSTMR:${PermissionEnum.VIEW}`)
	public async getOneById(
		@Param('id', ParseIntPipe) id: number
	): Promise<CustomerEntity> {
		return await this.customerService.getOneById(id);
	}

	/**
	 * Create new customer.
	 * @param {CreateCustomerDto} data - Data which need to be stored in database table.
	 */
	@Post()
	@Permissions(`CUSTMR:${PermissionEnum.CREATE}`)
	public async create(
		@Body() data: CreateCustomerDto,
		@User() user: UserAccountEntity
	): Promise<number> {
		return (await this.customerService.create(data)).customerId;
	}

	/**
	 * Update an existing customer.
	 * @param {UpdateCustomerDto} data - Data which need to be stored in database table.
	 */
	@Put()
	@Permissions(`CUSTMR:${PermissionEnum.MODIFY}`)
	public async update(
		@Body() data: UpdateCustomerDto,
		@User() user: UserAccountEntity
	): Promise<boolean> {
		return (
			(await this.customerService.update(data.customerId, data))
				.customerId > 0
		);
	}

	/**
	 * Delete customer based on the given customer id.
	 * @param {number} id - a unique id / primary key.
	 */
	@Delete(':id')
	@Permissions(`CUSTMR:${PermissionEnum.DELETE}`)
	public async delete(
		@Param('id', ParseIntPipe) id: number
	): Promise<boolean> {
		return (await this.customerService.delete(id)).affected > 0;
	}
}
