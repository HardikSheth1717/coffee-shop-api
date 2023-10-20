import { PartialType } from '@nestjs/mapped-types';
import {
	IsDefined,
	IsInt,
	IsPositive
} from 'class-validator';
import { CreateCustomerDto } from './createCustomer.dto';

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {
	/**
	 * Primary key of the table.
	 */
	@IsDefined()
	@IsInt()
	@IsPositive()
	customerId: number;
}
