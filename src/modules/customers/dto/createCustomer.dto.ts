import { Transform, TransformFnParams } from 'class-transformer';
import {
	IsDefined,
	Length,
	IsNotEmpty
} from 'class-validator';

/**
 * A DTO class for Customer.
 */
export class CreateCustomerDto {
	/**
	 * Name of the customer.
	 */
	@IsDefined()
	@IsNotEmpty()
	@Transform(({ value }: TransformFnParams) => value.trim())
	@Length(2, 100)
	customerName: string;
	
	/**
	 * Mobile number of the customer.
	 */
	@IsDefined()
	@IsNotEmpty()
	@Transform(({ value }: TransformFnParams) => value.trim())
	@Length(10, 15)
	mobileNo: string;
}
