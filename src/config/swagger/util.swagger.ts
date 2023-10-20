import { DocumentBuilder, OpenAPIObject } from '@nestjs/swagger';
import { API_VERSION } from '@core/constants/common.constant';

export function createDocumentBuilder(
	moduleName: string
): Omit<OpenAPIObject, 'paths'> {
	const documentBuilder = new DocumentBuilder()
		.addBearerAuth(
			{
				type: 'http',
				scheme: 'bearer',
				bearerFormat: 'JWT'
			},
			'access-token'
		)
		.setTitle(
			moduleName
				? `Coffee Shop API Documentation (${moduleName})`
				: 'Coffee Shop API Documentation'
		)
		.setDescription(
			moduleName
				? `This is a complete API guide for ${moduleName} module.<br /><br /><br /><a href="${process.env.BASE_URL}:${process.env.SERVER_PORT}">Home</a>`
				: `This is a complete API guide for Coffee Shop.<br /><br /><br /><a href="${process.env.BASE_URL}:${process.env.SERVER_PORT}">Home</a>`
		)
		.setVersion(API_VERSION)
		.addTag(
			moduleName
				? `coffee shop, api, nestjs, ${moduleName.toLowerCase()}`
				: 'coffee shop, api, nestjs'
		)
		.build();

	return documentBuilder;
}
