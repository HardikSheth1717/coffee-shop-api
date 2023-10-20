import { Entity, Column } from 'typeorm';

/**
 * An entity class for role_feature table in the database.
 */
@Entity('role_feature')
export class RoleFeatureEntity {
	/**
	 * PK of the table.
	 */
	@Column({
		name: 'role_feature_id',
		type: 'int',
		comment: 'PK of the table.',
		generated: 'increment',
		primary: true,
		nullable: false,
		unique: true
	})
	roleFeatureId: number;

	/**
	 * FK to role table.
	 */
	@Column({
		name: 'role_id',
		type: 'smallint',
		comment: 'FK to role table.',
		nullable: false
	})
	roleId: number;

	/**
	 * FK to feature table.
	 */
	@Column({
		name: 'feature_id',
		type: 'int',
		comment: 'FK to feature table.',
		nullable: false
	})
	featureId: number;

	/**
	 * User have permission to create new record or not.
	 */
	@Column({
		name: 'can_create',
		type: 'boolean',
		comment: 'User have permission to create new record or not.',
		nullable: false
	})
	canCreate: boolean;

	/**
	 * User have permission to modify an existing record or not.
	 */
	@Column({
		name: 'can_modify',
		type: 'boolean',
		comment: 'User have permission to modify an existing record or not.',
		nullable: false
	})
	canModify: boolean;

	/**
	 * User have permission to view records or not.
	 */
	@Column({
		name: 'can_view',
		type: 'boolean',
		comment: 'User have permission to view records or not.',
		nullable: false
	})
	canView: boolean;

	/**
	 * User have permission to delete an existing record or not.
	 */
	@Column({
		name: 'can_delete',
		type: 'boolean',
		comment: 'User have permission to delete an existing record or not.',
		nullable: false
	})
	canDelete: boolean;

	/**
	 * User have permission to manage records or not.
	 */
	@Column({
		name: 'can_manage',
		type: 'boolean',
		comment: 'User have permission to manage records or not.',
		nullable: false
	})
	canManage: boolean;
}
