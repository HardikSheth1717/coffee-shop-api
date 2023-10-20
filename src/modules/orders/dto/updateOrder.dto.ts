import { PartialType } from '@nestjs/mapped-types';
import {
	IsDefined,
	IsInt,
	IsPositive
} from 'class-validator';
import { CreateOrderDto } from './createOrder.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
	/**
	 * Primary key of the table.
	 */
	@IsDefined()
	@IsInt()
	@IsPositive()
	orderId: number;
}
