/**
 * A DTO class for permissions.
 */
export class PermissionDto {
	/**
	 * Feature id.
	 */
	featureId: number;

	/**
	 * Feature name.
	 */
	featureName: string;

	/**
	 * Feature code.
	 */
	code: string;

	/**
	 * User have permission to create new record or not.
	 */
	cancreate: boolean;

	/**
	 * User have permission to modify an existing record or not.
	 */
	canmodify: boolean;

	/**
	 * User have permission to view records or not.
	 */
	canview: boolean;

	/**
	 * User have permission to delete an existing record or not.
	 */
	candelete: boolean;

	/**
	 * User have permission to manage records or not.
	 */
	canmanage: boolean;
}
