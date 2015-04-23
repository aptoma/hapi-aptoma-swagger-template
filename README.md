Hapi Aptoma Swagger Template
============================

This is a plugin for rendering Swagger docs with Aptoma's styling inside Hapi projects.

The styling part has not been added yet.

Usage
-----

`npm install hapi-aptoma-swagger-template --save`

```javascript
server.register({
	register: require('hapi-aptoma-swagger-template'),
	options: {
		route: '/documentation',
		auth: false,
		swaggeruiAssetsPath: '/docs/' // same value as hapi-swagger endpoint config option
	}
}, callback);
```
