import { Transform, TransformFnParams } from 'class-transformer';
import {
	IsDateString,
	IsDefined,
	IsInt,
	IsNotEmpty,
	IsOptional,
	IsPositive,
	Length
} from 'class-validator';

/**
 * A DTO class for orders.
 */
export class CreateOrderDto {
	/**
	 * Date and time when the order is created.
	 */
	@IsOptional()
	@IsDateString()
	orderDate: string = new Date().toISOString();

	/**
	 * FK to customers table.
	 */
	@IsDefined()
	@IsInt()
	@IsPositive()
	customerId: number;

	/**
	 * FK to items table.
	 */
	@IsDefined()
	@IsInt()
	@IsPositive()
	itemId: string;

	/**
	 * Quantity.
	 */
	@IsDefined()
	@IsInt()
	@IsPositive()
	quantity: number;
	
	/**
	 * Current price of item as per the menu.
	 */
	@IsDefined()
	@IsInt()
	@IsPositive()
	cost: number;
	
	/**
	 * Total price after calculating cost * quantity.
	 */
	@IsOptional()
	@IsInt()
	@IsPositive()
	totalPrice: number;

	/**
	 * Name of the payment mode.
	 */
	@IsDefined()
	@IsNotEmpty()
	@Transform(({ value }: TransformFnParams) => value.trim())
	@Length(2, 30)
	paymentMode: string;
	
	/**
	 * Points earned or spent on the order.
	 */
	@IsOptional()
	@IsInt()
	pointsEarned: number = 0;
}
