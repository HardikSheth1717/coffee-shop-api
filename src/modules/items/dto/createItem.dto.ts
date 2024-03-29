import { Transform, TransformFnParams } from 'class-transformer';
import {
	IsDefined,
	IsInt,
	Length,
	IsPositive,
	IsDateString,
	IsNotEmpty,
	IsBoolean,
	IsOptional
} from 'class-validator';

/**
 * A DTO class for Item.
 */
export class CreateItemDto {
	/**
	 * Unique code of the item item.
	 */
	@IsDefined()
	@IsNotEmpty()
	@Transform(({ value }: TransformFnParams) => value.trim())
	@Length(2, 50)
	code: string;

	/**
	 * Name of the item.
	 */
	@IsDefined()
	@IsNotEmpty()
	@Transform(({ value }: TransformFnParams) => value.trim())
	@Length(2, 100)
	itemName: string;
	
	/**
	 * Mobile number of the customer.
	 */
	@IsDefined()
	@IsInt()
	@IsPositive()
	price: number;

	/**
	 * Remarks / description of the item.
	 */
	@IsOptional()
	remarks?: string = null;

	/**
	 * User id of a user who created the record.
	 */
	@IsOptional()
	@IsInt()
	@IsPositive()
	createdBy: number;

	/**
	 * Date and time when the record is created.
	 */
	@IsOptional()
	@IsDateString()
	createdDate: string = new Date().toISOString();

	/**
	 * Is generated by the system.
	 */
	@IsDefined()
	@IsBoolean()
	isActive: boolean;
}
