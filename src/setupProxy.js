import { proxy } from 'http-proxy-middleware';
// const proxy = require('http-proxy-middleware');

module.exports = function(app) {
	app.use(
		proxy('/.netlify/functions/', {
			target: 'http://localhost:9000/',
			// target: 'https://film-explorer.netlify.com/',
			pathRewrite: {
				'^/\\.netlify/functions': ''
			}
		})
	);
};
