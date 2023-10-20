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

import { CustomerPointServiceInterface } from './interfaces/customer-point.service.interface';

import { CreateCustomerPointDto } from './dto/create-customer-point.dto';
import { UpdateCustomerPointDto } from './dto/update-customer-point.dto';
import { CustomerPointEntity } from './entities/customer-point.entity';
import { BaseController } from '@base/controller/base.controller';
import { Permissions } from '@core/decorators/permission.decorator';
import { PermissionEnum } from '@core/constants/enums/permission.enum';
import { User } from '@core/decorators/user.decorator';
import { UserAccountEntity } from '@modules/user/user-account/entities/user-account.entity';

/**
 * An API for customer point.
 */
@Controller('customer-point')
export class CustomerPointController extends BaseController {
	constructor(
		@Inject(DIToken.CUSTOMER_POINT_SERVICE_INTERFACE)
		private customerPointService: CustomerPointServiceInterface
	) {
		super();
	}

	/**
	 * Returns a list of all the records of customer point.
	 */
	@Get()
	@Permissions(`CUSTMRPT:${PermissionEnum.VIEW}`)
	public async get(): Promise<CustomerPointEntity[]> {
		return await this.customerPointService.getAll();
	}

	/**
	 * Returns a single record of customer point based on the given customer point id.
	 * @param {number} id - a unique id / primary key.
	 */
	@Get(':id')
	@Permissions(`CUSTMRPT:${PermissionEnum.VIEW}`)
	public async getOneById(
		@Param('id', ParseIntPipe) id: number
	): Promise<CustomerPointEntity> {
		return await this.customerPointService.getOneById(id);
	}

	/**
	 * Create new customer point.
	 * @param {CreateCustomerPointDto} data - Data which need to be stored in database table.
	 */
	@Post()
	@Permissions(`CUSTMRPT:${PermissionEnum.CREATE}`)
	public async create(
		@Body() data: CreateCustomerPointDto,
		@User() user: UserAccountEntity
	): Promise<number> {
		return (await this.customerPointService.create(data)).customerPointId;
	}

	/**
	 * Update an existing customer point.
	 * @param {UpdateCustomerPointDto} data - Data which need to be stored in database table.
	 */
	@Put()
	@Permissions(`CUSTMRPT:${PermissionEnum.MODIFY}`)
	public async update(
		@Body() data: UpdateCustomerPointDto,
		@User() user: UserAccountEntity
	): Promise<boolean> {
		return (
			(await this.customerPointService.update(data.customerPointId, data))
				.customerPointId > 0
		);
	}

	/**
	 * Delete customerPoint based on the given customerPoint id.
	 * @param {number} id - a unique id / primary key.
	 */
	@Delete(':id')
	@Permissions(`CUSTMRPT:${PermissionEnum.DELETE}`)
	public async delete(
		@Param('id', ParseIntPipe) id: number
	): Promise<boolean> {
		return (await this.customerPointService.delete(id)).affected > 0;
	}
}
