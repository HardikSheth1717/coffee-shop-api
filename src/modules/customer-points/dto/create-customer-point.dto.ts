import {
	IsDefined,
	IsInt,
	IsPositive
} from 'class-validator';

/**
 * A DTO class for customer_points.
 */
export class CreateCustomerPointDto {
	/**
	 * Name of the customer.
	 */
	@IsDefined()
	@IsInt()
	@IsPositive()
	customerId: number;
	
	/**
	 * Available points
	 */
	@IsDefined()
	@IsInt()
	@IsPositive()
	availablePoints: number;
}
