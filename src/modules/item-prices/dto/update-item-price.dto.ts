import { PartialType } from '@nestjs/mapped-types';
import {
	IsDefined,
	IsInt,
	IsPositive
} from 'class-validator';
import { CreateItemPriceDto } from './create-item-price.dto';

export class UpdateItemPriceDto extends PartialType(CreateItemPriceDto) {
	/**
	 * Primary key of the table.
	 */
	@IsDefined()
	@IsInt()
	@IsPositive()
	itemPriceId: number;
}
