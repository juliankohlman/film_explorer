import { proxy } from 'http-proxy-middleware';
// const proxy = require('http-proxy-middleware');

module.exports = function(app) {
	app.use(
		proxy('/.netlify/functions/', {
			// target: 'http://localhost:3000/',
			target: 'http://localhost:9000/',
			pathRewrite: {
				'^/\\.netlify/functions': ''
			}
		})
	);
};
