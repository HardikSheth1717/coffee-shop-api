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

import { ItemServiceInterface } from './interfaces/item.service.interface';

import { CreateItemDto } from './dto/createItem.dto';
import { UpdateItemDto } from './dto/updateItem.dto';
import { ItemEntity } from './entities/item.entity';
import { BaseController } from '@base/controller/base.controller';
import { Permissions } from '@core/decorators/permission.decorator';
import { PermissionEnum } from '@core/constants/enums/permission.enum';
import { User } from '@core/decorators/user.decorator';
import { UserAccountEntity } from '@modules/user/user-account/entities/user-account.entity';

/**
 * An API for item master.
 */
@Controller('item')
export class ItemController extends BaseController {
	constructor(
		@Inject(DIToken.ITEM_SERVICE_INTERFACE)
		private itemService: ItemServiceInterface
	) {
		super();
	}

	/**
	 * Returns a list of all the records of item.
	 */
	@Get()
	@Permissions(`ITEMS:${PermissionEnum.VIEW}`)
	public async get(): Promise<ItemEntity[]> {
		return await this.itemService.getAll();
	}

	/**
	 * Returns a single record of item based on the given item id.
	 * @param {number} id - a unique id / primary key.
	 */
	@Get(':id')
	@Permissions(`ITEMS:${PermissionEnum.VIEW}`)
	public async getOneById(
		@Param('id', ParseIntPipe) id: number
	): Promise<ItemEntity> {
		return await this.itemService.getOneById(id);
	}

	/**
	 * Create new item.
	 * @param {CreateItemDto} data - Data which need to be stored in database table.
	 */
	@Post()
	@Permissions(`ITEMS:${PermissionEnum.CREATE}`)
	public async create(
		@Body() data: CreateItemDto,
		@User() user: UserAccountEntity
	): Promise<number> {
		data.createdBy = user.userId;
		//Console.log(user);
		return (await this.itemService.create(data)).itemId;
	}

	/**
	 * Update an existing item.
	 * @param {UpdateItemDto} data - Data which need to be stored in database table.
	 */
	@Put()
	@Permissions(`ITEMS:${PermissionEnum.MODIFY}`)
	public async update(
		@Body() data: UpdateItemDto,
		@User() user: UserAccountEntity
	): Promise<boolean> {
		data.modifiedBy = user.userId;
		return (
			(await this.itemService.update(data.itemId, data))
				.itemId > 0
		);
	}

	/**
	 * Delete item based on the given item id.
	 * @param {number} id - a unique id / primary key.
	 */
	@Delete(':id')
	@Permissions(`ITEMS:${PermissionEnum.DELETE}`)
	public async delete(
		@Param('id', ParseIntPipe) id: number
	): Promise<boolean> {
		return (await this.itemService.delete(id)).affected > 0;
	}
}
