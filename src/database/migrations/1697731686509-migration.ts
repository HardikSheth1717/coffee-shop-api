import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1697731686509 implements MigrationInterface {
    name = 'migration1697731686509'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role_feature" DROP COLUMN "canCreate"`);
        await queryRunner.query(`ALTER TABLE "role_feature" DROP COLUMN "canModify"`);
        await queryRunner.query(`ALTER TABLE "role_feature" DROP COLUMN "canView"`);
        await queryRunner.query(`ALTER TABLE "role_feature" DROP COLUMN "canDelete"`);
        await queryRunner.query(`ALTER TABLE "role_feature" DROP COLUMN "canManage"`);
        await queryRunner.query(`ALTER TABLE "role_feature" ADD "can_create" boolean NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "role_feature"."can_create" IS 'User have permission to create new record or not.'`);
        await queryRunner.query(`ALTER TABLE "role_feature" ADD "can_modify" boolean NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "role_feature"."can_modify" IS 'User have permission to modify an existing record or not.'`);
        await queryRunner.query(`ALTER TABLE "role_feature" ADD "can_view" boolean NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "role_feature"."can_view" IS 'User have permission to view records or not.'`);
        await queryRunner.query(`ALTER TABLE "role_feature" ADD "can_delete" boolean NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "role_feature"."can_delete" IS 'User have permission to delete an existing record or not.'`);
        await queryRunner.query(`ALTER TABLE "role_feature" ADD "can_manage" boolean NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "role_feature"."can_manage" IS 'User have permission to manage records or not.'`);
        await queryRunner.query(`ALTER TABLE "item_category" ADD CONSTRAINT "UQ_7173efc7a9b80590cd4f5a00264" UNIQUE ("item_category_id")`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_orders_items"`);
        await queryRunner.query(`ALTER TABLE "items" ADD CONSTRAINT "UQ_d0249fbc104e3bd71b5a0ecf3b1" UNIQUE ("item_id")`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "UQ_cad55b3cb25b38be94d2ce831db" UNIQUE ("order_id")`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_orders_customers"`);
        await queryRunner.query(`ALTER TABLE "customer_points" DROP CONSTRAINT "FK_customer_points_customers"`);
        await queryRunner.query(`ALTER TABLE "customers" ADD CONSTRAINT "UQ_6c444ce6637f2c1d71c3cf136c1" UNIQUE ("customer_id")`);
        await queryRunner.query(`ALTER TABLE "customer_points" ADD CONSTRAINT "UQ_1d2774ad9b851779b7b7bc217b2" UNIQUE ("customer_point_id")`);
        await queryRunner.query(`ALTER TABLE "feature_group" ADD CONSTRAINT "UQ_4e543715735568012740d8b1a5e" UNIQUE ("feature_group_id")`);
        await queryRunner.query(`ALTER TABLE "feature" ADD CONSTRAINT "UQ_1e43309a0b5bc1a46be4662a655" UNIQUE ("feature_id")`);
        await queryRunner.query(`ALTER TABLE "item_prices" ADD CONSTRAINT "UQ_04d30fddf8b66b92354759dbe08" UNIQUE ("item_price_id")`);
        await queryRunner.query(`ALTER TABLE "role_feature" ADD CONSTRAINT "UQ_f1b13c6087078d96bb48a7bf6ae" UNIQUE ("role_feature_id")`);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_d0e5815877f7395a198a4cb0a46"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_758b8ce7c18b9d347461b30228d" UNIQUE ("user_id")`);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_32a6fc2fcb019d8e3a8ace0f55f"`);
        await queryRunner.query(`ALTER TABLE "role" ADD CONSTRAINT "UQ_df46160e6aa79943b83c81e496e" UNIQUE ("role_id")`);
        await queryRunner.query(`ALTER TABLE "user_session" ADD CONSTRAINT "UQ_f53307a84bc385af0550f21aa9a" UNIQUE ("user_session_id")`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_orders_customers" FOREIGN KEY ("customer_id") REFERENCES "customers"("customer_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_orders_items" FOREIGN KEY ("item_id") REFERENCES "items"("item_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "customer_points" ADD CONSTRAINT "FK_customer_points_customers" FOREIGN KEY ("customer_id") REFERENCES "customers"("customer_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_32a6fc2fcb019d8e3a8ace0f55f" FOREIGN KEY ("role_id") REFERENCES "role"("role_id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_d0e5815877f7395a198a4cb0a46" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_d0e5815877f7395a198a4cb0a46"`);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_32a6fc2fcb019d8e3a8ace0f55f"`);
        await queryRunner.query(`ALTER TABLE "customer_points" DROP CONSTRAINT "FK_customer_points_customers"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_orders_items"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_orders_customers"`);
        await queryRunner.query(`ALTER TABLE "user_session" DROP CONSTRAINT "UQ_f53307a84bc385af0550f21aa9a"`);
        await queryRunner.query(`ALTER TABLE "role" DROP CONSTRAINT "UQ_df46160e6aa79943b83c81e496e"`);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_32a6fc2fcb019d8e3a8ace0f55f" FOREIGN KEY ("role_id") REFERENCES "role"("role_id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_758b8ce7c18b9d347461b30228d"`);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_d0e5815877f7395a198a4cb0a46" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "role_feature" DROP CONSTRAINT "UQ_f1b13c6087078d96bb48a7bf6ae"`);
        await queryRunner.query(`ALTER TABLE "item_prices" DROP CONSTRAINT "UQ_04d30fddf8b66b92354759dbe08"`);
        await queryRunner.query(`ALTER TABLE "feature" DROP CONSTRAINT "UQ_1e43309a0b5bc1a46be4662a655"`);
        await queryRunner.query(`ALTER TABLE "feature_group" DROP CONSTRAINT "UQ_4e543715735568012740d8b1a5e"`);
        await queryRunner.query(`ALTER TABLE "customer_points" DROP CONSTRAINT "UQ_1d2774ad9b851779b7b7bc217b2"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP CONSTRAINT "UQ_6c444ce6637f2c1d71c3cf136c1"`);
        await queryRunner.query(`ALTER TABLE "customer_points" ADD CONSTRAINT "FK_customer_points_customers" FOREIGN KEY ("customer_id") REFERENCES "customers"("customer_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_orders_customers" FOREIGN KEY ("customer_id") REFERENCES "customers"("customer_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "UQ_cad55b3cb25b38be94d2ce831db"`);
        await queryRunner.query(`ALTER TABLE "items" DROP CONSTRAINT "UQ_d0249fbc104e3bd71b5a0ecf3b1"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_orders_items" FOREIGN KEY ("item_id") REFERENCES "items"("item_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "item_category" DROP CONSTRAINT "UQ_7173efc7a9b80590cd4f5a00264"`);
        await queryRunner.query(`COMMENT ON COLUMN "role_feature"."can_manage" IS 'User have permission to manage records or not.'`);
        await queryRunner.query(`ALTER TABLE "role_feature" DROP COLUMN "can_manage"`);
        await queryRunner.query(`COMMENT ON COLUMN "role_feature"."can_delete" IS 'User have permission to delete an existing record or not.'`);
        await queryRunner.query(`ALTER TABLE "role_feature" DROP COLUMN "can_delete"`);
        await queryRunner.query(`COMMENT ON COLUMN "role_feature"."can_view" IS 'User have permission to view records or not.'`);
        await queryRunner.query(`ALTER TABLE "role_feature" DROP COLUMN "can_view"`);
        await queryRunner.query(`COMMENT ON COLUMN "role_feature"."can_modify" IS 'User have permission to modify an existing record or not.'`);
        await queryRunner.query(`ALTER TABLE "role_feature" DROP COLUMN "can_modify"`);
        await queryRunner.query(`COMMENT ON COLUMN "role_feature"."can_create" IS 'User have permission to create new record or not.'`);
        await queryRunner.query(`ALTER TABLE "role_feature" DROP COLUMN "can_create"`);
        await queryRunner.query(`ALTER TABLE "role_feature" ADD "canManage" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "role_feature" ADD "canDelete" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "role_feature" ADD "canView" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "role_feature" ADD "canModify" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "role_feature" ADD "canCreate" boolean NOT NULL`);
    }

}
