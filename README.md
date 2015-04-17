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
		route: '/documentation'
	}
}, callback);
```
