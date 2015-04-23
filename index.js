'use strict';

var Hoek = require('hoek');
var Handlebars = require('handlebars');
var fs = require('fs');
var defaults = {
	route: '/swaggerdocs',
	auth: false,
	swaggeruiAssetsPath: '/swaggerui-assets'
};

exports.register = function (plugin, options, next) {
	var template = Handlebars.compile(fs.readFileSync(__dirname + '/templates/index.html').toString());
	plugin.dependency('hapi-swagger');

	options = Hoek.applyToDefaults(defaults, options);

	plugin.route({
		method: 'GET',
		path: options.route,
		config: {
			auth: options.auth,
			handler: function (req, reply) {
				reply(template({assetsPath: options.swaggeruiAssetsPath}));
			}
		}
	});

	next();
};

exports.register.attributes = {
	pkg: require('./package.json')
};
