import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CustomerPointService } from './customer-point.service';
import { CustomerPointController } from './customer-point.controller';

import { DIToken } from '@core/enums/ditoken.enum';
import { CustomerPointRepository } from './repositories/customer-point.repository';

import { CustomerPointEntity } from './entities/customer-point.entity';

@Module({
	imports: [TypeOrmModule.forFeature([CustomerPointEntity])],
	providers: [
		{
			provide: DIToken.CUSTOMER_POINT_REPOSITORY_INTERFACE,
			useClass: CustomerPointRepository
		},
		{
			provide: DIToken.CUSTOMER_POINT_SERVICE_INTERFACE,
			useClass: CustomerPointService
		}
	],
	controllers: [CustomerPointController],
	exports: [
		TypeOrmModule,
		{
			provide: DIToken.CUSTOMER_POINT_REPOSITORY_INTERFACE,
			useClass: CustomerPointRepository
		},
		{
			provide: DIToken.CUSTOMER_POINT_SERVICE_INTERFACE,
			useClass: CustomerPointService
		}
	]
})
export class CustomerPointModule {}
