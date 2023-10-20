import { PartialType } from '@nestjs/mapped-types';
import {
	IsDefined,
	IsInt,
	IsPositive
} from 'class-validator';
import { CreateCustomerPointDto } from './create-customer-point.dto';

export class UpdateCustomerPointDto extends PartialType(CreateCustomerPointDto) {
	/**
	 * Primary key of the table.
	 */
	@IsDefined()
	@IsInt()
	@IsPositive()
	customerPointId: number;
}
