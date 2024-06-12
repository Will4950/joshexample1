import next from 'next';
import {createServer} from 'node:http';

import app from './lib/express.mjs';

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = process.env.PORT || 3000;

const nextApp = next({dev, hostname, port});
const handler = nextApp.getRequestHandler();

app.use((req, res) => handler(req, res));
const httpServer = createServer(app);

httpServer
	.once('error', (err) => {
		console.error(err);
		process.exit(1);
	})
	.listen(port, async () => {
		dev
			? console.log(
					`!!! DEV MODE\n> http server ready: http://${hostname}:${port}`
				)
			: console.log('> http server ready');
		await nextApp.prepare();
		console.log(`> nextApp prepared`);
	});
