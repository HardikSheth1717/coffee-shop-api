import { INestApplication } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { createDocumentBuilder } from '@config/swagger/util.swagger';
import { ItemModule } from '../item.module';
import { CUSTOM_CSS } from '@core/constants/swagger.constant';
import { SwaggerApiKeys } from '@core/constants/enums/swagger.enum';

export default function getSwaggerDocument(app: INestApplication) {
	const documentBuilder = createDocumentBuilder('Item');

	const document = SwaggerModule.createDocument(app, documentBuilder, {
		include: [ItemModule]
	});

	SwaggerModule.setup(SwaggerApiKeys.CATEGORY_MASTER, app, document, {
		customCss: CUSTOM_CSS,
		customJs: 'custom.js',
		swaggerOptions: {
			persistAuthorization: true
		}
	});
}
