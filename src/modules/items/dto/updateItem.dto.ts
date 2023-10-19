import { OmitType, PartialType } from '@nestjs/mapped-types';
import {
	IsDateString,
	IsDefined,
	IsInt,
	IsPositive,
	IsOptional
} from 'class-validator';
import { CreateItemDto } from './createItem.dto';

export class UpdateItemDto extends PartialType(
	OmitType(CreateItemDto, ['createdBy', 'createdDate'] as const)
) {
	/**
	 * Primary key of the table.
	 */
	@IsDefined()
	@IsInt()
	@IsPositive()
	itemId: number;

	/**
	 * User id of a user who modified the record.
	 */
	@IsOptional()
	@IsInt()
	@IsPositive()
	modifiedBy: number;

	/**
	 * Date and time when the record is modified.
	 */
	@IsOptional()
	@IsDateString()
	modifiedDate: string = new Date().toISOString();
}
