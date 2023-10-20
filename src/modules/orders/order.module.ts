import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OrderService } from './order.service';
import { OrderController } from './order.controller';

import { DIToken } from '@core/enums/ditoken.enum';
import { OrderRepository } from './repositories/order.repository';

import { OrderEntity } from './entities/order.entity';
import { CustomerPointModule } from '@modules/customer-points/customer-point.module';

@Module({
	imports: [TypeOrmModule.forFeature([OrderEntity]), CustomerPointModule],
	providers: [
		{
			provide: DIToken.ORDER_REPOSITORY_INTERFACE,
			useClass: OrderRepository
		},
		{
			provide: DIToken.ORDER_SERVICE_INTERFACE,
			useClass: OrderService
		}
	],
	controllers: [OrderController],
	exports: [
		TypeOrmModule,
		{
			provide: DIToken.ORDER_REPOSITORY_INTERFACE,
			useClass: OrderRepository
		},
		{
			provide: DIToken.ORDER_SERVICE_INTERFACE,
			useClass: OrderService
		}
	]
})
export class OrderModule {}
