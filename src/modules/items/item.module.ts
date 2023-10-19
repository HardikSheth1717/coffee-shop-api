import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ItemService } from './item.service';
import { ItemController } from './item.controller';

import { DIToken } from '@core/enums/ditoken.enum';
import { ItemRepository } from './repositories/item.repository';

import { ItemEntity } from './entities/item.entity';

@Module({
	imports: [TypeOrmModule.forFeature([ItemEntity])],
	providers: [
		{
			provide: DIToken.ITEM_REPOSITORY_INTERFACE,
			useClass: ItemRepository
		},
		{
			provide: DIToken.ITEM_SERVICE_INTERFACE,
			useClass: ItemService
		}
	],
	controllers: [ItemController],
	exports: [
		TypeOrmModule,
		{
			provide: DIToken.ITEM_REPOSITORY_INTERFACE,
			useClass: ItemRepository
		},
		{
			provide: DIToken.ITEM_SERVICE_INTERFACE,
			useClass: ItemService
		}
	]
})
export class ItemModule {}
