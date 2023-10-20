import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';

import { DIToken } from '@core/enums/ditoken.enum';
import { CustomerRepository } from './repositories/customer.repository';

import { CustomerEntity } from './entities/customer.entity';

@Module({
	imports: [TypeOrmModule.forFeature([CustomerEntity])],
	providers: [
		{
			provide: DIToken.CUSTOMER_REPOSITORY_INTERFACE,
			useClass: CustomerRepository
		},
		{
			provide: DIToken.CUSTOMER_SERVICE_INTERFACE,
			useClass: CustomerService
		}
	],
	controllers: [CustomerController],
	exports: [
		TypeOrmModule,
		{
			provide: DIToken.CUSTOMER_REPOSITORY_INTERFACE,
			useClass: CustomerRepository
		},
		{
			provide: DIToken.CUSTOMER_SERVICE_INTERFACE,
			useClass: CustomerService
		}
	]
})
export class CustomerModule {}
