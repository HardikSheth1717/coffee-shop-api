import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ItemPriceService } from './item-price.service';
import { ItemPriceController } from './item-price.controller';

import { DIToken } from '@core/enums/ditoken.enum';
import { ItemPriceRepository } from './repositories/item-price.repository';

import { ItemPriceEntity } from './entities/item-price.entity';

@Module({
	imports: [TypeOrmModule.forFeature([ItemPriceEntity])],
	providers: [
		{
			provide: DIToken.ITEM_PRICE_REPOSITORY_INTERFACE,
			useClass: ItemPriceRepository
		},
		{
			provide: DIToken.ITEM_PRICE_SERVICE_INTERFACE,
			useClass: ItemPriceService
		}
	],
	controllers: [ItemPriceController],
	exports: [
		TypeOrmModule,
		{
			provide: DIToken.ITEM_PRICE_REPOSITORY_INTERFACE,
			useClass: ItemPriceRepository
		},
		{
			provide: DIToken.ITEM_PRICE_SERVICE_INTERFACE,
			useClass: ItemPriceService
		}
	]
})
export class ItemPriceModule {}
