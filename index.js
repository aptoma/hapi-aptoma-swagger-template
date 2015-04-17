'use strict';

var Hoek = require('hoek');
var defaults = {
	route: '/swaggerdocs'
};

exports.register = function (plugin, options, next) {
	plugin.dependency('hapi-swagger');

	options = Hoek.applyToDefaults(defaults, options);

	plugin.route({
		method: 'GET',
		path: options.route,
		config: {
			auth: false,
			handler: function (req, reply) {
				reply.file(__dirname + '/templates/index.html');
			}
		}
	});

	next();
};

exports.register.attributes = {
	pkg: require('./package.json')
};
