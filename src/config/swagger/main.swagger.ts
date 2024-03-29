import { INestApplication } from '@nestjs/common';
import AuthSwagger from '@modules/auth/swagger/auth.swagger';
import CategorySwagger from '@modules/category/swagger/category.swagger';
import ItemSwagger from '@modules/items/swagger/item.swagger';
import ItemPriceSwagger from '@modules/item-prices/swagger/item-price.swagger';
import CustomerSwagger from '@modules/customers/swagger/customer.swagger';
import CustomerPointsSwagger from '@modules/customer-points/swagger/customer-point.swagger';
import OrderSwagger from '@modules/orders/swagger/order.swagger';
import FeatureSwagger from '@modules/feature/swagger/feature.swagger';
import FeatureGroupSwagger from '@modules/feature-group/swagger/feature-group.swagger';
import RoleSwagger from '@modules/user/role/swagger/role.swagger';
import RoleFeatureSwagger from '@modules/user/role-feature/swagger/role-feature.swagger';
import UserAccountSwagger from '@modules/user/user-account/swagger/user-account.swagger';

export function MainSwagger(app: INestApplication) {
	AuthSwagger(app);
	FeatureSwagger(app);
	RoleSwagger(app);
	RoleFeatureSwagger(app);
	UserAccountSwagger(app);
	FeatureSwagger(app);
	FeatureGroupSwagger(app);
	CategorySwagger(app);
	ItemSwagger(app);
	ItemPriceSwagger(app);
	CustomerSwagger(app);
	CustomerPointsSwagger(app);
	OrderSwagger(app);
}
