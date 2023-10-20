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

import { ItemPriceServiceInterface } from './interfaces/item-price.service.interface';

import { CreateItemPriceDto } from './dto/create-item-price.dto';
import { UpdateItemPriceDto } from './dto/update-item-price.dto';
import { ItemPriceEntity } from './entities/item-price.entity';
import { BaseController } from '@base/controller/base.controller';
import { Permissions } from '@core/decorators/permission.decorator';
import { PermissionEnum } from '@core/constants/enums/permission.enum';
import { User } from '@core/decorators/user.decorator';
import { UserAccountEntity } from '@modules/user/user-account/entities/user-account.entity';

/**
 * An API for item price.
 */
@Controller('item-price')
export class ItemPriceController extends BaseController {
	constructor(
		@Inject(DIToken.ITEM_PRICE_SERVICE_INTERFACE)
		private itemPriceService: ItemPriceServiceInterface
	) {
		super();
	}

	/**
	 * Returns a list of all the records of item price.
	 */
	@Get()
	@Permissions(`ITMPR:${PermissionEnum.VIEW}`)
	public async get(): Promise<ItemPriceEntity[]> {
		return await this.itemPriceService.getAll();
	}

	/**
	 * Returns a single record of item price based on the given item price id.
	 * @param {number} id - a unique id / primary key.
	 */
	@Get(':id')
	@Permissions(`ITMPR:${PermissionEnum.VIEW}`)
	public async getOneById(
		@Param('id', ParseIntPipe) id: number
	): Promise<ItemPriceEntity> {
		return await this.itemPriceService.getOneById(id);
	}

	/**
	 * Create new item price.
	 * @param {CreateItemPriceDto} data - Data which need to be stored in database table.
	 */
	@Post()
	@Permissions(`ITMPR:${PermissionEnum.CREATE}`)
	public async create(
		@Body() data: CreateItemPriceDto,
		@User() user: UserAccountEntity
	): Promise<number> {
		return (await this.itemPriceService.create(data)).itemPriceId;
	}

	/**
	 * Update an existing item price.
	 * @param {UpdateItemPriceDto} data - Data which need to be stored in database table.
	 */
	@Put()
	@Permissions(`ITMPR:${PermissionEnum.MODIFY}`)
	public async update(
		@Body() data: UpdateItemPriceDto,
		@User() user: UserAccountEntity
	): Promise<boolean> {
		return (
			(await this.itemPriceService.update(data.itemPriceId, data))
				.itemPriceId > 0
		);
	}

	/**
	 * Delete itemPrice based on the given itemPrice id.
	 * @param {number} id - a unique id / primary key.
	 */
	@Delete(':id')
	@Permissions(`ITMPR:${PermissionEnum.DELETE}`)
	public async delete(
		@Param('id', ParseIntPipe) id: number
	): Promise<boolean> {
		return (await this.itemPriceService.delete(id)).affected > 0;
	}
}
