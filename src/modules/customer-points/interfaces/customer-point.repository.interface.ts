import { BaseRepositoryInterface } from '@base/interfaces/base.repository.interface';
import { CustomerPointEntity } from '../entities/customer-point.entity';

/**
 * A contract for [CustomerPointRepository]{@link CustomerPointRepository} class.
 */
export type CustomerPointRepositoryInterface =
	BaseRepositoryInterface<CustomerPointEntity>;
