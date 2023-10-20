import {
	IsDefined,
	IsInt,
	IsPositive
} from 'class-validator';

/**
 * A DTO class for item_price.
 */
export class CreateItemPriceDto {
	/**
	 * Name of the customer.
	 */
	@IsDefined()
	@IsInt()
	@IsPositive()
	itemId: string;
	
	/**
	 * Mobile number of the customer.
	 */
	@IsDefined()
	@IsInt()
	@IsPositive()
	price: number;
}
